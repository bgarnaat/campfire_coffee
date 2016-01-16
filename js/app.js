// JavaScript file
'use strict';

var counter_sum_even = 0;

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
  hours: [],

  getHours: function() {
    for (var i = this.hour_open; i < this.hour_close; i++) {
      var j = i - this.hour_open;
      if (i < 12) {
        data_time.hours.push(i + ':00am');
      } else if (i === 12) {
        data_time.hours.push(i + ' noon');
      } else {
        data_time.hours.push((i - 12) + ':00pm');
      }
    }
  }
}
data_time.getHours();  // call function to generate hours


// CREATE A TABLE PLACEHOLDER TO STORE SUMMARY DATA FOR ALL STORES (TOTAL SALES PER DAY)
var tbl_summary = document.createElement('table');
document.body.appendChild(tbl_summary);
var tbl_sum_th_r = document.createElement('tr');
tbl_summary.appendChild(tbl_sum_th_r);
var tbl_sum_th_name = document.createElement('th');
tbl_sum_th_name.textContent = 'Total Daily Sales By Hour';
tbl_sum_th_name.colSpan=(data_time.hours.length + 1);
tbl_sum_th_r.appendChild(tbl_sum_th_name);
tbl_sum_th_r = document.createElement('tr');
tbl_summary.appendChild(tbl_sum_th_r);
tbl_sum_th_name = document.createElement('th');
tbl_sum_th_name.textContent = 'Location';
tbl_sum_th_r.appendChild(tbl_sum_th_name);
for (var i = 0; i < data_time.hours.length; i++) {
  var tbl_sum_th = document.createElement('th');
  tbl_sum_th.textContent = data_time.hours[i];
  tbl_sum_th_r.appendChild(tbl_sum_th);
}


// declare array object to hold instances of location objects.  This will allow scalability.
var data_location = [];
for (var i = 0; i < data.names.length; i++) {
  // fomat of data = [data.names, data.name_abbr, data.customer_min, data.customer_max, data.cup_ave, data.lbs_ave]
  data_location.push(new Location(data.names[i], data.name_abbr[i], data.customer_min[i], data.customer_max[i], data.cup_ave[i], data.lbs_ave[i]));
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
  this.total_day = 0;
  this.data_loc = [data_time.hours, this.total_hour, this.cust_hour, this.cup_hour, this. cup_hour_lb, this.lbs_hour];
  this.getCalcs = function() { // call functions declared at end of file.
    for (var i = 0; i < data_time.hours.length; i++) {
      this.cust_hour.push(calcCustHour(this.customer_min, this.customer_max));
      this.cup_hour.push(calcCupHour(this.cust_hour[i], this.cups_ave));
      this.cup_hour_lb.push(calcCupHourlbs(this.cup_hour[i]));
      this.lbs_hour.push(calcLbsHour(this.cust_hour[i], this.lbs_ave));
      this.total_hour.push(calcTotalHour(this.cup_hour_lb[i], this.lbs_hour[i]));
      this.total_day += this.total_hour[i];
    }
  };
  this.getCalcs();
  addTblSumRow(tbl_summary, this.loc_name, this.total_hour);
  createTable(this.loc_name, this.data_loc, this.total_day);
}


// TABLE CREATION FUNCTION
function createTable(tbl_title, data, total_day) {  // create table with rows/cells
  var tbl_home = document.createElement('section');
  var tbl = document.createElement('table');
  tbl_home.appendChild(tbl);
  document.body.appendChild(tbl_home);

  createHeader(tbl, tbl_title, data.length);

  createRow(tbl, 'th', columns, ''); // HEADER ROW

  for (var i = 0; i < data_time.hours.length; i++) {
    createRow(tbl, 'td', data, i);  // DATA ROWS
  };

  createFooter(tbl, total_day);
};

function createHeader(tbl, tbl_title, size) {
  var tbl_th_r1 = document.createElement('tr');
  var tbl_th_title = document.createElement('th');
  tbl_th_title.textContent = tbl_title;
  tbl_th_title.colSpan=size;
  tbl_th_r1.appendChild(tbl_th_title);
  tbl.appendChild(tbl_th_r1);
}

// function to create row within table (use wtih createTable)
function createRow(tbl, cell_type, content, i) {
  var tbl_row = document.createElement('tr');
  ((i % 2 === 0) && (cell_type === 'td')) ? tbl_row.className='td_even' : tbl_row.className='td_odd';
  tbl.appendChild(tbl_row);

  for (var j = 0; j < content.length; j++) {
    createCell(cell_type, tbl_row, content, j, i);
  };
}

// function to create table cell (use with createRow)
function createCell(cell_type, tr, content, j, i) {
  var td = document.createElement(cell_type);
  td.textContent = ((typeof(content[j]) === 'object') ? content[j][i] : content[j]);
  tr.appendChild(td);
}

function createFooter(tbl, total_day) {
  var tf = document.createElement('tfoot');
    tbl.appendChild(tf);

    createRow(tf, 'td', total_day, 0)

    var tf_row = document.createElement('tr');
    tf.appendChild(tf_row);
    var tf_td_1 = document.createElement('td');
    tf_td_1.textContent = 'Total';
    tf_row.appendChild(tf_td_1);
    var tf_td_2 = document.createElement('td');
    tf_td_2.textContent = total_day.toFixed(2);
    tf_row.appendChild(tf_td_2);
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
  return Math.ceil(cust_hour * cup_ave);
}

function calcCupHourlbs(cupHour) {
  return Math.ceil(cupHour / 20);
}

function calcLbsHour(cust_hour, lbs_ave) {
  return Math.ceil(cust_hour * lbs_ave);
}

function calcTotalHour(cup_hour_lbs, lbs_hour) {
  return (cup_hour_lbs + lbs_hour);
}

function addTblSumRow(tbl, param_1, param_2) {

  var tbl_row = document.createElement('tr')
  var tbl_cell_loc = document.createElement('td');
  tbl_cell_loc.textContent = param_1;
  tbl_row.class_name = (counter_sum_even % 2 === 0) ? tbl_row.className='td_even' : tbl_row.className='td_odd';  // even/odd for highlight
  tbl_row.appendChild(tbl_cell_loc);

  for (var i = 0; i < param_2.length; i++) {
    var tbl_cell = document.createElement('td')
    tbl_cell.textContent = param_2[i].toFixed(2);
    tbl_row.appendChild(tbl_cell);
  }
  tbl.appendChild(tbl_row);
  counter_sum_even++; // used to determine even/odd rows
}

//
// function createParent(el_type, class_name, id_name) {
//   var parent_object = document.createElement(el_type);
//   counter_parent++;
//   if (class_name != '') {
//     parent_object.className += class_name;
//   } else {
//     parent_object.className += ('parent_object ' + counter_parent);
//   }
//   if (class_name != '') {
//     parent_object.id = class_name;
//   } else {
//     parent_object.id = ('parent_object ' + counter_parent);
//   }
//   document.body.appendChild(parent_object);
// }
