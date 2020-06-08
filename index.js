var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;                                                  
}

function addToCart(item) {
  var newItem = new Object ({itemName: item ,
                    itemPrice: Math.floor(Math.random()*100)});           //create the new item, with a ranom price between 1 and 100
  cart.push(newItem);                                                     //push the new item on to the array
  return `${newItem.itemName} has been added to your cart.`;              //return string output
}

function viewCart() {
  if (cart.length === 0) {                                                   //check if the cart is empty
    return `Your shopping cart is empty.`;                                   //return string if the cart is empty
  } else {                                
    var i = 0;                                                              // If cart is NOT empty, declare iteration var and output
    var output = `In your cart, you have `;
    if (cart.length === 1){
      output = output + `${cart[i].itemName} at $${cart[i].itemPrice}.`;
    } else {
    while (i+1 < cart.length) {
      output = output + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      i += 1;
    }
    output = output + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
  }
  return output;
}
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
