const express = require("express");

const PORT = process.env.PORT || 5000
const app = express();
app.get("/", function(request, response){
app.set('html', path.join(__dirname, 'html'))
    response.render("/html/main_page.html");
});
app.get("/about", function(request, response){

    response.send("<h1>О сайте</h1>");
});
app.get("/contact", function(request, response){

    response.send("<h1>Контакты</h1>");
});
app.listen(3000);