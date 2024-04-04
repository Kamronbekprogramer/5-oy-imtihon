const wrapper = document.querySelector(".wrapper");
const loader = document.querySelector(".loader");
const API_URL = "https://dummyjson.com/products";

var svg = document.getElementById('like');
var isClicked = false;




async function fetchData(API_URL) {
  try {
    console.log("Hello world");
    loader.style.display = "block"; 
    const getData = await fetch(API_URL);
    const responseData = await getData.json();
    createCard(responseData.products.slice(0, 8));
    console.log(responseData.products.slice(0, 8));
  } catch (error) {
    console.error(error);
  } finally {
    loader.style.display = "none"; 
  }
}


fetchData(API_URL).catch(data => data.json())

function createCard(data) {
  const fragment = document.createDocumentFragment();
  data.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div data-id=${product.id} class="__card">
        <div class="img">
          <img name="product-img" src="${product.thumbnail}" alt="" />
          <div class="like__img">
            <img src="./images/img/Fill Heart.png" alt="" />
          </div>
          <div class="eas-img">
            <img src="./images/img/Fill Eye.png" alt="" />
          </div>
        </div>
        <h3>${product.title}</h3>
        <div class="sum">
          <p class="price">$${product.price}</p>
          <img src="./images/img/Four Star.png" alt="" />
          <h4>(${product.stock})</h4>
        </div>
      </div>`;
    fragment.appendChild(card);
  });
  wrapper.appendChild(fragment);
}

const singleRoate = (id) => {
  window.open(`/pages/product.html?id=${id}`, "_self")
}

wrapper.addEventListener("click", (e) => {
  if (e.target.name == "product-img") {
    let id = e.target.closest("[data-id]").dataset.id
    singleRoate(id)
  }
})

const btnBars = document.querySelector(".nav__bars");
const menuNav = document.querySelector(".menu__navbar");

btnBars.addEventListener("click", () => {
  menuNav.classList.toggle("show");
});
