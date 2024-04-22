export let productsARREY;


try {
    const storedCart = localStorage.getItem('cart');
    productsARREY = storedCart ? JSON.parse(storedCart) : [];
} catch (e) {
    console.error('Error parsing cart from localStorage:', e);
    productsARREY = [];
}


if (productsARREY.length === 0) {
    productsARREY.push({ productId: '1', });
}

function SavetoStorage() {
    localStorage.setItem('cart', JSON.stringify(productsARREY));
}

export function NewProduct(productID, cartShop, productsARREY) {
    let matchingItem;


    const productExists = productsARREY.find(item => item.productId === productID);
    if (!productExists) {
        productsARREY.push({
            productId: productID,
        });
    }


    matchingItem = cartShop.find(a => a.id === productID);



    SavetoStorage();
}