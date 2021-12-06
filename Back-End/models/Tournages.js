const Mongoose = require("mongoose");

const PostSchema = Mongoose.Schema({
  type: {
    type: String,
    required: false,
  },
  geometry: {
    type: {
      type: String,
      required: false,
    },
    coordinates: {
      longitude: {
        type: Number,
        required: false,
      },
      latitude: {
        type: Number,
        required: false,
      },
    },
  },
  properties: {
    anne_tournage: {
      type: String,
      required: false,
    },
    coord_y: {
      type: Number,
      required: false,
    },
    coord_x: {
      type: Number,
      required: false,
    },
    type_tournage: {
      type: String,
      required: false,
    },
    nom_producteur: {
      type: String,
      required: false,
    },
    geo_point_2d: [
      {
        longitude: {
          type: Number,
          required: false,
        },
        latitude: {
          type: Number,
          required: false,
        },
      },
    ],
    nom_tournage: {
      type: String,
      required: false,
    },
    nom_realisateur: {
      type: String,
      required: false,
    },
    date_fin: {
      type: String,
      required: false,
    },
    adresse_lieu: {
      type: String,
      required: false,
    },
    id_lieu: {
      type: String,
      required: false,
    },
    date_debut: {
      type: String,
      required: false,
    },
    ardt_lieu: {
      type: String,
      required: false,
    },
  },
});

module.exports = Mongoose.model("Tournage", PostSchema);
