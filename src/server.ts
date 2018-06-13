import express = require('express');

let app = express();
const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/../`));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
