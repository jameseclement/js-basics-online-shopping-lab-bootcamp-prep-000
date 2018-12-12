var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c
  return cart;
}

function addToCart(item) {
 // write your code here
  var price = Math.floor(Math.random() * 100) +1
 cart.push({ itemName : item , itemPrice: price});
 
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return "Your shopping cart is empty."
  } else if (cart.length ===1) {
   var contents = "In your cart, you have " + `${cart[0].itemName} at $${cart[0].itemPrice}.`
    } else if (cart.length === 2){
     contents = "In your cart, you have "
      contents = contents + `${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    }
      else {
         contents = "In your cart, you have "
         contents = contents + `${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
      }
 
   return contents
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
