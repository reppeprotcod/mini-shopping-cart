const products = [
    {
        id: 1,
        name: 'Bread',
        price: 1.38
    },
    {
        id: 2,
        name: 'Milk',
        price: 2.99
    },
    {
        id: 3,
        name: 'Fish',
        price: 10.12
    },
];

let basket = [];

function addToCart(id) {
    const product = products.find(el => el.id === id);
    
    if(basket.includes(product)) {
        alert('You have already bought this product!');
    }
    else{
        basket.push(product);
    }

    refresh();
}

function refresh() {
    const cart = document.getElementsByClassName("product")[0];
   let totalPrice = 0;
    let price = document.getElementById("totalPrice");

    cart.innerHTML = '';
    for(let el of basket) {
        let p = document.createElement('p');
        p.innerHTML = el.name + "<br>";
        p.setAttribute("onclick", `myDelete("${el.name}")`)
        cart.append(p);
        totalPrice += el.price;
    }
    price.innerHTML = totalPrice.toFixed(2);
}

function myDelete(name) {
    const product = products.find(el => el.name === name);
    basket.splice(basket.indexOf(product), 1);

    refresh();
}