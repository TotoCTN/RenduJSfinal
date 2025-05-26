// 💻📝 Rendu final JS – Génération d'un site web dynamique à partir des données d'une API
// Objectif : utilisation de fetch() pour récupérer des données JSON, manipulation DOM, boucles, gestion d'images et cartes interactives.
// 🟢 Niveau 1 – Récupérer les données de l'API
// Utilise fetch() pour récupérer les données JSON depuis l'API https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/.
// Tu as le choix du sujet, donc clique bien sur le sujet de ton choix pour avoir l'URL finale.
// Vérifie si la réponse de l'API est correcte. Si oui, passe les données à une fonction qui affichera le contenu du site.
// 🟡 Niveau 2 – Affichage du contenu principal
// Dans la fonction, crée un élément div pour afficher le nom de l'entreprise, sa phrase d'accroche et un bouton d'appel à l'action.
// Affiche ces informations dynamiquement avec les données récupérées depuis l'API.
// 🔴 Niveau 3 – Afficher les activités
// Pour chaque activité dans les données JSON, crée dynamiquement une div contenant un titre, une description et une image.
// Affiche ces informations dans une section dédiée, avec une carte pour chaque activité si les données contiennent un lien vers une image.
// 🔴🔴 Niveau 4 – Afficher les témoignages
// Pour chaque témoignage dans les données JSON, crée dynamiquement une div contenant le prénom, le commentaire.
// Ajoute ces témoignages sous les activités dans la page.
// 🔴🔴🔴 Niveau 5 (optionnel) – Ajouter une carte interactive
// Ajoute une carte interactive à la page à l’aide de la bibliothèque Leaflet.js.
// Utilise les coordonnées fournies dans les données JSON pour centrer la carte et y ajouter un fond de carte interactif.
// 💎 Bonus – Design et personnalisation
// Fonts personnalisées : Ajoute des fonts depuis Google Fonts
// Icônes : Utilise une bibliothèque comme Font Awesome ou Material Icons
// Favicon personnalisé : via balise <link rel="icon" ...>
// Design : styles CSS avec couleurs, espaces, ombres, transitions, animations légères

fetch(
  "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json"
)
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("MainContainer");

    let Commercial = document.createElement("h1");
    Commercial.textContent = data.nomCommercial;
    container.appendChild(Commercial);

    let phraseAccroche = document.createElement("h2");
    phraseAccroche.textContent = data.phraseAccroche;
    container.appendChild(phraseAccroche);

    let texteBouton = document.createElement("Button");
    texteBouton.textContent = data.texteAppelAction;
    container.appendChild(texteBouton);

    data.avantagesClients.forEach((element) => {
      let paraAvantage = document.createElement("h3");
      paraAvantage.textContent = element;
      container.appendChild(paraAvantage);
    });

    let produit = data.produits;
    

    produit.forEach((Sneakers) => {
      const containerProduit = document.getElementById("Divproduits");
      const Card = document.createElement("div");
      const CardName = document.createElement("h4");
      const CardDescription = document.createElement("p");
      const Cardimg = document.createElement("img");

      CardName.textContent = Sneakers.nom;
      CardDescription.textContent = Sneakers.CardDescription;
      Cardimg.src = Sneakers["image-url"];

      containerProduit.appendChild(Card);
      Card.appendChild(CardName);
      Card.appendChild(CardDescription);
      Card.appendChild(Cardimg);
    });
  });
// 🔴🔴 Niveau 4 – Afficher les témoignages
// Pour chaque témoignage dans les données JSON, crée dynamiquement une div contenant le prénom, le commentaire.
// Ajoute ces témoignages sous les activités dans la page.
let temoignage = data.temoignages;

temoignage.forEach(avis => {
  const containerTemoignage = document.getElementById("Divtemoignages");
  const card = document.createElement("div");
  const cardPrenom = document.createElement("h4");
  const cardDescription = document.createElement("p");

  cardPrenom.textContent = avis.prenom;
  cardDescription.textContent = avis.cardDescription;

   



});