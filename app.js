// Function to add a product to the cart
let cartItems = [];
function addToCart(name, price) {
    // Retrieve existing cart items from local storage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    // Create a new item object
    const item = { name, price };
  
    // Add the item to the cart
    cartItems.push(item);
  
    // Store the updated cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
  
  // Function to render the cart items in the UI
  function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
  
    // Clear previous cart items
    cartItemsContainer.innerHTML = '';
  
    // Retrieve cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    // Iterate over the cart items and create rows for each item
    cartItems.forEach((item) => {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      nameCell.textContent = item.name;
      const priceCell = document.createElement('td');
      priceCell.textContent = item.price;
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      cartItemsContainer.appendChild(row);
    });
  }
  function clearCart() {
  // Clear the cart items in local storage
  localStorage.removeItem('cartItems');

  // Re-render the cart items in the UI
  renderCartItems();
}
  
  // Render the cart items when the cart page is loaded
  window.addEventListener('DOMContentLoaded', renderCartItems);
  