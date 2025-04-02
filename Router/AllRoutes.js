import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La Galerie", "/pages/galerie.html"),
    new Route("/lacarte", "La Carte", "/pages/lacarte.html"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html"),
    new Route("/account", "Mon compte", "/pages/auth/account.html"),
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/edithPassword.html"),
    new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html"),    
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Au Jardin de Flore";