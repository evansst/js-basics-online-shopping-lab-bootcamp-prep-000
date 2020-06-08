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
  if (cart.length === 0) {                                                        //check if the cart is empty
    return `Your shopping cart is empty.`;                                        //return string if the cart is empty
  } else {                                  
    var i = 0;                                                                   // If cart is NOT empty, declare iteration var and output
    var output = `In your cart, you have `;
    if (cart.length === 1){                                                      //If 1 item in cart, add item and price to output and return  
      output = output + `${cart[i].itemName} at $${cart[i].itemPrice}.`;
    } else {
    while (i+1 < cart.length) {                                                   //if 2 or emore, add items until last item
      output = output + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      i += 1;
    }
    output = output + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;        //add last item to output string
  }
  return output;                                                                  //return output string
}
}

function total() {
  var output = 0;                                                         //declare output
  if (cart.length === 0) {                                                //check for empty cart, and return 0 if true
    return output;
  } else {                                                                //add itemPrice to running total for all objects in array
    var i = 0
    while (i < cart.length) {
      output = output + cart[i].itemPrice;
      i += 1;
    }
    return output;                                                        //return total
  }
}

function removeFromCart(item) {
  var i = 0;
  while (i+1 < cart.length) {
    if (cart[i].itenName === item) {
      cart.splice(i,1);
      return cart;
    } else {
      i += 1;
    }
    return `That item is not in your cart.`;
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
