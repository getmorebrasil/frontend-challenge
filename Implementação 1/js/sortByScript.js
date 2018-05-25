// Start Point (when the page is loaded)
setDropdownButtonsAction();

// Get each dropdown button and set the "onclick" function.
function setDropdownButtonsAction() {
  setDropdownIDButton();
  setDropdownNameButton();
  setDropdownTakebackButton();
}

// This auxiliary function is called by the 'setDropdownButtonsAction' function.
function setDropdownIDButton() {
  var elementIDBtn = document.getElementById("sortByID");
  elementIDBtn.href = "javascript:void(0);";
  elementIDBtn.onclick = function() {
    getStoresList("http://challenge.getmore.com.br/stores", "id");
  }
}

// This auxiliary function is called by the 'setDropdownButtonsAction' function.
function setDropdownNameButton() {
  var elementNameBtn = document.getElementById("sortByName");
  elementNameBtn.href = "javascript:void(0);";
  elementNameBtn.onclick = function() {
    getStoresList("http://challenge.getmore.com.br/stores", "name");
  }
}

// This auxiliary function is called by the 'setDropdownButtonsAction' function.
function setDropdownTakebackButton() {
  var elementTakebackBtn = document.getElementById("sortByTakeback");
  elementTakebackBtn.href = "javascript:void(0);";
  elementTakebackBtn.onclick = function() {
    getStoresList("http://challenge.getmore.com.br/stores", "takeback");
  }
}

// Sort the store_list, if the sortBy parameter is valid, then return it.
function sortStoresList(storesList, sortBy) {
  switch (sortBy) {
    case "id": return sortByID(storesList);
    case "name": return sortByName(storesList);
    case "takeback": return sortByTakeback(storesList);
    default: return storesList;
  }
}

// DISCLAIMER:
// The sortBy functions were developed using the folling guide as reference
// https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
function sortByID(storesList) {
  return storesList.sort(function(a,b) {return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);});
}

function sortByName() {
  return storesList.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);});
}

function sortByTakeback() {
  return storesList.sort(function(a,b) {return (a.takeback < b.takeback) ? 1 : ((b.takeback < a.takeback) ? -1 : 0);});
}
