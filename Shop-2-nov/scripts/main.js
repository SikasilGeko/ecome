

import { head } from "./header-price.js";

head()



let cartMain = [
    {
        name: `Японско гнездо`,
        type: `Пречиства въздоха`,
        priceCents: 8496,
        image: `images/main-bestsellers/plant-image-1.jpg`
    },
    {
        name: `Хойа обоватум`,
        type: `Пречиства въздоха`,
        priceCents: 6425,
        image: `images/main-bestsellers/plant-image-2.jpg`
    },
    {
        name: `Монтсера дърво`,
        type: `Пречиства въздоха`,
        priceCents: 22490,
        image: `images/main-bestsellers/plant-image-3.jpg`
    },
    {
        name: `Замиокулкас`,
        type: `Пречиства въздоха`,
        priceCents: 12490,
        image: `images/main-bestsellers/plant-image-4.jpg`
    },
    {
        name: `Птица от рая`,
        type: `Пречиства въздоха`,
        priceCents: 24990,
        image: `images/main-bestsellers/plant-image-5 (1).jpg`
    },
    {
        name: `Калатея Кроката`,
        type: `Пречиства въздоха`,
        priceCents: 7990,
        image: `images/main-bestsellers/plant-image-6.jpg`
    }
]




function GenerateHTMLformain() {
    let HTML = ``;


    cartMain.forEach((i) => {
        HTML += `
        
        <div class="product-1 col-xxl-4 col-lg-6 col-md-12 mb-4" >
        <div class="image-div-product">
        <a href="/shop.html" style="text-decoration: none; color: black;"> <img style="width:100%" src="${i.image}" class="image-product" alt=""></a>
        </div>

        <div class="text-div-product">
        <a href="/shop.html" style="text-decoration: none; color: black;">
            <div class="stars" ><span style="font-size: 170%;">&#9734;&#9734;&#9734;&#9734;&#9734;</span> </div>
            <div class="product-name"><h2 class="product-name2">${i.name}</h2></div>
            <div class="product-firm"><span class="product-firm2">${i.type}</span></div>
            <div class="product-price"><span class="product-price2">$${(i.priceCents / 100).toFixed(2)}</span></div>
            </a>
        </div>
    </div>`
    })

    document.querySelector(`.sadar`).innerHTML = HTML;

}

function Colorofbutton() {
    let btn = document.querySelector(`.dropdown-toggle`);

    btn.addEventListener(`click`, () => {
        btn.style.backgroundColor = "rgb(92, 151, 53)";
    });
}



GenerateHTMLformain();