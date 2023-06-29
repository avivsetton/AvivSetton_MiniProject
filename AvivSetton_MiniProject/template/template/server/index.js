
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/Flats', require('./routes/FlatsRoute.js'));

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).send('Server Error');
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});

