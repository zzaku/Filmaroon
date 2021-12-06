const express = require("express");
const router = express.Router();
const Tournages = require("../models/Tournages");
const Arrondissement = require("../models/Arrondissement");
const { db } = require("../models/Tournages");

router.get("/tournage", async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const posts = await Tournages.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.json(posts);
  } catch {
    res.json({ message: err });
  }
});

router.get("/arrondissement", async (req, res) => {
  try {
    const arr = req.query.arr;
    const searcheTournage = await Arrondissement.find({
      "properties.c_ar": arr,
    });
    res.json(searcheTournage);
  } catch {
    res.json({ message: err });
  }
});

router.get("/tournage/films", async (req, res) => {
  try {
    const name = req.query.name;
    const realisateur = req.query.realisateur;
    const producteur = req.query.producteur;
    const { page = 1, limit = 10 } = req.query;
    const searcheTournage = await Tournages.findOne({
      $or: [
        {
          "properties.nom_tournage": name,
        },
        {
          "properties.nom_realisateur": realisateur,
        },
        {
          "properties.nom_producteur": producteur,
        },
      ],
    });
    res.send(searcheTournage);
  } catch {
    res.json({ message: err });
  }
});

router.get("/tournage/films/2", async (req, res) => {
  try {
    const name = req.query.name;
    const arrondissement = req.query.arrondissement;
    const { page = 1, limit = 10 } = req.query;
    const searcheTournage = await Tournages.find({
      "properties.nom_tournage": name,
      "properties.adresse_lieu": arrondissement,
    });
    res.send(searcheTournage);
  } catch {
    res.json({ message: err });
  }
});

router.get("/tournage/films/3", async (req, res) => {
  try {
    const arrondissement = req.query.arrondissement;
    const { page = 1, limit = 10 } = req.query;
    const posts = await Tournages.find({
      "properties.ardt_lieu": arrondissement,
    })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.json(posts);
  } catch {
    res.json({ message: err });
  }
});

/*router.delete("/tournage/:composantId", async (req, res) => {
  try {
    const removedPost = await Tournages.remove({ _id: req.params.composantId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/tournage", async (req, res) => {
  try {
    const removedPost = await Tournages.remove();
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/Arrondissement/:composantId", async (req, res) => {
  try {
    const removedPost = await Tournages.remove({ _id: req.params.composantId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/Arrondissement", async (req, res) => {
  try {
    const removedPost = await Tournages.remove();
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});*/

module.exports = router;
