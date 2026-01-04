
const CART_KEY = 'electro_cart';

// Get Cart Items
function getCart() {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
}

// Save Cart
function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Add to Cart
function addToCart(product) {
    // Check if user is logged in
    if (!getCurrentUser()) {
        alert("Please login to add items to your cart!");
        window.location.href = 'login.html';
        return;
    }

    const cart = getCart();
    // Check if item already exists
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
        alert(`${product.name} quantity updated in cart!`);
    } else {
        product.quantity = 1;
        cart.push(product);
        alert(`${product.name} added to cart!`);
    }

    saveCart(cart);
    updateCartCount();
}

// Remove from Cart
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCart(); // Re-render if on cart page
    updateCartCount();
}

// Update Cart Count in UI (Optional badge)
function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    const cartLink = document.getElementById('cart-link');
    if (cartLink) {
        cartLink.textContent = `Cart (${count})`;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', updateCartCount);
