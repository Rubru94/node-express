const express = require("express");
const cors = require("cors");
const routes = require('./routes/__.routes');

const app = express();
app.set('port', process.env.SERVER_PORT || 3000);
const corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

/**
 * @info parse requests of content-type - application/json
 */
app.use(express.json());

/**
 * @info parse requests of content-type - application/x-www-form-urlencoded
 */
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the application." });
});

app.use('/api', routes);

module.exports = app;