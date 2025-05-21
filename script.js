const container = document.getElementById("product-container");

function Boutique() {
  const ApiSneakers = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json";
  fetch(ApiSneakers)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

 data.forEach(product => {
    
Boutique();

