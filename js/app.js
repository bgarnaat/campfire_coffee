// JavaScript file
'use strict';


var data = {
  names: ['Pike\'s Place Market', 'Capitol Hill', 'Seattle Public Library', 'South Lake Union', 'Sea-Tac Airport', 'Website'],
  name_abbr: ['ppm', 'chl', 'spl', 'slu', 'sea', 'web'],
  customer_min: [14, 32, 49, 35, 68, 3],
  customer_max: [55, 48, 75, 88, 124, 6],
  cup_ave: [1.2, 3.2, 2.6, 1.3, 1.1, 0],
  lbs_ave: [3.7, 0.4, 0.2, 3.7, 2.7, 6.7]
}


// some loops to create and fill tables.  array provides values for headers.
var columns = [
  'Hour',
  'Total lbs.',
  'Customers/Hour',
  'Cups/Hour',
  'Cup/hour (lbs)',
  'lbs./Hour'
];


// generate hours block.  veerrrrrryyyy useful block of code.  Trust me.
var data_time = {
  hour_open: 6,  // open at 0600
  hour_close: 21,  // close at 2100
  hours: [''],

  getHours: function() {
    for (var i = this.hour_open; i < this.hour_close; i++) {
      var j = i - this.hour_open;
      if (i < 12) {
        data_time.hours[j] = (i + ':00am');
      } else if (i === 12) {
        data_time.hours[j] = (i + ' noon');
      } else {
        data_time.hours[j] = (i + ':00pm');
      }
    }
  }
}
data_time.getHours();  // call function to generate hours

// declare array object to hold instances of location objects.  This will allow scalability.
var data_location = [];
for (var i = 0; i < data.names.length; i++) {
  // fomat of data = [data.names, data.name_abbr, data.customer_min, data.customer_max, data.cup_ave, data.lbs_ave]
  data_location[i] = new Location(data.names[i], data.name_abbr[i], data.customer_min[i], data.customer_max[i], data.cup_ave[i], data.lbs_ave[i]);
}


function Location(name, abbr, min, max, cup_ave, lbs_ave) {
  this.loc_name = name;
  this.loc_name_abbr = abbr;
  this.customer_min = min;
  this.customer_max = max;
  this.cups_ave = cup_ave;
  this.lbs_ave = lbs_ave;
  this.cust_hour = [];
  this.cup_hour = [];
  this.cup_hour_lb = [];
  this.lbs_hour = [];
  this.total_hour = [];
  this.data_loc = [data_time.hours, this.total_hour, this.cust_hour, this.cup_hour, this. cup_hour_lb, this.lbs_hour];
  this.getCalcs = function() { // call functions declared at end of file.
    for (var i = data_time.hour_open; i < data_time.hour_close; i++) {
      var j = i - data_time.hour_open;  // save some typing for each array index...

      this.cust_hour.push(calcCustHour(this.customer_min, this.customer_max));
      this.cup_hour.push(calcCupHour(this.cust_hour[j], this.cups_ave));
      this.cup_hour_lb.push(calcCupHourlbs(this.cup_hour[j]));
      this.lbs_hour.push(calcLbsHour(this.cust_hour[j], this.lbs_ave));
      this.total_hour.push(calcTotalHour(this.cup_hour_lb[j], this.lbs_hour[j]));
    }
  };
  this.getCalcs();
  renderTable(this.loc_name, this.data_loc);
}


// loop that creates and populates table.  <p> added to isolate and space out tables.
function renderTable(name, data_obj) {
  var loc_tbl = document.createElement('p');
  document.body.appendChild(loc_tbl);
  // create and fill table
  var tbl = document.createElement('table');
  loc_tbl.appendChild(tbl);

  var loc_tbl_header = document.createElement('thead');
  tbl.appendChild(loc_tbl_header);

  var th_r1 = document.createElement('tr');
  loc_tbl_header.appendChild(th_r1);
  var th_r1_d1 = document.createElement('th');
  th_r1_d1.textContent = name + ' Estimated Sales:';
  th_r1_d1.colSpan=columns.length;
  th_r1.appendChild(th_r1_d1);

  var th_r2 = document.createElement('tr');
  loc_tbl_header.appendChild(th_r2);
  // create and fill table header info.
  for (var j = 0; j < columns.length; j++) {
    var tbl_head = function() {
      var head_r2 = document.createElement('th');
      head_r2.textContent = columns[j];
      th_r2.appendChild(head_r2);
    }();
  }

  var tb = document.createElement('tbody');
  // create and fill table rows.
  for (var j = data_time.hour_open; j < data_time.hour_close; j++) {
    var row = document.createElement('tr');
    tbl.appendChild(row);

    for (var k = 0; k < data_obj.length; k++){  // fill table rows.
      var td = document.createElement('td');
      if (typeof(data_obj[k][j - data_time.hour_open]) !== 'string') {
        td.textContent = (Math.round(data_obj[k][j - data_time.hour_open] * 10 ) / 10);
      }
      else {
        td.textContent = data_obj[k][j - data_time.hour_open];
      }
      row.appendChild(td);
    }
  }
}


// EVENT HANDLERS:

function eventHandlerSubmit(event) {
  event.preventDefault();

  if (!event.target.input_name.value || !event.target.input_abbr.value || !event.target.input_min.value || !event.target.input_max.value || !event.target.input_ave_cups.value || !event.target.input_ave_lbs.value) {
    return alert('fields cannot be empty');
  }

  var input = {
    in_name: event.target.input_name.value,
    in_abbr: event.target.input_abbr.value,
    in_min: event.target.input_min.value,
    in_max: event.target.input_max.value,
    in_cup: event.target.input_ave_cups.value,
    in_lbs: event.target.input_ave_lbs.value
  };

  data_location.push(new Location(input.in_name, input.in_abbr, input.in_min, input.in_max, input.in_cup, input.in_lbs));


  event.target.input_name.value = null;
  event.target.input_abbr.value = null;
  event.target.input_min.value = null;
  event.target.input_max.value = null;
  event.target.input_ave_cups.value = null;
  event.target.input_ave_lbs.value = null;
}

add_new_location.addEventListener('submit', eventHandlerSubmit);


// FUNCTIONS

function calcCustHour(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calcCupHour(cust_hour, cup_ave) {
  return (cust_hour * cup_ave);
}

function calcCupHourlbs(cupHour) {
  return (cupHour / 20);
}

function calcLbsHour(cust_hour, lbs_ave) {
  return (cust_hour * lbs_ave);
}

function calcTotalHour(cup_hour_lbs, lbs_hour) {
  return (cup_hour_lbs + lbs_hour);
}
