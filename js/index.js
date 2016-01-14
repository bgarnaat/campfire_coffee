// index.html generator page
'use strict';

// MAKE A HEADER BAR WITH A LOGO
// PUT A NAVIGATION BAR
// MAKE A PURDY THING HERE
// FOLLOWED BY SOME OTHER STUFF
// PUT SOME CONTENT IN
// MAYBE PUT A FOOTER AT THE BOTTOM
// ADD IN SOME NICE CRAP FOR PEOPLE TO LIKE


// HEAD
    // LOGO
    // NAV BAR
// BODY
    // LOCATIONS
    // HOURS
// FOOTER
    // SOMETHING NICE
var counter_article = 0;
var art_1 = 'About you.  Not us, you.  YOU BUY THE BEANS, Thanks! :)';
var art_2 = 'this is really an image, trust us.';
var art_3 = 'Our historic story of history and hist-story.  We\'re too old for this shit.  ';
var art_5 = 'Practing Sustainability';
var art_4 = 'Sustaining practability';
var article_content = [art_1, art_2, art_3, art_4, art_5];

createHeader();
createSection(3);
createSection(2);


// add some content to some things because content
for (var i = 0; i < article_content.length; i++) {
  var article = "article_" + (i + 1);
  console.log(article);
  document.getElementById(article).textContent = article_content[i];
}


// FUN-ctions! \o/

function createHeader() {
  var header = document.createElement('header');
  //  header.textContent = "header words";
  document.body.appendChild(header);

  createLogo(header);
  createNavBar(header);
}

function createLogo(header) {
  // body...
  var nav_logo = document.createElement('img');
  nav_logo.className += 'nav_logo';
  header.appendChild(nav_logo);
}

function createNavBar(header) {
  var nav_bar = document.createElement('nav');
  // nav_bar.textContent = 'nav words';
  header.appendChild(nav_bar);

  createNavBarList(nav_bar);
}

function createNavBarList(nav_bar) {
  var nav_bar_list = document.createElement('ul');
  nav_bar.appendChild(nav_bar_list);

  var nav_item_text = ['Home', 'About', 'History', 'Go Home'];
  for (var i = 0; i < nav_item_text.length; i++) {
    createNavItem(nav_bar_list, nav_item_text[i]);
  }
}

function createNavItem(nav_bar, nav_item_text) {
  var nav_item = document.createElement('li');
  nav_item.textContent = nav_item_text;
  nav_item.className += 'nav_item';
  nav_bar.appendChild(nav_item);
}


// BODY SECTION
function createSection(columns) {
  var section = ('section_' + columns);
  var section = document.createElement('section');
  // section.textContent = 'section with ' + columns + ' columns';
  section.className += 'section_columns_' + columns;
  document.body.appendChild(section);

  for (var i = 0; i < columns; i++) {
    createArticle(section, columns)
  }
}

function createArticle(section, columns) {
  counter_article++;
  var article = document.createElement('article');
  article.textContent = 'article words';
  article.className += 'article_columns_' + columns;
  article.id = 'article_' + counter_article;
  section.appendChild(article);
}
