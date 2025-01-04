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
    <button data-id = "${product.id}" class="remove-from-cart">Remove</button>
    <button data-id = "${product.id}" class="add-to-cart">Add to cart</button>
    `;
    productList.appendChild(productDiv);

  });


  productList.addEventListener("click", (e) => {
    // console.log("clicked");
    if(e.target.classList.contains("add-to-cart")){
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
      }


    if(e.target.classList.contains("remove-from-cart")){
      const productId = parseInt(e.target.getAttribute("data-id"));
      removeCart(productId);
    }


  });

  function addToCart(product){
    cart.push(product);
    renderCart();

  }

  function removeCart(productId){
    const index = cart.findIndex((p) => p.id === productId);
    // console.log(cart);
    if(index !==  -1){
      cart.splice(index,1);
      // console.log(cart);
      renderCart();
    }

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
        totalPriceDisplay.textContent = `0.00`;
      }
    }
    checkOutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert("Checkout successfully");
    renderCart();

  });


});


//Exercise 1 Create a remove button to remove the element by clicking it, and it also reduces the totalCost

// exercise 2 With the help of api and localstorage create a functionality so that cart cant get empty after refreshing




// Remove Button
// const removeDiv = document.createElement("div");
// removeDiv.classList.add("remove");
// productDiv.innerHTML = `
// <span>${product.name} - $${product.price.toFixed(2)}</span>
// <button data-id = "${product.id}">Remove</button>
// `;
// productList.appendChild(removeDiv);


// This method of adding extra remove class does not work because
// Key Issues:
//     Overwriting innerHTML:
//
//     After setting the innerHTML for productDiv with both buttons, you are overwriting it again with only the "Remove" button content when you set the innerHTML for removeDiv.
//                                                                                                                                                                         This clears the original content (both buttons) and replaces it with just the "Remove" button.
//     Unnecessary removeDiv:
//
//     Creating a separate removeDiv is unnecessary because the "Remove" button is already added to productDiv in the first step.
//     Appending the Same Product Twice:
//
//     You are appending productDiv to productList, and then you append removeDiv, which is redundant.





