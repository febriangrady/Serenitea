// Get references to the search input and search button
var searchInput = document.getElementById("searchInput");
var searchButton = document.getElementById("searchButton");

// Add event listener to the search button
searchButton.addEventListener("click", function() {
  var searchTerm = searchInput.value;
  // Perform search operation based on the search term
  // For this example, let's just log the search term to the console
  console.log("Search term: " + searchTerm);
});
