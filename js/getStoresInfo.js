// DISCLAIMER:
// This script was developed using the folling guide as reference
// https://www.w3schools.com/js/js_json_parse.asp

// Start Point (when the page is loaded)
getStoresList("http://challenge.getmore.com.br/stores", "Do not sort");

// Get a list of all stores and sort it.
// Remove all child nodes from "stores_container",
// then show each store in a bootstrap card element.
function getStoresList(url, sortBy) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (this.readyState==4 && this.status==200) {
      storesList = JSON.parse(this.responseText);
      storesList = sortStoresList(storesList, sortBy);
      clearAllStoreCards();
      for(var i=0; i<storesList.length; i++) {
        insertStoreIntoHTML(storesList[i], i);
      }
      setStoreAmountElement(storesList.length);
    }
  };
  xmlHttp.open("GET", url, true);
  xmlHttp.send();
}

// Get all the information of one store (by store.id),
// then show it into a bootstrap modal element.
// The 'showStoreModal' function is defined in the js/modalScript.js script.
function getStoreDetails(url, storeID) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (this.readyState==4 && this.status==200) {
      var storeDetails = JSON.parse(this.responseText);
      showStoreModal(storeDetails);
    }
  };
  xmlHttp.open("GET", url + storeID, true);
  xmlHttp.send();
}
