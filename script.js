function openProductModal(name, description, price, imgSrc) {
    document.getElementById('modal-product-name').textContent = name;
    document.getElementById('modal-product-description').textContent = description;
    document.getElementById('modal-product-price').textContent = price;
    document.getElementById('modal-product-img').src = imgSrc;
}



