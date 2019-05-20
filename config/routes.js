module.exports = function(app) {

    app.get("/", function(request, response){
        response.render("start_page");
    });
    app.get("/about", function(request, response){

        response.send("<h1>О сайте</h1>");
    });
    app.get("/contact", function(request, response){

        response.send("<h1>Контакты</h1>");
    });
};