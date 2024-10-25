const productBasket = document.querySelector('.products')

const productStorage = JSON.parse(localStorage.getItem("cart") || "[]")

if (productStorage.length) {
    productStorage.forEach((el, index) => {
        const {productName, selectedValue, quantityProduct} = el
        console.log(el)
        const newCard = document.createElement("div")
        newCard.innerHTML = `
            <div class="basket-product-item">
                    <img src="/images/icons/productBasket.svg" alt="productImg">
                    <p class="product-name" style="color: #686868">${productName}</p>
                    <div class="counts">
                        <button class='minus-button tap' data-index="${index}">-</button>
                        <h4 class='quantity-display' data-index="${index}" style="color: #686868">${quantityProduct}</h4> 
                        <button class='plus-button tap' data-index="${index}">+</button> 
                    </div>
                    <h4 style="color: #686868">${selectedValue}</h4>
                    <br>
                    <button class='delete-button tap' data-index="${index}" style="color: #686868">✕</button> 
            </div>
        `
        productBasket.appendChild(newCard)

        const deleteButton = newCard.querySelector('.delete-button');
        function deleteProduct() {
            const indexToDelete = parseInt(deleteButton.dataset.index, 10);
            productStorage.splice(indexToDelete, 1);
            localStorage.setItem("cart", JSON.stringify(productStorage));
            newCard.remove();
        }
        deleteButton.addEventListener('click', deleteProduct);

        const minusButton = newCard.querySelector('.minus-button');
        minusButton.addEventListener('click', () => {
            const indexToUpdate = parseInt(minusButton.dataset.index, 10);
            const quantityDisplay = newCard.querySelector('.quantity-display');
            const currentQuantity = parseInt(quantityDisplay.textContent, 10);

            if (currentQuantity <= 1) {
                deleteProduct()
                return;
            }
            productStorage[indexToUpdate].quantityProduct = currentQuantity - 1;
            quantityDisplay.textContent = currentQuantity - 1;
            localStorage.setItem("cart", JSON.stringify(productStorage));
        });

        const plusButton = newCard.querySelector('.plus-button');
        plusButton.addEventListener('click', () => {
            const indexToUpdate = parseInt(plusButton.dataset.index, 10);
            const quantityDisplay = newCard.querySelector('.quantity-display');
            const currentQuantity = parseInt(quantityDisplay.textContent, 10);

            productStorage[indexToUpdate].quantityProduct = currentQuantity + 1;
            quantityDisplay.textContent = currentQuantity + 1;
            localStorage.setItem("cart", JSON.stringify(productStorage));
        });
    })
}