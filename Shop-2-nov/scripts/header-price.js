import { cartPazaruvai } from "../data/cart-pazaruvai.js";
import { cartShop } from "../data/cart-shop.js";
import { productsARREY } from "../data/productsAR.js";
import { deliveryOption } from '../data/deliveryOption.js'
import { datazacena } from "../data/datazacena.js";


export function head() {
    let cenaNaproducti = 0;
    for (let i = 0; i < cartPazaruvai.length; i++) {
        let Pazaruvai = cartPazaruvai[i].CARTID;
        let empty = cartShop.find(a => a.id === Pazaruvai);


        if (empty) {
            cenaNaproducti += empty.price;
            document.getElementById("cena2.0").innerHTML = `$` + (cenaNaproducti / 100).toFixed(2);
            document.querySelector(`.cena-koli`).innerHTML = `$` + (cenaNaproducti / 100).toFixed(2);
        }
    }



}

head();

