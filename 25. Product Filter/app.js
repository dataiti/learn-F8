
fetch('https://fakestoreapi.com/products')
    .then((responsive) => {
        return responsive.json()
    })
    .then((listProduct) => {
        const products = document.querySelector('.products')
        listProduct.forEach((product) => {
            var newProduct = document.createElement('div')
            newProduct.className = 'product'
            newProduct.innerHTML = `
                <img src="${product.image}" alt="" class="product-img">
                <div class="product-info">
                    <div class="product-name">${product.title.slice(0, 25)}...</div>
                    <div class="product-price">$${product.price}</div>
                </div>
            `
            products.appendChild(newProduct)
        })
    })

const input = document.querySelector('.search-input')

input.addEventListener('input', (e) => {
    let listProductDOM = document.querySelectorAll('.product')
    let inputValue = e.target.value.trim().toLowerCase()
    listProductDOM.forEach((item) => {
        if(item.innerText.toLowerCase().includes(inputValue)) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
})