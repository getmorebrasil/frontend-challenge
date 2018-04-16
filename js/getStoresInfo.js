// DISCLAIMER:
// This script was developed using the folling guide as reference
// https://www.w3schools.com/js/js_json_parse.asp


// Get a list of all stores,
// then show each store in a bootstrap card element.
// The 'insertStoreIntoHTML' function is defined in the js/cardScript.js script.
function getStoresList(url) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState==4 && this.status==200) {
      var stores_list = JSON.parse(this.responseText);
      for(var i=0; i<stores_list.length; i++) {
        insertStoreIntoHTML(stores_list[i], i);
      }
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}


// Get all the information of one store (by store.id),
// then show it into a bootstrap modal element.
// The 'showStoreModal' function is defined in the js/modalScript.js script.
function getStoreDetails(url, store_id) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState==4 && this.status==200) {
      var store_details = JSON.parse(this.responseText);
      showStoreModal(store_details);
    }
  };
  xmlhttp.open("GET", url + store_id, true);
  xmlhttp.send();
}

getStoresList("http://challenge.getmore.com.br/stores");
