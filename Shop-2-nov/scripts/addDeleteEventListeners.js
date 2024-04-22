import { cartPazaruvai } from "../data/cart-pazaruvai.js";

export function addDeleteEventListeners() {
    document.querySelectorAll('.delete-quantity-link').forEach((element) => {
        element.addEventListener('click', () => {
            let id = element.getAttribute('data-product-id');
            console.log(id);


            cleancart = [];

            cartPazaruvai.forEach((item) = );

        });


    });
}
