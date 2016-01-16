// populate store array using "stores.push(this);" within an object to add the object to an array (named stores)
'use strict';

// ARRAY TO HOLD
// OBJECT CONSTRUCTOR
  // NAME
  // abbr
  // customer min
  // customer max
  // ave cup
  // ave lbs
  // customer / hour array

// TEST VARIABLES:
var hours = ['6:00am', '7:00am'];
var data = [hours, 'data 1', 'data 2', 'data 3', 'data 4', 'data 5'];
var hours_business = 3;
var header_content = [
  'Hours',
  'Total lbs.',
  'Customer/Hour',
  'Cups/Hour',
  'Cups/Hour (lbs)',
  'lbs/Hour'
];
var data_tbl = [hours, data];


function createTable() {
  var tbl = document.createElement('table');
  document.body.appendChild(tbl);
  createRow(tbl, 'th', header_content, ''); // HEADER ROW
  for (var i = 0; i < hours.length; i++) {
    createRow(tbl, 'td', data, i);  // DATA ROWS
  };
};

function createRow(tbl, cell_type, content, i) {
  var tbl_row = document.createElement('tr');
  tbl.appendChild(tbl_row);

  for (var j = 0; j < content.length; j++) {
    createCell(cell_type, tbl_row, content, j, i);
  };
}

function createCell(cell_type, tr, content, j, i) {
  var td = document.createElement(cell_type);
  td.textContent = ((typeof(content[j]) === 'object') ? content[j][i] : content[j]);
  tr.appendChild(td);
}
