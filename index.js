import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//professor coloquei uma cor para ficar mais clubista.
const times = [
  {
    id: 1,
    nome: "Grêmio",
    estadio: "Arena do Grêmio",
    cidade: "Porto Alegre",
    cor: "#87CEEB",
  },
  {
    id: 2,
    nome: "Internacional",
    estadio: "Beira-Rio",
    cidade: "Porto Alegre",
    cor: "#ff0000",
  },
  {
    id: 3,
    nome: "Juventude",
    estadio: "Alfredo Jaconi",
    cidade: "Caxias do Sul",
    cor: "#008000",
  },
];

app.get("/", (req, res) => {
  res.render("index", {
    mensagem: "Bem-vindo ao Catálogo Esportivo de Times!",
  });
});

app.get("/times", (req, res) => {
  res.render("times", { times });
});

app.get("/times/:id", (req, res) => {
  const idParam = parseInt(req.params.id, 10);
  const time = times.find((t) => t.id === idParam);

  if (!time) {
    return res.status(404).send("Time não encontrado.");
  }

  res.render("detalhe", { time });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
