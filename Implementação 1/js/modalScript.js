//Set the modal title (store name)
//This auxiliary function is called by the 'showStoreModal' function.
function setModalTitle(storeName) {
  document.getElementById("modal_title_id").innerHTML = storeName;
}

//Set the modal rating (store rating)
//This auxiliary function is called by the 'showStoreModal' function.
function setModalRating(storeRating) {
  document.getElementById("modal_rating_id").innerHTML = storeRating;
}

//Set the modal text (store takeback)
//This auxiliary function is called by the 'showStoreModal' function.
function setModalTakeback(storeTakeback) {
  document.getElementById("modal_takeback_id").innerHTML = storeTakeback;
}

//Set the modal image (store image)
//This auxiliary function is called by the 'showStoreModal' function.
function setModalImage(storeImage) {
  document.getElementById("modal_image_id").src = storeImage;
}

//Create a list element for each store category
//This auxiliary function is called by the 'showStoreModal' function.
function addCategoryListToModal(storeDetails) {
  var elementCategoryList = document.getElementById("modal_category_list_id");
  while(elementCategoryList.lastChild) {
    elementCategoryList.removeChild(elementCategoryList.lastChild);
  }
  for(var i=0; i<storeDetails.category.length; i++) {
    var elementLi = document.createElement("li");
    elementLi.appendChild(document.createTextNode(storeDetails.category[i]));
    elementCategoryList.appendChild(elementLi);
  }
}

//Set the modal button click action (store URL)
//This auxiliary function is called by the 'showStoreModal' function.
function setModalButtonAction(storeURL) {
  $('#modal_button_id').click(function() {
    window.location = storeURL;
  });
}

//Set the modal close button click action (clear categories list)
//This auxiliary function is called by the 'showStoreModal' function.
function setModalCloseButtonAction() {
  $('#modal_close_id').click(function() {
    $('#modal_category_list_id').empty();
  });
}

//Make the moodal element visible
//This auxiliary function is called by the 'showStoreModal' function.
function showModal() {
  $('#store_modal').modal('show');
}

// Set the properties of the bootstrap modal, with the store information,
// then make it visible
function showStoreModal(storeDetails) {
  setModalTitle(storeDetails.name);
  setModalRating("Rating: " + storeDetails.rating)
  setModalTakeback(storeDetails.takeback.toFixed(2) + "% de Takeback");
  setModalImage(storeDetails.image_blob);
  addCategoryListToModal(storeDetails);
  setModalButtonAction(storeDetails.url);
  setModalCloseButtonAction();
  showModal();
}
