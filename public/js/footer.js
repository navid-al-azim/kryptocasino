// footer.js

function loadFooter() {
    // Create a div to hold the content
    var container = document.createElement('div');
  
    // Set the HTML content for the footer
    container.innerHTML = `
    <!DOCTYPE html>
<html>

<head>
    <title>Navigation Bar</title>
    <link rel="stylesheet" type="text/css" href="./css/style.css">
</head>

<body id="main-box">
    
    <!-- Your page content goes here -->

    <div class="footer">
    <div class="footer-column"></div>
        <div class="footer-column">
            <h2>Cryptocurrencies</h2>
            <ul>
                <li><a href="/pages/1-currencies/bitcoin/">Bitcoin</a></li>
                <li><a href="/pages/1-currencies/ethereum/">Ethereum</a></li>
                <li><a href="/pages/1-currencies/dogecoin/">Dogecoin</a></li>
                <li><a href="/pages/1-currencies/tether/">Tether</a></li>
                <li><a href="/pages/1-currencies/binance/">Binance Coin</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h2>Online Casinos</h2>
            <ul>
                <li><a href="/pages/2-best casino/mobile-casinos/">Mobile Casinos</a></li>
                <li><a href="pages/2-best casino/bonus/">Casino Bonuses</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h2>Payment Methods</h2>
            <ul>
                <li><a href="/pages/3-payment/mastercard/">Mastercard casinos</a></li>
                <li><a href="/pages/3-payment/visa/">Visa Casinos</a></li>
                <li><a href="/pages/3-payment/neteller/">Neteller</a></li>
                <li><a href="/pages/3-payment/skrill/">Skrill</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h2>Casino Games</h2>
            <ul>
                <li><a href="/pages/slot/">Slots</a></li>
            </ul>
        </div>
        <div class="footer-column"></div>
        
    </div>
</body>

</html>
    `;
  
    // Append the content to the body
    document.getElementById('footer-container').appendChild(container);
  }
  
  // Call the function to load the footer when the DOM is ready
  document.addEventListener('DOMContentLoaded', loadFooter);
  