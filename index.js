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

function viewCart (){
if(cart.length === 0){
  console.log(`Your shopping cart is empty.`)
}
else{
      var myString = "In your cart, you have "
         for(var i = 0, l = cart.length; i < l; i++){
            for(var list in cart[i]){
            myString+=`${list} at $${cart[i][list]}`
                if(i!==cart.length-1){
                  myString+=", "
                }
                else{
                  myString+="."
                }
              }
             }
       console.log(myString)}
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