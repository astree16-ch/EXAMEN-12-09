// Les éléments HTML dont nous avons besoin
const chiffres = document.querySelectorAll(".timer span");
const date = document.querySelector("#dateHeure");
const boutonNotification = document.querySelector("#notifyButton");
const boutonPartage = document.querySelector("#shareButton");

// Affiche l'heure actuelle dans les six cases
function afficherHeure() {
	const maintenant = new Date();
	const heure = String(maintenant.getHours()).padStart(2, "0");
	const minutes = String(maintenant.getMinutes()).padStart(2, "0");
	const secondes = String(maintenant.getSeconds()).padStart(2, "0");
	const temps = heure + minutes + secondes;

	for (let i = 0; i < 6; i++) {
		chiffres[i].textContent = temps[i];
	}
}

// Affiche la date du jour
function afficherDate() {
	date.textContent = new Date().toLocaleDateString("fr-FR");
}

// Affichage immédiat au chargement de la page
afficherHeure();
afficherDate();

// Mise à jour chaque seconde
setInterval(afficherHeure, 1000);
setInterval(afficherDate, 1000);

// Affiche une alerte quand on clique sur NOTIFY ME
boutonNotification.addEventListener("click", function () {
	Swal.fire("Notification activée !", "Tu seras informé du lancement.", "success");
});

// Ouvre le partage quand on clique sur SHARE
boutonPartage.addEventListener("click", function () {
	if (navigator.share) {
		navigator.share({
			title: "The Graphic Collection",
			text: "Regarde The Graphic Collection !",
			url: window.location.href
		});
	} else {
		const lien = encodeURIComponent(window.location.href);
		window.open("https://www.facebook.com/sharer/sharer.php?u=" + lien, "_blank");
	}
});
