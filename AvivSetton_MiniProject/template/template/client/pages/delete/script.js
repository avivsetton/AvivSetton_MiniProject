const apiUrl = 'http://localhost:5000/flats'
const selectElement = document.querySelector('#select-flats');
const delBtn = document.querySelector('#Delete-button');

initSelect();
delBtn.addEventListener('click', deleteFlats);
async function initSelect() {
    const res = await fetch(apiUrl);
    const allflats = await res.json();

    const options =
        allflats.map(({ id, StreetName, city, streetnumber }) => new Option(StreetName, city, streetnumber, id));

    selectElement.append(...options);
}
   
async function deleteFlats() {
    const res = await fetch(
        apiUrl + '.../flats' + streetName.value, city.value, streetnumber.value,
        { method: 'DELETE' }
    );

    console.log(res.status);
}