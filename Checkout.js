const checkout = [
  {
    number: 8819227271,
    price: 700,
  },
  {
    number: 8819227271,
    price: 700,
  },
  {
    number: 8819227271,
    price: 700,
  },
  {
    number: 8819227271,
    price: 700,
  },
];
let data = document.querySelector(".data");
const Amount = document.querySelector(".amount");
const total = document.querySelector(".total");
let newData = checkout.map((items) => {
  const { number, price } = items;
  return `
  <div>
    <img
                  src="/Assests/Ready2Port.png"
                  alt="ready2port"
                  width="60"
                  height="30"
                />
  <div class="d-flex justify-content-between selectedNumber">
                    <h2 class="checkOut-Number">${number}</h2>
                    <h2 class="number-price">${price}</h2>
                  </div>    
                  </div>    
      `;
});
newData = newData.join("");
console.log(newData);
data.innerHTML = newData;
/* function to get total price */
const sum = checkout.reduce((accumulator, object) => {
  return accumulator + object.price;
}, 0);
Amount.innerHTML = `₹ ${sum}`;
total.innerHTML = sum;
