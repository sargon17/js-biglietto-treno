let searchBtn = document.querySelector("#search-btn");
let ticket = document.querySelector("#ticket");
let ticketDistance = document.querySelector("#ticket-distance");
let ticketPrice = document.querySelector("#ticket-price");

let kmPrice = 0.21;
let price;
let discountedPrice;

function validationInput(userAge, userDistance) {
  //Data valaidation Function
  if (userAge > 0 && userDistance >= 0) {
    calculatePrice(userAge, userDistance); // if data are valid it passed them to calc Price function
  } else {
    console.log("age ore distance ar not valid", userAge, userDistance);
  }
}

function calculatePrice(age, distance) {
  // Calculate the price of the ticket
  price = 0;
  discountedPrice = 0;

  if (age < 18) {
    price = (distance * kmPrice).toFixed(2);
    discountedPrice = (price * 0.8).toFixed(2);
  } else if (age > 65) {
    price = (distance * kmPrice).toFixed(2);
    discountedPrice = (price * 0.6).toFixed(2);
  } else {
    price = (distance * kmPrice).toFixed(2);
  }
  displayTicket(price, discountedPrice, distance);
}

function displayTicket(price, discountedPrice, distance) {
  if (discountedPrice) {
    ticketPrice.classList.add("mt__cl-red");
    ticketPrice.innerHTML = `&euro; ${discountedPrice} <span class="mt__discounted">${price}</span>`;
  } else {
    ticketPrice.classList.remove("mt__cl-red");
    ticketPrice.innerHTML = `&euro; ${price}`;
  }
  ticketDistance.innerHTML = `${distance}km`;
  ticket.classList.remove("opacity-0");
}

searchBtn.addEventListener("click", () => {
  let userAge = document.querySelector("#age-input").value;
  let userDistance = document.querySelector("#distance-input").value;
  validationInput(userAge, userDistance);
});
