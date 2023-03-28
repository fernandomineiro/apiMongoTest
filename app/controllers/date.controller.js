const db = require("../models");
const Dats = db.dates;


exports.create = (req, res) => {

 if (!req.body.title || !req.body.dateHors || req.body.published) {
    res.status(400).send({ message: "Existe algum campo vazio!" });
    return;
  }

  const date = new Dats({
    journedHours: req.body.journedHours,
    dateHors: req.body.dateHors,
    published: req.body.published
  });

  date.save(date)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro ao criar as horas"
      });
    });
};



exports.update = (req, res) => {
  
  const id = req.params.id;
 
  if (!req.body.title || !req.body.dateHors || req.body.published) {
    res.status(400).send({ message: "Existe algum campo vazio!" });
    return;
  }

  Dats.findByIdAndUpdate(id, req.body)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Não encontrado`
        });
      } else res.send({ message: "Date atualizado com sucesso" });
    })
    .catch(err => {
      res.status(500).send({
        message: "Não encontrato com esse "+id      });
    });
};


exports.findAllPublished = (req, res) => {
  Dats.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "erro!!!."
      });
    });
};
