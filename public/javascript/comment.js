
// function to display shopping list as items are added
var loginButtonEl = document.getElementById("login-btn");
var homePageEl = document.getElementById("home-page");
var shoppingListArr = [];
// var cartEl = document.getElementById("checkout-page");

var paymentPageEl = document.getElementById("checkout-page");
paymentPageEl.classList.add("hide");
var createAccountButtonEl = document.getElementById("create-account-btn");

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

function checkoutForm(event) {
  event.preventDefault();
  homePageEl.classList.add("hide");
  paymentPageEl.classList.remove("hide");
}
createAccountButtonEl.addEventListener("click", checkoutForm);

// var isEdit = formEl.hasAttribute("data-task-id");

async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    //console.log(comment_text, post_id);
    if (comment_text) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            post_id,
            comment_text
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      } else {
          alert("Please enter a comment and then submit")
      }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);

