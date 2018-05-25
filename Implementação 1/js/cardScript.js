//Create card-title (Store name)
//This auxiliary function is called by the 'insertStoreIntoHTML' function.
function createCardTitle(storeName) {
  var elementName = document.createElement("h5");
  elementName.className = "card-title text-dark";
  elementName.innerHTML = storeName;
  return elementName;
}

//Create card-text (Store takeback)
//This auxiliary function is called by the 'insertStoreIntoHTML' function.
function createCardText(storeTakeback) {
  var elementTakeback = document.createElement("p");
  elementTakeback.className = "card-text text-dark";
  elementTakeback.innerHTML = storeTakeback.toFixed(2) + "% de Takeback";
  return elementTakeback;
}

//Create card body (includes store name and takeback)
//This auxiliary function is called by the 'insertStoreIntoHTML' function.
function createCardBody(elementName, elementTakeback) {
  var elementCardBody = document.createElement("div");
  elementCardBody.className = "card-body text-center";
  elementCardBody.appendChild(elementName);
  elementCardBody.appendChild(elementTakeback);
  return elementCardBody;
}

//Create card image (Store image_blob)
//This auxiliary function is called by the 'insertStoreIntoHTML' function.
function createCardImage(storeImage) {
  var elementImage = document.createElement("img");
  elementImage.className = "card-img-top px-4 py-2";
  elementImage.src = storeImage;
  return elementImage;
}

//Create clickable container
//This auxiliary function is called by the 'insertStoreIntoHTML' function.
function createClickableContainer(storeID, elementImage, elementCardBody) {
  var elementClickable = document.createElement("a");
  elementClickable.href = "javascript:void(0);";
  elementClickable.id = storeID;
  elementClickable.onclick = function() {
    getStoreDetails("http://challenge.getmore.com.br/stores/", this.id);
  };
  elementClickable.appendChild(elementImage);
  elementClickable.appendChild(elementCardBody);
  return elementClickable;
}

//Create a bootstrap card element
//This auxiliary function is called by the 'insertStoreIntoHTML' function.
function createCard(elementClickable) {
  var elementCard = document.createElement("div");
  elementCard.className = "card box-shadow";
  elementCard.appendChild(elementClickable);
  return elementCard;
}

//Create column (width 25%)
//This auxiliary function is called by the 'insertStoreIntoHTML' function.
function createColumn(elementCard) {
  var elementColumn = document.createElement("div");
  elementColumn.className = "col-md-3 px-4 py-2";
  elementColumn.appendChild(elementCard);
  return elementColumn;
}

// Create all the elements to make a bootstrap card, with the store information,
// then insert the card into the HTML
// This function is called by the 'getStoresList' function.
function insertStoreIntoHTML(store, storeIndex) {
  var elementName = createCardTitle(store.name);
  var elementTakeback = createCardText(store.takeback);
  var elementCardBody = createCardBody(elementName, elementTakeback);
  var elementImage = createCardImage(store.image_blob);
  var elementClickable = createClickableContainer(store.id, elementImage, elementCardBody);
  var elementCard = createCard(elementClickable);
  var elementColumn = createColumn(elementCard);
  document.getElementById("stores_container").appendChild(elementColumn);
}

// Get the storesList length (amount), then set the "amount_id" element value.
// This function is called by the 'getStoresList' function.
function setStoreAmountElement(amount) {
  var elementAmount = document.getElementById("amount_id");
  elementAmount.innerHTML = amount + " lojas encontradas";
}

// Remove all child nodes from the "stores_container" element.
// This function is called by the 'getStoresList' function.
function clearAllStoreCards() {
  var elementStoresContainer = document.getElementById("stores_container");
  while(elementStoresContainer.lastChild) {
    elementStoresContainer.removeChild(elementStoresContainer.lastChild);
  }
}
