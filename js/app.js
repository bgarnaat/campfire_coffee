// JavaScript file
'use strict';

// TWO OPTIONS:
//    var loc_place1 = [place1, min1, max1, cup_ave1, lb_av1]
//    var loc_place2 = [place2, min2, max2, cup_ave2, lb_av2]
//    etc
// OR
//    var loc = [place1, place2, place3, etc]
//    var cust_min = [min1, min2, min3, etc]
//    var cust_max = [max1, max2, max3, etc]
//    etc
//
// OPTIONS 2 ALLOWS SCALABILITY.

var data = {
  names: ['Pike\'s Place Market', 'Capitol Hill', 'Seattle Public Library', 'South Lake Union', 'Sea-Tac Airport', 'Website'],
  name_abbr: ['ppm', 'chl', 'spl', 'slu', 'sea', 'web'],
  customer_min: [14, 32, 49, 35, 68, 3],
  customer_max: [55, 48, 75, 88, 124, 6],
  cup_ave: [1.2, 3.2, 2.6, 1.3, 1.1, 0],
  lbs_ave: [3.7, 0.4, 0.2, 3.7, 2.7, 6.7]
}

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
  data_location[i] = new Location(data.names[i], data.customer_min[i], data.customer_max[i], data.cup_ave[i], data.lbs_ave[i]);
}


function Location(name, min, max, cup_ave, lbs_ave) {
  this.loc_name = name;
  this.customer_min = min;
  this.customer_max = max;
  this.cups_ave = cup_ave;
  this.lbs_ave = lbs_ave;
  this.cust_hour = [];
  this.cup_hour = [];
  this.cup_hour_lb = [];
  this.lbs_hour = [];
  this.total_hour = [];
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
}

// create array to store data used to populate table.  this allows program to loop through array vs explicitly call each property.
var data_loc = [];
for (i = 0; i < data_location.length; i++) {
  data_loc[i] = [data_time.hours, data_location[i].total_hour, data_location[i].cust_hour, data_location[i].cup_hour, data_location[i].cup_hour_lb, data_location[i].lbs_hour];
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
// loop that creates and populates table.
for (var i = 0; i < data_loc.length; i++) {
  var loc_tbl = document.createElement('p');
  document.body.appendChild(loc_tbl);
  var loc_tbl_header = document.createElement('h3');
  loc_tbl_header.textContent = data_location[i].loc_name + ' Estimated Sales:';
  loc_tbl.appendChild(loc_tbl_header);
  // create and fill table
  var tbl = document.createElement('table');
  loc_tbl.appendChild(tbl);

  // create and fill table header info.
  for (var j = 0; j < columns.length; j++) {
    var tbl_head = function() {
      var head = document.createElement('th');
      head.textContent = columns[j];
      tbl.appendChild(head);
    }();
  }

  // create and fill table rows.
  for (var j = data_time.hour_open; j < data_time.hour_close; j++) {
    var row = document.createElement('tr');
    tbl.appendChild(row);

    for (var k = 0; k < data_loc[i].length; k++){  // fill table rows.
      var td = document.createElement('td');
      if (typeof(data_loc[i][k][j - data_time.hour_open]) !== 'string') {
        td.textContent = (Math.round(data_loc[i][k][j - data_time.hour_open] * 10 ) / 10);
      }
      else {
        td.textContent = data_loc[i][k][j - data_time.hour_open];
      }
      row.appendChild(td);
    }
  }
}


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
