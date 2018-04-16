setDropdownButtonsAction();

// Get each dropdown button and set the "onclick" function.
function setDropdownButtonsAction() {
  setDropdownIDButton();
  setDropdownNameButton();
  setDropdownTakebackButton();
  setDropdownRatingButton();
}

// This auxiliary function is called by the 'setDropdownButtonsAction' function.
function setDropdownIDButton() {
  var element_IDBtn = document.getElementById("sortByID");
  element_IDBtn.href = "javascript:void(0);";
  element_IDBtn.onclick = function() {
    getStoresList("http://challenge.getmore.com.br/stores", "id");
  }
}

// This auxiliary function is called by the 'setDropdownButtonsAction' function.
function setDropdownNameButton() {
  var element_nameBtn = document.getElementById("sortByName");
  element_nameBtn.href = "javascript:void(0);";
  element_nameBtn.onclick = function() {
    getStoresList("http://challenge.getmore.com.br/stores", "name");
  }
}

// This auxiliary function is called by the 'setDropdownButtonsAction' function.
function setDropdownTakebackButton() {
  var element_takebackBtn = document.getElementById("sortByTakeback");
  element_takebackBtn.href = "javascript:void(0);";
  element_takebackBtn.onclick = function() {
    getStoresList("http://challenge.getmore.com.br/stores", "takeback");
  }
}

// This auxiliary function is called by the 'setDropdownButtonsAction' function.
function setDropdownRatingButton() {
  var element_ratingBtn = document.getElementById("sortByRating");
  element_ratingBtn.href = "javascript:void(0);";
  element_ratingBtn.onclick = function() {
    getStoresList("http://challenge.getmore.com.br/stores", "rating");
  }
}

// Sort the store_list, if the sortBy parameter is valid, then return it.
function sortStoresList(stores_list, sortBy) {
  switch (sortBy) {
    case "id": return sortByID(stores_list);
    case "name": return sortByName(stores_list);
    case "takeback": return sortByTakeback(stores_list);
    case "rating":  return sortByRating(stores_list);
    default: return stores_list;
  }
}

// DISCLAIMER:
// The sortBy functions were developed using the folling guide as reference
// https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
function sortByID(stores_list) {
  return stores_list.sort(function(a,b) {return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);});
}

function sortByName() {
  return stores_list.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);});
}

function sortByTakeback() {
  return stores_list.sort(function(a,b) {return (a.takeback < b.takeback) ? 1 : ((b.takeback < a.takeback) ? -1 : 0);});
}

function sortByRating() {
  return stores_list.sort(function(a,b) {return (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0);});
}
