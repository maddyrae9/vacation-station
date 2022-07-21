// function to display shopping list as items are added
var loginButtonEl = document.getElementById("login-btn");
var homePageEl = document.getElementById("home-page");
var shoppingListArr = [];

var paymentPageEl = document.getElementById("checkout-page");

// hide home page when button is clicked
// create new list items
function shoppingList(event) {
  event.preventDefault();
  homePageEl.classList.add("hide");
  var listItemEl = document.createElement("li");
  listItemEl.className("cartItem");
}
loginButtonEl.addEventListener("click", shoppingList);

// subtotal + tax + delivery fee = total

// checkout page:
// name on card (first and last in seperate boxes)
// card number
// cvv and expiration in separate boxes
// billing (zip code only?)

function checkoutForm() {
  paymentPageEl.classList.remove("hide");
}
paymentPageEl.addEventListener("click", checkoutForm);
