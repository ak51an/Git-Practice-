const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.send('Sucessful response.');
});

app.listen(3000,S () => console.log("Example listening on port 3000."));

