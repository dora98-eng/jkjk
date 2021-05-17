const cart = document.querySelector(".cart-container");
const productsCart = document.querySelector(".products-cart");

const buttonsAddToCart = document.querySelectorAll(".addToCart");

let productsInCart = [];
const message = "No products in cart";

const productsList = [
  { name: "Čvarci domaći",alt:"cvarci domaci", price: "50,00", qty: 0, image:"images/slika1.png" },
  { name: "Čvarci slavonski",alt:"cvarci slavonski", price: "80,00", qty: 0, image:"images/slika2.png" },
  { name: "Čvarci pileći",alt:"cvarci pileci", price: "60,00" , qty: 0, image:"images/slika3.png" },
  { name: "Čvarci od divljači",alt:"cvarci od divljaci", price: "100,00", qty: 0, image:"images/slika4.png" },
];

cart.addEventListener("click", function () {
  productsCart.classList.toggle("products-cart-visible");
});

renderProducts(-1);


for (let i = 0; i < buttonsAddToCart.length; i++) {
  buttonsAddToCart[i].addEventListener("click", function () {
    const index = buttonsAddToCart[i].parentElement.dataset.id;

    renderProducts(index)

    //console.log(buttonsAddToCart[i].previousElementSibling.value);
  });
}

function renderProducts(index) {

  if(index >= 0) {
    productsInCart.push(productsList[index])
  }

  if (!productsInCart.length) {
    productsCart.innerHTML = message;
  } else {
    
    let markup = ``;

    productsInCart.forEach(el => {
      markup += 
        `<img src="${el.image}" width="50" height="50" alt="${el.alt}" />
          <h3>${el.name}</h3>
          <p class="price">${el.price} kn/kg</p>
        `
    })
    productsCart.innerHTML = markup;
  }
}