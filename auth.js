
const AUTH_KEY = 'electro_users';
const CURRENT_USER_KEY = 'electro_current_user';

// Utility to get users
function getUsers() {
    const users = localStorage.getItem(AUTH_KEY);
    return users ? JSON.parse(users) : [];
}

// Utility to save users
function saveUser(user) {
    const users = getUsers();
    users.push(user);
    localStorage.setItem(AUTH_KEY, JSON.stringify(users));
}

// Sign Up
function signUp(name, email, password) {
    const users = getUsers();
    if (users.find(u => u.email === email)) {
        alert('Email already registered!');
        return false;
    }

    saveUser({ name, email, password });
    alert('Sign Up Successful! Please Login.');
    window.location.href = 'login.html';
    return true;
}

// Login
function login(usernameOrEmail, password) {
    const users = getUsers();
    // Allow login by email or name (assuming username field in login might be used for either)
    const user = users.find(u => (u.email === usernameOrEmail || u.name === usernameOrEmail) && u.password === password);

    if (user) {
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
        alert('Login Successful!');
        window.location.href = 'ex.html';
        return true;
    } else {
        alert('Invalid credentials!');
        return false;
    }
}

// Logout
function logout() {
    localStorage.removeItem(CURRENT_USER_KEY);
    window.location.href = 'ex.html';
}

// Get Current User
function getCurrentUser() {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
}

// Delete Account
function deleteAccount() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
        let users = getUsers();
        // Filter out the current user based on email (assuming email is unique)
        users = users.filter(u => u.email !== currentUser.email);
        localStorage.setItem(AUTH_KEY, JSON.stringify(users));

        // Remove current session
        localStorage.removeItem(CURRENT_USER_KEY);

        alert("Your account has been deleted.");
        window.location.href = 'ex.html';
    }
}

// Update UI based on Auth State
function updateAuthUI() {
    const user = getCurrentUser();
    const nav = document.querySelector('nav');
    if (!nav) return;

    if (user) {
        // Find Login and Signup links and replace them or append Profile
        const loginLink = Array.from(nav.querySelectorAll('a')).find(a => a.getAttribute('href') === 'login.html');
        const signLink = Array.from(nav.querySelectorAll('a')).find(a => a.getAttribute('href') === 'sign.html');

        if (loginLink) loginLink.remove();
        if (signLink) signLink.remove();

        // Remove trailing slash text node if it exists (the "/" between login and signup)
        nav.childNodes.forEach(node => {
            if (node.nodeType === 3 && node.textContent.trim() === '/') {
                // only remove slash if it's strictly between login/signup, though simpler is just to re-render nav
                node.remove();
            }
        });

        // Add Profile
        const profileLink = document.createElement('a');
        profileLink.href = 'profile.html';
        profileLink.textContent = 'Profile';
        // profileLink.style.color = '#00ccff'; // Removed blue color as requested

        nav.appendChild(profileLink);
        // Logout link removed from navbar as requested (moved to profile page only)
    }
}

// Run UI update on load
document.addEventListener('DOMContentLoaded', updateAuthUI);
