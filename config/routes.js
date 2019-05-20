path = new require('path')
module.exports = function(app) {

    app.get("/", function(request, response){
        response.render("start_page");
    });
    app.get("/home", function(request, response){
        response.render("main_page");
    });
    app.get("/login", function(request, response){
        response.render("entarance");
    });
    app.get("/register", function(request, response){
        response.render("registration");
    });
    app.get("/edit", function(request, response){
        response.render("edit_page");
    });
};