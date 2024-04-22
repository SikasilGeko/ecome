import { cartShop } from "../data/cart-shop.js";
import { cartPazaruvai } from "../data/cart-pazaruvai.js";
import { local } from "../data/cart-pazaruvai.js";

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productID = urlParams.get('productID');
    if (productID) {
        displayProductDetails(productID);
    } else {
        console.error("No product ID provided.");

    }
});

function displayProductDetails(productID) {
    if (typeof cartShop === 'undefined') {
        console.error('cartShop is not defined');
        return;
    }

    const matchingItem = cartShop.find(item => item.id === productID);


    if (matchingItem) {
        const NewHTML = `
            <div class="container mt-5 mb-5" style="background-color: white;">
                <div class="row p-5">
                    <div class="col-xl-6 col-lg-12 pb-5 image-box">
                        <img class="izob-c" src="${matchingItem.image}">
                    </div>
                    <div class="col-xl-6 col-lg-12 text-box">
                        <div class="text-c">
                            <h1 style="font-size:26px; font-weight: 400; font-family: PT Serif, serif;">${matchingItem.name}</h1>
                            <p class="pari">$${(matchingItem.price / 100).toFixed(2)} <span>+Безплата доставка</span></p>
                            <p class="text">${matchingItem.text}</p>
                            <button class="mb-3 add-to-cart" data-product-id="${matchingItem.id}">Добави в количката</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const mainContentElement = document.querySelector('.main-content');
        if (mainContentElement) {
            mainContentElement.innerHTML = NewHTML;
        }
        attachAddToCartEvent();
    } else {
        console.error('Product details not found.');
    }
}

function attachAddToCartEvent() {
    const addToCartButton = document.querySelector('.add-to-cart');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            const productID = addToCartButton.dataset.productId;
            cartPazaruvai.push({
                CARTID: productID,
            });
            local();
            console.log(cartPazaruvai);
        });
    } else {
        console.error('No add-to-cart button found.');
    }
}