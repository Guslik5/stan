const addToCartButton = document.getElementById('save-button')
const productElem = document.querySelectorAll('.product-cart_block-text')
const selectElem = document.getElementById('count-select');
const countProduct = document.getElementById('count-select');


const productName = productElem[0].childNodes[1].innerText


addToCartButton.addEventListener("click", () =>{
    const selectedValue = selectElem.value;
    const quantityProduct = "1"

    if (selectedValue === "" || selectedValue === "Сколько") {
        alert("Пожалуйста, выберите количество товара.");
        return;
    }

    const productStorage = localStorage.getItem("cart") || "[]"
    const product = JSON.parse(productStorage)


    const productObj = {productName, selectedValue, quantityProduct}
    product.push(productObj);
    localStorage.setItem("cart", JSON.stringify(product));
    console.log(selectedValue)
    console.log(selectElem)
    alert("Товар добавлен в корзину")
    // localStorage.clear()
})









