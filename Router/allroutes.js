import Route from "./route.js";

//Définir ici vos routes
export const allRoutes = [

    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "la galerie", "/pages/galerie.html"),
    new Route("/signin","connexion","/pages/signin.html","/js/signin.js"),
    new Route("/signin","inscription","/pages/signup.html", "/js/signup.js"),
    new Route("/account","mon compte","/pages/account.html"),
    ];

//Le titre s'affiche comme ceci : Route.titre - websitename
8
export const websiteName = "ZOO ARCADIA FRONT";
