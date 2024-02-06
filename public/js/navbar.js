// navbar.js

function loadNavbar() {
    // Create a div to hold the content
    var container = document.createElement("div");
  
    // Set the HTML content for the navigation bar
    container.innerHTML = `<!DOCTYPE html>
	<html>
	<head>
		<title>Navigation Bar</title>
		<link rel="stylesheet" type="text/css" href="/css/style.css">
	</head>
	<body id="main-box">
		<div class="head-container">
		<header>
		<div class="container">
		  <div class="nav-wrapper">
			
			<a href="/" class="logo">
			  <img src="/images/logo.png" alt="CasinoCanada Logo">
			</a>
			<span class="site-name">#1 Casino Review Site - GamblingCentral </span>
			<div class ="homebutton"><a href="/" style = "color: white;"> HOME </a></div>
		  </div>
		  <nav>
			<ul>
					<li>
						<a href="#">Cryptocurrencies▾</a>
						<div class="casino-online-submenu">
						<ul>
							<li><a href="/pages/1-currencies/bitcoin.html">Bitcoin</a></li>
							<li><a href="/pages/1-currencies/ethereum.html">Ethereum</a></li>
							<li><a href="/pages/1-currencies/doge.html">Dogecoin</a></li>
							<li><a href="/pages/1-currencies/tether.html">Tether</a></li>
							<li><a href="/pages/1-currencies/binance.html">Binance Coin</a></li>
						</ul>
						</div>
					</li>
			  <li><a href="#">Online Casinos▾</a>
			  <div class="casino-online-submenu">
				  <ul>
				  <li><a href="/pages/2-best casino/new-casino.html">New Online Casinos</a></li>
				  
				  <li><a href="/pages/2-best casino/best-mobile.html">Mobile Casinos</a></li>
				  <li><a href="/pages/2-best casino/bonus.html">Casino Bonus</a></li>
				  </ul>
				</div></li>
			  <li><a href="#">Payment Methods▾</a>
			  <div class="casino-online-submenu">
				  <ul>
				  <li><a href="/pages/3-payment/mastercard.html">Mastercard Casinos</a></li>
				  <li><a href="/pages/3-payment/visa.html">Visa Casinos</a></li>
				  <li><a href="/pages/3-payment/netteler.html">Neteller</a></li>
				  <li><a href="/pages/3-payment/skrill.html">Skrill</a></li>
				  </ul>
				</div></li>
			  
			  <li><a href="#">Casino Games▾</a>
			  <div class="casino-online-submenu">
				  <ul>
				  <li><a href="/pages/slots/">Slots</a></li>
				  </ul>
				</div></li>
			  <li><a href="#">Providers▾</a>
			  <div class="casino-online-submenu">
				  <ul>
				  <li><a href="/pages/4-provider/micro.html">Microgaming</a></li>
				  <li><a href="/pages/4-provider/booongo.html">Booongo</a></li>
				  <li><a href="/pages/4-provider/habanero.html">Habanero</a></li>
					
				  </ul>
				</div></li>
			  
			</ul>
		  </nav>
		</div>
	  </header>
		 </div>
	</body> <!--end of #main-box-->
	</html>
      `;
  
    // Append the content to the container
    document.getElementById("navbar-container").appendChild(container);
  }
  
  // Call the function to load the navbar when the DOM is ready
  document.addEventListener("DOMContentLoaded", loadNavbar);
  