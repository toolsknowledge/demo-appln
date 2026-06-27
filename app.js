const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())
app.use(express.json());
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("CI/CD Pipeline Working Successfully");
});



app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});