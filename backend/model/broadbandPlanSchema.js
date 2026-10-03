const mongoose = require("mongoose");

const broadbandPlanSchema = new mongoose.Schema(
  {
    speed: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },

    features: {
      type: [String],
      default: [],
    },

    popular: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "BroadbandPlan",
  broadbandPlanSchema
);