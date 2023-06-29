const { insertNewFlats } = require("../../../server/controllres/FlatsController");

const apiUrl = 'http://localhost:5000/products'

const selectElement = document.querySelector('select');
const submitBtn = document.querySelector('button');

initSelect();

submitBtn.addEventListener('click', insertNewFlats);

async function initSelect() {
    const res = await fetch(apiUrl);
    const allFlats = await res.json();

    const options =
        allFlats.map(({ name, id }) => new Option(name, id));

    selectElement.append(...options);
}

functioninsertNewFlats()
const res = fetch(
    apiUrl + '../' + streetName.value, city.value, streetnumber.value,
    { method: 'submit' }
);

console.log(res.status);