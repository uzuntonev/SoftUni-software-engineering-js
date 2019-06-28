const express = require('express');

const app = express();

app.use('/public', express.static('./public'));

app.listen(3000, () => console.log(`Listening on port 3000`)) 