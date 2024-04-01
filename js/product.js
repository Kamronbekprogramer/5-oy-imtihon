var svg = document.getElementById('like');
var isClicked = false;

svg.addEventListener('click', function() {
  if (!isClicked) {
    this.querySelector('path').setAttribute('fill', 'red');
    isClicked = true;
  } else {
    this.querySelector('path').setAttribute('fill',  'transparent');
    isClicked = false;
  }
});


const API_URL = "https://dummyjson.com/products"
const productSingle = document.querySelector(".view__card")
console.log(productSingle);

async function fetchData(api) {   
    let path = new URLSearchParams(window.location.search)
    let id = path.get("id")

    let getData = await fetch(`${api}/${id}`)
    getData
        .json()
        .then(res => createSingle(res))


}

fetchData(API_URL)


function createSingle(product) {
    productSingle.innerHTML = `
    <div class="view__card">
          <div class="card__img">
            <div class="min__img">
              <div class="min_img_">
                <img src="${product.images[0]}" alt="" />
              </div>
              <div class="min_img_">
                <img src="${product.images[1]}" alt="" />
              </div>
              <div class="min_img_">
                <img src="${product.images[2]}" alt="" />
              </div>
              <div class="min_img_">
                <img src="${product.images[3]}" alt="" />
              </div>
            </div>
            <div class="main_img">
              <img src="${product.thumbnail}" alt="" />
            </div>
          </div>
          <div class="card__text">
            <h1>${product.title}</h1>
            <div class="reyting">
              <img src="../images/img/Four Star.png" alt="" />
              <p>(${product.stock} Reviews)</p>
              <p>|</p>
              <h5>In Stock</h5>
            </div>
            <div class="sum">
              <h2>$${product.price}</h2>
            </div>
            <div class="__text">
              <p>${product.description}.</p>
            </div>
            <div class="line"></div>
            <div class="colours">
              <h3>Colours:</h3>
              <div class="color_1"></div>
              <div class="color_2"></div>
            </div>
            <div class="size">
              <h3>Size:</h3>
              <button><p>XS</p></button>
              <button><p>S</p></button>
              <button><p>M</p></button>
              <button><p>L</p></button>
              <button><p>XL</p></button>
            </div>
            <div class="buy__now">
              <div class="count">
                <button class="minus"><p>-</p></button>
                <button class="number"><p>0</p></button>
                <button class="plus"><p>+</p></button>
              </div>
              <button class="buy__btn">
                <h3>Buy Now</h3>
              </button>
              <img src="../images/img/Frame 904.png" alt="">
              
            </div>
            <div class="help">
              <div class="delivery">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <g clip-path="url(#clip0_261_4843)">
                    <path d="M11.6666 31.6667C13.5075 31.6667 14.9999 30.1743 14.9999 28.3333C14.9999 26.4924 13.5075 25 11.6666 25C9.82564 25 8.33325 26.4924 8.33325 28.3333C8.33325 30.1743 9.82564 31.6667 11.6666 31.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.33325 28.3335H6.99992C5.89535 28.3335 4.99992 27.4381 4.99992 26.3335V21.6668M3.33325 8.3335H19.6666C20.7712 8.3335 21.6666 9.22893 21.6666 10.3335V28.3335M14.9999 28.3335H24.9999M31.6666 28.3335H32.9999C34.1045 28.3335 34.9999 27.4381 34.9999 26.3335V18.3335M34.9999 18.3335H21.6666M34.9999 18.3335L30.5825 10.9712C30.2211 10.3688 29.5701 10.0002 28.8675 10.0002H21.6666" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5 11.8182H11.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.81812 15.4545H8.48478" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5 19.0909H11.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_261_4843">
                      <rect width="40" height="40" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <h3>Free Delivery</h3>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div class="return">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <g clip-path="url(#clip0_261_4865)">
                    <path d="M33.3334 18.3334C32.9258 15.4004 31.5652 12.6828 29.4611 10.5992C27.3571 8.51557 24.6263 7.18155 21.6895 6.80261C18.7527 6.42366 15.7728 7.02082 13.2088 8.5021C10.6447 9.98337 8.63883 12.2666 7.50008 15M6.66675 8.33335V15H13.3334" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.66675 21.6667C7.07435 24.5997 8.43497 27.3173 10.539 29.4009C12.6431 31.4845 15.3738 32.8185 18.3106 33.1974C21.2474 33.5764 24.2274 32.9792 26.7914 31.4979C29.3554 30.0167 31.3613 27.7335 32.5001 25M33.3334 31.6667V25H26.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_261_4865">
                      <rect width="40" height="40" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <h3>Return Delivery</h3>
                  <p>Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>`
}