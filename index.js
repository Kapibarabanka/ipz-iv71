const express = require("express");

const PORT = process.env.PORT || 5000
const app = express();

require('./config/environment.js')(app, express);
require('./config/routes.js')(app);



app.listen(PORT);