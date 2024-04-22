import { cartShop } from "../data/cart-shop.js";
import { productsARREY, NewProduct } from "../data/productsAR.js";
import { head } from "./header-price.js";

head();

function generateHTML() {
    let html = '';

    cartShop.forEach((i) => {

        html += `<a href="product.html?productID=${i.id}" style="text-decoration: none; color:black;" class="product-link">
            <div class="product-1" data-product-id=${i.id} >
                <div class="image-div-product">
                    <img src="${i.image}" class="image-product" alt="">
                </div>
                <div class="text-div-product">
                    <div class="stars" ><span style="font-size: 30px;">&#9734;&#9734;&#9734;&#9734;&#9734;</span> </div>
                    <div class="product-name"><h2 class="product-name2" >${i.name}</h2></div>
                    <div class="product-firm"><span class="product-firm2">${i.type}</span></div>
                    <div class="product-price"><span class="product-price2" style="font-weight:bold; font-size:18px">$${(i.price / 100).toFixed(2)}</span></div>
                </div>
            </div>
        </a>`;
    });

    document.querySelector(`.grid`).innerHTML = html;
}

generateHTML();






let buttonforproduct = document.querySelectorAll(`.product-1`);

buttonforproduct.forEach((button) => {

    button.addEventListener(`click`, () => {
        let productID = button.dataset.productId;

        NewProduct(productID, cartShop, productsARREY);


    });

});


function Colorofbutton() {
    let btn = document.querySelector(`.dropdown-toggle`);

    btn.addEventListener(`click`, () => {
        btn.style.backgroundColor = "rgb(92, 151, 53)";
    });
}


Colorofbutton();

