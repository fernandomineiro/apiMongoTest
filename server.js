const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Conectado com banco!");
  })
  .catch(err => {
    console.log("Sem conexão!", err);
    process.exit();
  });


app.get("/", (req, res) => {
  res.json({ message: "Bem vindo." });
});

require("./app/routes/date.routes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server está ronando na porta ${PORT}.`);
});
