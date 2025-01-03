document.addEventListener('DOMContentLoaded', () => {
  const products = [
    {id: 1, name: "Product 1", price: 29.9999},
    {id: 2, name: "Product 2", price: 39.99},
    {id: 3, name: "Product 3", price: 49.99},
  ]

  const cart = [];


  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCart = document.getElementById("empty-cart");
  const cartTotal = document.getElementById("cart-total");
  const totalPriceDisplay  = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");



  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)}</span>
    <button data-id = "${product.id}">Add to cart</button>
    `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    // console.log("clicked");
    if(e.target.tagName === "BUTTON"){
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }


  });

  function addToCart(product){
    cart.push(product);
    // console.log(cart);
    renderCart();

  }

  function renderCart(){
    cartItems.innerText = "";

    let totalPrice = 0;

    if(cart.length){

      emptyCart.classList.add("hidden");
      cartTotal.classList.remove("hidden");

      cart.forEach((items, index) => {
        totalPrice += items.price;

        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
          ${items.name} - $${items.price.toFixed(2)}
          `;
        cartItems.appendChild(cartItem);


      });
      totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
    }
    else{
        emptyCart.classList.remove("hidden");
        totalPriceDisplay.textContent = `$0.00`;
      }
    }
    checkOutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert("Checkout successfully");
    renderCart();

  });


});