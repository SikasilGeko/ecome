import { cartPazaruvai } from "../data/cart-pazaruvai.js";
import { cartShop } from "../data/cart-shop.js";
import { deliveryOption } from '../data/deliveryOption.js'
import { datazacena, addtoStorage } from "../data/datazacena.js";
import { Izcisli } from "./payment.js";
import { head } from "./header-price.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";



let todaye = dayjs();
let datazadost = todaye.add(7, 'days')
let format = datazadost.format('D.MM.YYYY')


var today = new Date();
console.log(today.toLocaleDateString("en-us"));

var options = {
  weekday: `long`,

  month: `long`,
  day: `numeric`
}


console.log(today.toLocaleDateString("bg", options));

let empty;
function renderHTML1() {
  let html = ``;



  cartPazaruvai.forEach(pazaruvai => {
    empty = cartShop.find(a => a.id === pazaruvai.CARTID);

    if (empty) {
      let Now = today.toLocaleDateString("bg", options);
      html += `
      <div class="cart-item-container">
        <div class="delivery-date">Днешна дата: ${Now}</div>
        <div class="cart-item-details-grid">
          <img class="product-image" src="${empty.image}" />
          <div class="cart-item-details">
            <div class="product-name" style="font-family: Roboto, sans-serif">${empty.name}</div>
            <div class="product-price" style="font-family: Roboto, sans-serif">$${(empty.price / 100).toFixed(2)}</div>
            <div class="product-quantity">
              <span style="font-family: Roboto, sans-serif">Дата на пристигане:</span>
              <br>
              <span class="delete-quantity-link link-primary" style="font-family: Roboto, sans-serif">${format}</span>
            </div>
          </div>
          <div class="delivery-options">
            <div class="delivery-options-title" style="font-family: Roboto, sans-serif; font-weight:500">${empty.text}</div>
                
          </div>
        </div>
      </div>`;
      console.log(datazacena)
    } else {
      console.log(`Error finding product`);
    }
  });


  document.querySelector('.order-summary').innerHTML = html;





  function findValue() {
    document.querySelectorAll(".delivery-option-input-1").forEach(radio => {
      radio.addEventListener('click', (event) => {

        const nameParts = event.target.name.split('-');
        const productId = nameParts[nameParts.length - 1];


        const index = datazacena.findIndex(entry => entry.productId === productId);

        if (index !== -1) {

          datazacena[index].cena = event.target.value;
        } else {

          datazacena.push({
            productId: productId,
            cena: event.target.value
          });
        }


        console.log(datazacena);


        addtoStorage();
        renderHTML1();
        Izcisli()
      });
    });
  }

  findValue();




}


renderHTML1()
