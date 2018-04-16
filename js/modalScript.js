//Set the modal title (store name)
//This auxiliary function is called by the 'showStoreModal' function.
function setModalTitle(store_name) {
  document.getElementById("modal_title_id").innerHTML = store_name;
}

//Set the modal rating (store rating)
//This auxiliary function is called by the 'showStoreModal' function.
function setModalRating(store_rating) {
  document.getElementById("modal_rating_id").innerHTML = store_rating;
}

//Set the modal text (store takeback)
//This auxiliary function is called by the 'showStoreModal' function.
function setModalTakeback(store_takeback) {
  document.getElementById("modal_takeback_id").innerHTML = store_takeback;
}

//Set the modal image (store image)
//This auxiliary function is called by the 'showStoreModal' function.
function setModalImage(store_image) {
  document.getElementById("modal_image_id").src = store_image;
}

//Create a list element for each store category
//This auxiliary function is called by the 'showStoreModal' function.
function addCategoryListToModal(store_details) {
  var element_category_list = document.getElementById("modal_category_list_id");
  for(var i=0; i<store_details.category.length; i++) {
    var element_li = document.createElement("li");
    element_li.appendChild(document.createTextNode(store_details.category[i]));
    element_category_list.appendChild(element_li);
  }
}

//Set the modal button click action (store URL)
//This auxiliary function is called by the 'showStoreModal' function.
function setModalButtonAction(store_url) {
  $('#modal_button_id').click(function() {
    window.location = store_url;
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
function showStoreModal(store_details) {
  setModalTitle(store_details.name);
  setModalRating("Rating: " + store_details.rating)
  setModalTakeback(store_details.takeback.toFixed(2) + "% de Takeback");
  setModalImage(store_details.image_blob);
  addCategoryListToModal(store_details);
  setModalButtonAction(store_details.url);
  setModalCloseButtonAction();
  showModal();
}
