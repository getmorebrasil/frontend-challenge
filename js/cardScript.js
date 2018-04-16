//Create card-title (Store name)
//This auxiliary function is called by the 'insertStoreIntoHTML' function.
function createCardTitle(store_name) {
  var element_name = document.createElement("h5");
  element_name.className = "card-title text-dark";
  element_name.innerHTML = store_name;
  return element_name;
}

//Create card-text (Store takeback)
//This auxiliary function is called by the 'insertStoreIntoHTML' function.
function createCardText(store_takeback) {
  var element_takeback = document.createElement("p");
  element_takeback.className = "card-text text-dark";
  element_takeback.innerHTML = store_takeback.toFixed(2) + "% de Takeback";
  return element_takeback;
}

//Create card body (includes store name and takeback)
//This auxiliary function is called by the 'insertStoreIntoHTML' function.
function createCardBody(element_name, element_takeback) {
  var element_card_body = document.createElement("div");
  element_card_body.className = "card-body text-center";
  element_card_body.appendChild(element_name);
  element_card_body.appendChild(element_takeback);
  return element_card_body;
}

//Create card image (Store image_blob)
//This auxiliary function is called by the 'insertStoreIntoHTML' function.
function createCardImage(store_image) {
  var element_image = document.createElement("img");
  element_image.className = "card-img-top px-4 py-2";
  element_image.src = store_image;
  return element_image;
}

//Create clickable container
//This auxiliary function is called by the 'insertStoreIntoHTML' function.
function createClickableContainer(store_id, element_image, element_card_body) {
  var element_clickable = document.createElement("a");
  element_clickable.href = "javascript:void(0);";
  element_clickable.id = store_id;
  element_clickable.onclick = function() {
    getStoreDetails("http://challenge.getmore.com.br/stores/", this.id);
  };
  element_clickable.appendChild(element_image);
  element_clickable.appendChild(element_card_body);
  return element_clickable;
}

//Create a bootstrap card element
//This auxiliary function is called by the 'insertStoreIntoHTML' function.
function createCard(element_clickable) {
  var element_card = document.createElement("div");
  element_card.className = "card box-shadow";
  element_card.appendChild(element_clickable);
  return element_card;
}

//Create column (width 25%)
//This auxiliary function is called by the 'insertStoreIntoHTML' function.
function createColumn(element_card) {
  var element_column = document.createElement("div");
  element_column.className = "col-md-3 px-4 py-2";
  element_column.appendChild(element_card);
  return element_column;
}

// Create all the elements to make a bootstrap card, with the store information,
// then insert the card into the HTML
// This function is called by the 'getStoresList' function.
function insertStoreIntoHTML(store, store_index) {
  var element_name = createCardTitle(store.name);
  var element_takeback = createCardText(store.takeback);
  var element_card_body = createCardBody(element_name, element_takeback);
  var element_image = createCardImage(store.image_blob);
  var element_clickable = createClickableContainer(store.id, element_image, element_card_body);
  var element_card = createCard(element_clickable);
  var element_column = createColumn(element_card);
  document.getElementById("stores_container").appendChild(element_column);
  stores_list[store_index] = store;
}

// Get the stores_list length (amount), then set the "amount_id" element value.
// This function is called by the 'getStoresList' function.
function setStoreAmountElement(amount) {
  var element_amount = document.getElementById("amount_id");
  element_amount.innerHTML = amount + " lojas encontradas";
}

// Remove all child nodes from the "stores_container" element.
// This function is called by the 'getStoresList' function.
function clearAllStoreCards() {
  var element_stores_container = document.getElementById("stores_container");
  while(element_stores_container.lastChild) {
    element_stores_container.removeChild(element_stores_container.lastChild);
  }
}
