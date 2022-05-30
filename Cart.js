const cart = [
  {
    id: 0,
    number: 1083736351,
    price: 300,
  },
  {
    id: 1,
    number: 1729723792,
    price: 100,
  },
  {
    id: 2,
    number: 9439043871,
    price: 450,
  },
  {
    id: 3,
    number: 1323723672,
    price: 250,
  },
  {
    id: 4,
    number: 6237236721,
    price: 400,
  },
];
let Remove = document.querySelector(".Remove");
Remove.addEventListener("click", function hello() {
  console.log("clicked");
});

const CartData = (cart) => {
  let data = document.querySelector(".cart-data");
  let amount = document.querySelector(".amount");
  let total = document.querySelector(".total");
  let newCart = cart.map((items, index) => {
    const { number, price } = items;
    return `
   <div class="d-flex justify-content-between flex-row">
                  <div class="cart-details">
                    <div class="port-image">
                      <img src="./Assests/Ready2Port.png" />
                    </div>
                    <div
                      class="d-flex justify-content-start flex-column"
                      style="margin-left: 50px"
                    >
                      <h2 class="Cart-Number">${number}</h2>
                      <div class="d-flex align-items-center flex-row mt-2">
                        <button  class="Remove btn btn-primary">
                          <i class="fa-solid fa-xmark"></i> Remove
                        </button>
                        <h2 class="number-type">
                          <i class="fa-solid fa-mobile-screen"></i> Prepaid
                        </h2>
                      </div>
                    </div>
                  </div>
                  <h2 class="number-price">${price}</h2>
                </div>
                <hr style="color: #e6e6e6" />
  `;
  });
  newCart = newCart.join("");
  data.innerHTML = newCart;
  /* function to get total price */
  const sum = cart.reduce((accumulator, Object) => {
    return accumulator + Object.price;
  }, 0);
  amount.innerHTML = `₹ ${sum}`;
  total.innerHTML = sum;
};

CartData(cart);
