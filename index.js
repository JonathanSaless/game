// Carrega a lib `express`, responsável pelo backend do projeto
const express = require("express");
// Carrega a lib `ejs`, responsável por interpretar os templates HTML
const ejs = require("ejs");

// Inicializa o `express`
var app = express();

// Aponta o diretório onde os arquivos estáticos estão
app.use(express.static("public"));
app.use("/src", express.static("src"));

// Configura a engine de visialização para EJS
app.set("view engine", "ejs");

// Aponta em qual porta o web server vai rodar
app.listen(8080);

// *** GET Routes - Mostra as paginas ***

// Tela de inicialização do jogo
app.get("/", function (req, res) {
  res.render("pages/splash");
});

// Menu
app.get("/menu", (req, res) => {
  res.render("pages/menu");
});

// Gameplay
app.get("/gameplay", (req, res) => {
  res.render("pages/gameplay");
});
