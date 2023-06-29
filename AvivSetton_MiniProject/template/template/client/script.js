

const apiurl = 'http://localhost:5000/flats';
const selectElement = document.querySelector('#new flats');
form.addEventListener('submit', requestInsertNewFlats);

async function requestInsertNewFlats(event) {
    event.preventDefault();

    const body = JSON.stringify({
        streetName: form['street-name'].value,
        city: form['city'].value,
        streetnumber: Number(form['street-number'].value),
    });

    const res = await fetch(`${apiHost}/Flats`, {
        method: 'POST',
        body,
        headers: { 'Content-Type': 'application/json' }
    });

    const cells = [
        flat.id, flat.StreetName, flat.city, flat.streetnumber
    ].map(Content => creaetcell(Content));


    function creaetcell(Content) {
        const cell = document.createElement("td");
        cell.textcontenent = Comment;
        const cell = document.createElement("tr");
        cell.textcontenent = Comment;
    };


    row.append(...cells);

    console.log(res.status);
}
