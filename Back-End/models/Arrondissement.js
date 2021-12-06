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
      position: {
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
  },
  properties: {
    n_sq_co: {
      type: Number,
      required: false,
    },
    perimetre: {
      type: Number,
      required: false,
    },
    l_ar: {
      type: String,
      required: false,
    },
    surface: {
      type: String,
      required: false,
    },
    geom_x_y: {
      latitude: {
        type: Number,
        required: false,
      },
      longitude: {
        type: Number,
        required: false,
      },
    },
    n_sq_ar: {
      type: Number,
      required: false,
    },
    l_aroff: {
      type: String,
      required: false,
    },
    c_arinsee: {
      type: Number,
      required: false,
    },
    c_ar: {
      type: Number,
      required: false,
    },
  },
});

module.exports = Mongoose.model("Arrondissements", PostSchema);
