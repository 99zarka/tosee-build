function countCart(){
    var cart = JSON.parse(localStorage.getItem('cart'))
    if(cart === null) cart = {};
    var itemsCounter = 0;
    if (Object.keys(cart).length !== 0) {
        for(var i = 0; i < Object.values(cart).length; i++){
            itemsCounter += Object.values(cart)[i];
        }       
    }
    if(document.getElementById('cart-counter'))
        document.getElementById('cart-counter').textContent = itemsCounter;
    return itemsCounter;
}




document.addEventListener('DOMContentLoaded', function() {
    const navHtml = `
        <nav class="navbar">
            <div class="nav-brand">
                <a href="index.html">
                    <img src="./images/RaReads-logo-200.png" alt= "RaRead logo"></img>
                    RaReads
                </a>
                <button id="theme-toggle" style="background: none; border: none; color: white; font-size: 1.1em; cursor: pointer;">Toggle Theme</button>
                <span id="user-name-display" style="color: white; margin-left: 15px; display: none;"></span>
            </div>
            <ul class="nav-links" id="nav-links-list">
                <li><a href="products.html">Products</a></li>
                <li id="login-link"><a href="login.html">Login</a></li>
                <li id="register-link"><a href="register.html">Register</a></li>
                <li id="logout-link" style="display: none;"><a href="#" id="logout-button">Logout</a></li>
                <li><a href="checkout.html">🛒 Cart <span id="cart-counter">${countCart()}</span></a></li>
            </ul>
        </nav>
    `;


    document.body.insertAdjacentHTML('afterbegin', navHtml);

    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.style.backgroundColor = currentTheme === 'dark' ? '#333' : '#f4f4f4';
        document.body.style.color = currentTheme === 'dark' ? '#f4f4f4' : '#333';
    } else {
        document.body.style.backgroundColor = '#f4f4f4';
        document.body.style.color = '#333';
        localStorage.setItem('theme', 'light');
    }

    themeToggle.addEventListener('click', function() {
        let theme = localStorage.getItem('theme');
        if (theme === 'light') {
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#f4f4f4';
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.style.backgroundColor = '#f4f4f4';
            document.body.style.color = '#333';
            localStorage.setItem('theme', 'light');
        }
    });


    const loggedInUser = localStorage.getItem('loggedInUser');
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const logoutLink = document.getElementById('logout-link');
    const logoutButton = document.getElementById('logout-button');
    const userNameDisplay = document.getElementById('user-name-display');

    if (loggedInUser) {
        const user = JSON.parse(loggedInUser);
        if (loginLink) loginLink.style.display = 'none';
        if (registerLink) registerLink.style.display = 'none';
        if (logoutLink) logoutLink.style.display = 'block';
        if (userNameDisplay) {
            userNameDisplay.textContent = `Hello, ${user.name}`;
            userNameDisplay.style.display = 'block';
        }
    } else {
        if (loginLink) loginLink.style.display = 'block';
        if (registerLink) registerLink.style.display = 'block';
        if (logoutLink) logoutLink.style.display = 'none';
        if (userNameDisplay) userNameDisplay.style.display = 'none';
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function(event) {
            event.preventDefault();
            localStorage.removeItem('loggedInUser');
            window.location.href = 'index.html'; // Redirect to home or login page after logout
        });
    }

    // Add some basic styling for the navbar
    const style = document.createElement('style');
    style.innerHTML = `
        .navbar {
            background-color: #333;
            color: white;
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            margin-bottom: 20px;
        }
        .nav-brand {
            display: flex;
            align-items: center;

        }
        .nav-brand a {
            color: white;
            text-decoration: none;
            font-size: 1.5em;
            font-weight: bold;
            display: flex;
            align-items: center;
        }
        .nav-brand img {
            height: 50px;
            width: 50px;
            margin-right: 10px;
            border-radius:50px;
            background-color: #e6e6e6;

        }
        .nav-brand img:hover {
            background-color: #ffee00ff;
        }

        .nav-links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
        }
        .nav-links li {
            margin-left: 20px;
        }
        .nav-links a {
            color: white;
            text-decoration: none;
            font-size: 1.1em;
            transition: color 0.3s ease;
        }
        .nav-links a:hover {
            color: #007bff;
        }
    `;
    document.head.appendChild(style);
});
