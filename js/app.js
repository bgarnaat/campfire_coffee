// JavaScript file

var hour_open = 6;  // open at 0600
var hour_close = 21;  // close at 2100
var hours = [''];

for (i = hour_open; i < hour_close; i++) {
  if (i < 12) {
    hours[i - hour_open] = (i + ':00am');
  } else if (i === 12) {
    hours[i - hour_open] = (i + ' noon');
  } else {
    hours[i - hour_open] = (i + ':00pm');
  }
}

var loc_ppm = {
  customer_min: 14,
  customer_max: 55,
  cups_ave: 1.2,
  lbs_ave: 3.7,
  cust_hour: [''],
  cup_hour: [''],
  cup_hour_lb: [''],
  lbs_hour: [''],
  total_hour: [''],
  getCals: function() {
    for (i = hour_open; i < hour_close; i++) {
      this.cust_hour[i - hour_open] = calcCustHour(this.customer_min, this.customer_max);
      this.cup_hour[i - hour_open] = calcCupHour(this.cust_hour[i - hour_open], this.cups_ave);
      this.cup_hour_lb[i - hour_open] = this.cup_hour[i - hour_open] / 20;
      this.lbs_hour[i - hour_open] = calcLbsHour(this.cust_hour[i - hour_open], this.lbs_ave);
      this.total_hour[i - hour_open] = calcTotalHour(this.cust_hour[i - hour_open], this.lbs_hour[i - hour_open]);
    }
  }
}


var loc_chl = {
  customer_min: 14,
  customer_max: 55,
  cups_ave: 1.2,
  lbs_ave: 3.7,
  cust_hour: [''],
  cup_hour: [''],
  cup_hour_lb: [''],
  lbs_hour: [''],
  total_hour: [''],
  getCals: function() {
    for (i = hour_open; i < hour_close; i++) {
      this.cust_hour[i - hour_open] = calcCustHour(this.customer_min, this.customer_max);
      this.cup_hour[i - hour_open] = calcCupHour(this.cust_hour[i - hour_open], this.cups_ave);
      this.cup_hour_lb[i - hour_open] = this.cup_hour[i - hour_open] / 20;
      this.lbs_hour[i - hour_open] = calcLbsHour(this.cust_hour[i - hour_open], this.lbs_ave);
      this.total_hour[i - hour_open] = calcTotalHour(this.cust_hour[i - hour_open], this.lbs_hour[i - hour_open]);
    }
  }
}


var loc_spl = {
  customer_min: 14,
  customer_max: 55,
  cups_ave: 1.2,
  lbs_ave: 3.7,
  cust_hour: [''],
  cup_hour: [''],
  cup_hour_lb: [''],
  lbs_hour: [''],
  total_hour: [''],
  getCals: function() {
    for (i = hour_open; i < hour_close; i++) {
      this.cust_hour[i - hour_open] = calcCustHour(this.customer_min, this.customer_max);
      this.cup_hour[i - hour_open] = calcCupHour(this.cust_hour[i - hour_open], this.cups_ave);
      this.cup_hour_lb[i - hour_open] = this.cup_hour[i - hour_open] / 20;
      this.lbs_hour[i - hour_open] = calcLbsHour(this.cust_hour[i - hour_open], this.lbs_ave);
      this.total_hour[i - hour_open] = calcTotalHour(this.cust_hour[i - hour_open], this.lbs_hour[i - hour_open]);
    }
  }
}


var loc_slu = {
  customer_min: 14,
  customer_max: 55,
  cups_ave: 1.2,
  lbs_ave: 3.7,
  cust_hour: [''],
  cup_hour: [''],
  cup_hour_lb: [''],
  lbs_hour: [''],
  total_hour: [''],
  getCals: function() {
    for (i = hour_open; i < hour_close; i++) {
      this.cust_hour[i - hour_open] = calcCustHour(this.customer_min, this.customer_max);
      this.cup_hour[i - hour_open] = calcCupHour(this.cust_hour[i - hour_open], this.cups_ave);
      this.cup_hour_lb[i - hour_open] = this.cup_hour[i - hour_open] / 20;
      this.lbs_hour[i - hour_open] = calcLbsHour(this.cust_hour[i - hour_open], this.lbs_ave);
      this.total_hour[i - hour_open] = calcTotalHour(this.cust_hour[i - hour_open], this.lbs_hour[i - hour_open]);
    }
  }
}


var loc_sea = {
  customer_min: 14,
  customer_max: 55,
  cups_ave: 1.2,
  lbs_ave: 3.7,
  cust_hour: [''],
  cup_hour: [''],
  cup_hour_lb: [''],
  lbs_hour: [''],
  total_hour: [''],
  //   says: function() {
  //     console.log('QUACK!!!');
  //   }
  getCals: function() {
    for (i = hour_open; i < hour_close; i++) {
      this.cust_hour[i - hour_open] = calcCustHour(this.customer_min, this.customer_max);
      this.cup_hour[i - hour_open] = calcCupHour(this.cust_hour[i - hour_open], this.cups_ave);
      this.cup_hour_lb[i - hour_open] = this.cup_hour[i - hour_open] / 20;
      this.lbs_hour[i - hour_open] = calcLbsHour(this.cust_hour[i - hour_open], this.lbs_ave);
      this.total_hour[i - hour_open] = calcTotalHour(this.cust_hour[i - hour_open], this.lbs_hour[i - hour_open]);
    }
  }
}


var loc_web = {
  customer_min: 14,
  customer_max: 55,
  cups_ave: 1.2,
  lbs_ave: 3.7,
  cust_hour: [''],
  cup_hour: [''],
  cup_hour_lb: [''],
  lbs_hour: [''],
  total_hour: [''],
  //   says: function() {
  //     console.log('QUACK!!!');
  //   }
  getCals: function() {
    for (i = hour_open; i < hour_close; i++) {
      this.cust_hour[i - hour_open] = calcCustHour(this.customer_min, this.customer_max);
      this.cup_hour[i - hour_open] = calcCupHour(this.cust_hour[i - hour_open], this.cups_ave);
      this.cup_hour_lb[i - hour_open] = this.cup_hour[i - hour_open] / 20;
      this.lbs_hour[i - hour_open] = calcLbsHour(this.cust_hour[i - hour_open], this.lbs_ave);
      this.total_hour[i - hour_open] = calcTotalHour(this.cust_hour[i - hour_open], this.lbs_hour[i - hour_open]);
    }
  }
}


loc_ppm.getCals();
loc_chl.getCals();
loc_spl.getCals();
loc_slu.getCals();
loc_sea.getCals();
loc_web.getCals();

var data_ppm = [hours, loc_ppm.total_hour, loc_ppm.cust_hour, loc_ppm.cup_hour, loc_ppm.lbs_hour];
var data_chl = [hours, loc_chl.total_hour, loc_chl.cust_hour, loc_chl.cup_hour, loc_chl.lbs_hour];
var data_spl = [hours, loc_spl.total_hour, loc_spl.cust_hour, loc_spl.cup_hour, loc_spl.lbs_hour];
var data_slu = [hours, loc_slu.total_hour, loc_slu.cust_hour, loc_slu.cup_hour, loc_slu.lbs_hour];
var data_sea = [hours, loc_sea.total_hour, loc_sea.cust_hour, loc_sea.cup_hour, loc_sea.lbs_hour];
var data_web = [hours, loc_web.total_hour, loc_web.cust_hour, loc_web.cup_hour, loc_web.lbs_hour];


var ppm_ul = document.createElement('ul');
ppm_ul.textContent = ('Pike\'s Place Market');
document.body.appendChild(ppm_ul);
for (i = hour_open; i < hour_close; i++) {
  var ppm_li = document.createElement('li');
  ppm_li.textContent = (hours[i - hour_open] + ': ' + Math.ceil(loc_ppm.total_hour[i - hour_open]) + ' [' + Math.ceil(loc_ppm.cust_hour[i - hour_open]) + ' customers, ')
  ppm_li.textContent += (Math.ceil(loc_ppm.cup_hour[i - hour_open]) + ' cups (' + Math.ceil(loc_ppm.cup_hour_lb[i - hour_open]) + ' lbs), ' + Math.ceil(loc_ppm.lbs_hour[i - hour_open]) + ' lbs to-go]');
  ppm_ul.appendChild(ppm_li);
}


var ppm_ul = document.createElement('ul');
ppm_ul.textContent = ('Capitol Hill');
document.body.appendChild(ppm_ul);
for (i = hour_open; i < hour_close; i++) {
  var ppm_li = document.createElement('li');
  ppm_li.textContent = (hours[i - hour_open] + ': ' + Math.ceil(loc_chl.total_hour[i - hour_open]) + ' [' + Math.ceil(loc_chl.cust_hour[i - hour_open]) + ' customers, ')
  ppm_li.textContent += (Math.ceil(loc_chl.cup_hour[i - hour_open]) + ' cups (' + Math.ceil(loc_chl.cup_hour_lb[i - hour_open]) + ' lbs), ' + Math.ceil(loc_chl.lbs_hour[i - hour_open]) + ' lbs to-go]');
  ppm_ul.appendChild(ppm_li);
}


var ppm_ul = document.createElement('ul');
ppm_ul.textContent = ('Seattle Public Library');
document.body.appendChild(ppm_ul);
for (i = hour_open; i < hour_close; i++) {
  var ppm_li = document.createElement('li');
  ppm_li.textContent = (hours[i - hour_open] + ': ' + Math.ceil(loc_spl.total_hour[i - hour_open]) + ' [' + Math.ceil(loc_spl.cust_hour[i - hour_open]) + ' customers, ')
  ppm_li.textContent += (Math.ceil(loc_spl.cup_hour[i - hour_open]) + ' cups (' + Math.ceil(loc_spl.cup_hour_lb[i - hour_open]) + ' lbs), ' + Math.ceil(loc_spl.lbs_hour[i - hour_open]) + ' lbs to-go]');
  ppm_ul.appendChild(ppm_li);
}


var ppm_ul = document.createElement('ul');
ppm_ul.textContent = ('South Lake Union');
document.body.appendChild(ppm_ul);
for (i = hour_open; i < hour_close; i++) {
  var ppm_li = document.createElement('li');
  ppm_li.textContent = (hours[i - hour_open] + ': ' + Math.ceil(loc_slu.total_hour[i - hour_open]) + ' [' + Math.ceil(loc_slu.cust_hour[i - hour_open]) + ' customers, ')
  ppm_li.textContent += (Math.ceil(loc_slu.cup_hour[i - hour_open]) + ' cups (' + Math.ceil(loc_slu.cup_hour_lb[i - hour_open]) + ' lbs), ' + Math.ceil(loc_slu.lbs_hour[i - hour_open]) + ' lbs to-go]');
  ppm_ul.appendChild(ppm_li);
}


var ppm_ul = document.createElement('ul');
ppm_ul.textContent = ('Sea-Tac Airport');
document.body.appendChild(ppm_ul);
for (i = hour_open; i < hour_close; i++) {
  var ppm_li = document.createElement('li');
  ppm_li.textContent = (hours[i - hour_open] + ': ' + Math.ceil(loc_sea.total_hour[i - hour_open]) + ' [' + Math.ceil(loc_sea.cust_hour[i - hour_open]) + ' customers, ')
  ppm_li.textContent += (Math.ceil(loc_sea.cup_hour[i - hour_open]) + ' cups (' + Math.ceil(loc_sea.cup_hour_lb[i - hour_open]) + ' lbs), ' + Math.ceil(loc_sea.lbs_hour[i - hour_open]) + ' lbs to-go]');
  ppm_ul.appendChild(ppm_li);
}


var ppm_ul = document.createElement('ul');
ppm_ul.textContent = ('Website Sales');
document.body.appendChild(ppm_ul);
for (i = hour_open; i < hour_close; i++) {
  var ppm_li = document.createElement('li');
  ppm_li.textContent = (hours[i - hour_open] + ': ' + Math.ceil(loc_web.total_hour[i - hour_open]) + ' [' + Math.ceil(loc_web.cust_hour[i - hour_open]) + ' customers, ')
  ppm_li.textContent += (Math.ceil(loc_web.cup_hour[i - hour_open]) + ' cups (' + Math.ceil(loc_web.cup_hour_lb[i - hour_open]) + ' lbs), ' + Math.ceil(loc_web.lbs_hour[i - hour_open]) + ' lbs to-go]');
  ppm_ul.appendChild(ppm_li);
}


var columns = [
  'Hour',
  'Total lbs.',
  'Customers/Hour',
  'Cups/Hour',
  'lbs./Hour'
];

// create and fill table
var ppm_tbl = document.createElement('table');
document.body.appendChild(ppm_tbl);


// create and fill table header info.
for (i = 0; i < columns.length; i++) {
  var ppm_tbl_head = function() {
    var ppm_head = document.createElement('th');
    ppm_head.textContent = columns[i];
    ppm_tbl.appendChild(ppm_head);
  }();
}

// create and fill table rows.
for (i = hour_open; i < hour_close; i++) {
  var ppm_row = document.createElement('tr');
  ppm_tbl.appendChild(ppm_row);

  for (j = 0; j < data_ppm.length; j++){  // fill table rows.
    var ppm_td = document.createElement('td');
    ppm_td.textContent = data_ppm[j][i - hour_open];
    ppm_row.appendChild(ppm_td);
  }
}


// FUNCTIONS

function calcCustHour(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calcCupHour(cust_hour, cup_ave) {
  return (cust_hour * cup_ave);
}

function calcLbsHour(cust_hour, lbs_ave) {
  return (cust_hour * lbs_ave);
}

function calcTotalHour(cup_hour, lbs_hour) {
  return Math.ceil((cup_hour) / 20 + lbs_hour )
}


// example object literal
//
// var duck = {
//   material:  'rubber',
//   color: 'yellow',
//   squeek: false,
//   favorite_foods: ['duckweed', 'peanut butter', 'children'],
//   // call says function by duck.says
//   says: function() {
//     console.log('QUACK!!!');
//   }
// }
//
// var h1El = document.createElement('h1');  // CREATE VARIABLE
// h1El.textContent = duck.color;           // ASSIGN VARIABLE CONTENT
// document.body.appendChild(h1El);        // ADD ELEMENT TO DOCUMENT / PAGE
//
// var paragramEl = document.createElement('p');   // CREATE VARIABLE
// paragramEl.textContent = duck.favorite_foods;  // ASSGN CONTENT
// document.body.appendChild(paragramEl);        // ADD TO DOCUMENT / PAGE
