import { cartPazaruvai } from "../data/cart-pazaruvai.js";
import { cartShop } from "../data/cart-shop.js";
import { productsARREY } from "../data/productsAR.js";
import { deliveryOption } from '../data/deliveryOption.js'
import { datazacena } from "../data/datazacena.js";



export function Izcisli() {



  let cenaNaproducti = 0;
  for (let i = 0; i < cartPazaruvai.length; i++) {
    let Pazaruvai = cartPazaruvai[i].CARTID;
    let empty = cartShop.find(a => a.id === Pazaruvai);


    if (empty) {
      cenaNaproducti += empty.price;
      document.querySelector(`.cena-koli`).innerHTML = `$` + (cenaNaproducti / 100).toFixed(2);
    }
  }


  console.log(cenaNaproducti);



  let cenazaship = 0;

  for (let i = 0; i < datazacena.length; i++) {

    cenazaship += parseFloat(datazacena[i].cena);
  }


  console.log(cenazaship);


  let allbeforetax = 0


  allbeforetax += cenaNaproducti + cenazaship;


  console.log(allbeforetax);


  let tax = 0;


  tax += allbeforetax * 1 / 10;

  console.log(tax);



  let final = tax + allbeforetax;


  let paymentSummary = `
    <div
            class="payment-summary-title"
            style="font-family: Roboto, sans-serif"
          >
            Сметка
          </div>

          <div class="payment-summary-row">
            <div style="font-family: Roboto, sans-serif">Продукти (3):</div>
            <div
              class="payment-summary-money"
              style="font-family: Roboto, sans-serif"
            >
              $${(cenaNaproducti / 100).toFixed(2)}
            </div>
          </div>

          

          <div class="payment-summary-row subtotal-row">
            <div style="font-family: Roboto, sans-serif">
              Всичко преди такси
            </div>
            <div
              class="payment-summary-money"
              style="font-family: Roboto, sans-serif"
            >
              $${(allbeforetax / 100).toFixed(2)}
            </div>
          </div>

          <div
            class="payment-summary-row"
            style="font-family: Roboto, sans-serif"
          >
            <div style="font-family: Roboto, sans-serif">ДДС 10%</div>
            <div
              class="payment-summary-money"
              style="font-family: Roboto, sans-serif"
            >
              $${(tax / 100).toFixed(2)}
            </div>
          </div>

          <div class="payment-summary-row total-row">
            <div style="font-family: Roboto, sans-serif">Всичко:</div>
            <div
              class="payment-summary-money"
              style="font-family: Roboto, sans-serif"
            >
              $${(final / 100).toFixed(2)}
            </div>
          </div>

          <button
            class="place-order-button button-primary"
            style="font-family: Roboto, sans-serif"
          >
            Place your order
          </button>
        
    `


  document.querySelector(`.payment-summary`).innerHTML = paymentSummary;


  return cenaNaproducti
}




Izcisli();



