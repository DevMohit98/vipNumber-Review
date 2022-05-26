const checkoutSm = [
  {
    image: "./Assests/Ready2Port.png",
    number: "8819227271",
    price: 700,
  },
  {
    image: "./Assests/Ready2Port.png",
    number: "8192256371",
    price: 700,
  },
  {
    image: "./Assests/Ready2Port.png",
    number: "8819226431",
    price: 124,
  },
  {
    image: "./Assests/Ready2Port.png",
    number: "0001256242",
    price: 300,
  },
  {
    image: "./Assests/Ready2Port.png",
    number: "0001256242",
    price: 100,
  },
];
let dataSm = document.querySelector(".data-sm");
const AmountSm = document.querySelector(".amount-sm");
const totalSm = document.querySelector(".total-sm");
let newdataSm = checkoutSm.map((items) => {
  const { image, number, price } = items;

  return ` 
   <img
                  src="${image}"
                  alt="ready2port"
                  width="60"
                  height="30"
                />
  <div class="d-flex justify-content-between selectedNumber">
                    <h2 class="checkOut-Number">${number}</h2>
                    <h2 class="number-price">${price}</h2>
                  </div>
                    <hr style="color: e6e6e6" />
  `;
});
newdataSm = newdataSm.join("");
dataSm.innerHTML = newdataSm;
/* function to get total price */
const sumSm = checkoutSm.reduce((accumulator, object) => {
  return accumulator + object.price;
}, 0);
AmountSm.innerHTML = `₹ ${sumSm}`;
totalSm.innerHTML = sumSm;
