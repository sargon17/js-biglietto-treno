let userAge = prompt("How old are you?", 11);
let userDistance = prompt("How many km you need to travel?", 12);

let kmPrice = 0.21;
let price;

if (isNaN(userAge) && isNaN(userDistance)) {
  alert("Your input isn't valid");
} else {
  if (userAge < 18) {
    price = userDistance * kmPrice * 0.8;
  } else if (userAge >= 65) {
    price = userDistance * kmPrice * 0.6;
  } else {
    price = userDistance * kmPrice;
  }
}

alert(`The price of your ticket: ${price.toFixed(2)}€`);
