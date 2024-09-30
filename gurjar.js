// Get the modals
var modalRecipeBook = document.getElementById("modalRecipeBook");
var modalMovieSearch = document.getElementById("modalMovieSearch");

// Get the buttons that open the modals
var btnRecipeBook = document.querySelector(".project-card:nth-child(1) .btn");
var btnMovieSearch = document.querySelector(".project-card:nth-child(2) .btn");

// Get the <span> elements that close the modals
var spanRecipeBook = document.querySelector("#modalRecipeBook .close");
var spanMovieSearch = document.querySelector("#modalMovieSearch .close");

// When the user clicks the button, open the modal 
btnRecipeBook.onclick = function() {
  modalRecipeBook.style.display = "block";
}

btnMovieSearch.onclick = function() {
  modalMovieSearch.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanRecipeBook.onclick = function() {
  modalRecipeBook.style.display = "none";
}

spanMovieSearch.onclick = function() {
  modalMovieSearch.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalRecipeBook) {
    modalRecipeBook.style.display = "none";
  }
  if (event.target == modalMovieSearch) {
    modalMovieSearch.style.display = "none";
  }
}
