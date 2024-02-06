// navbar.js

function loadNavbar() {
    // Create a div to hold the content
    var container = document.createElement("div");
  
    // Set the HTML content for the navigation bar
    container.innerHTML = `
    <!DOCTYPE html>
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
						<li><a href="/">Bitcoin</a></li>
						<li><a href="/">Ethereum</a></li>
						<li><a href="/">Dogecoin</a></li>
                        <li><a href="/">Litecoin</a></li>
                        <li><a href="/">Binance Coin</a></li>
					</ul>
					</div>
				</li>
		  <li><a href="#">Online Casinos▾</a>
		  <div class="casino-online-submenu">
			  <ul>
              <li><a href="/">New Online Casinos</a></li>
              <li><a href="/">VPN Casinos</a></li>
              <li><a href="/">Mobile Casinos</a></li>
              <li><a href="/">Casino Bonus</a></li>
			  </ul>
			</div></li>
		  <li><a href="#">Payment Methods▾</a>
		  <div class="casino-online-submenu">
			  <ul>
              <li><a href="/">Mastercard Casinos</a></li>
              <li><a href="/">Visa Casinos</a></li>
              <li><a href="/">Neteller</a></li>
              <li><a href="/">Bank Transfer</a></li>
			  </ul>
			</div></li>
		  
		  <li><a href="#">Casino Games▾</a>
		  <div class="casino-online-submenu">
			  <ul>
              <li><a href="/">Slots</a></li>
			  </ul>
			</div></li>
		  <li><a href="#">Providers▾</a>
		  <div class="casino-online-submenu">
			  <ul>
              <li><a href="/">Microgaming</a></li>
              <li><a href="/">Spinomenal</a></li>
              <li><a href="/">Push Gaming</a></li>
				
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
  