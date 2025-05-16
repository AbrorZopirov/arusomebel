const productsBlock = document.querySelector('.product-grid-header');
// product data 
const products = [
    { id: 1, name: 'NATIVE IRON CHAIR', price: 4.999, image: './img/products/product.png' },
    { id: 2, name: 'CENTURY DASHE', price: 1.799, image: './img/products/product1.png' },
    { id: 3, name: 'NATIVE LIGHT CHAIR', price: 4.999, image: './img/products/product2.png' },
    { id: 4, name: 'PAOLA WOOD LAMP', price: 5.999, image: './img/products/product3.png' },
    { id: 5, name: 'NATIVE IRON CHAIR', price: 4.999, image: './img/products/product4.png' },
    { id: 6, name: 'CENTURY DASHE', price: 1.799, image: './img/products/product5.png' },
    { id: 7, name: 'NATIVE LIGHT CHAIR', price: 4.999, image: './img/products/product6.png' },
    { id: 8, name: 'PAOLA WOOD LAMP', price: 5.999, image: './img/products/product7.png' },
    { id: 9, name: 'NATIVE IRON CHAIR', price: 4.999, image: './img/products/product.png' },
]

products.forEach(product => {
    const productBlock = document.createElement('div');
    productBlock.classList.add('product-grid-item');
    productBlock.innerHTML = `
        <div class="product">
            <img src="${product.image}" alt="${product.name}" />
            <div class="info">
                <span>${product.name}</span>
                <span>${product.price}$</span>
            </div>
        </div>
    `;
    productsBlock.appendChild(productBlock);
})