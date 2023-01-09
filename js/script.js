// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede e rendere la pagina gradevole (potete usare lo screen in allegato come spunto

const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Devoloper",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Grafic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

const targetElement = document.getElementById("target");

teamMembers.forEach((element) => {
  console.log(element.name, element.role, element.image);
  targetElement.innerHTML += `<div class="card m-3">
  <img src="img/${element.image}" class="card-img-top" alt="${element.name}">
  <div class="card-body">
    <h5 class="card-title fs-4 text-center">${element.name}</h5>
    <p class="card-text text-center">${element.role}</p>
  </div>
</div> `;
});
