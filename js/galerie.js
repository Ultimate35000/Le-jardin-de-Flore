const galerieImage = document.getElementById("allImages");
let monImage = getImage("titre", "../images/chef-cuisinier.jpeg");

galerieImage.innerHTML = monImage;




function getImage(titre, urlImage){
    titre = sanitizeHtml(titre);
    urlImage = sanitizeHtml(urlImage);


    return `<div class="col p-3">
            <div class="image-card text-dark">
                <img src="${urlImage}" class="rounded w-100" alt="Chef Cuisinier">
                <p class="titre-image">${titre}</p>
                <div class="action-image-buttons" data-show="admin">
                    <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
                    <button type="button" class="btn btn-outline-light"data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>                
                </div>
            </div>
        </div>`;

}