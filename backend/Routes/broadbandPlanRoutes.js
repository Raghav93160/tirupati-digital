const express = require("express");

const router = express.Router();

const {
  createBroadbandPlan,
  getBroadbandPlans,
  getBroadbandPlanById,
  updateBroadbandPlan,
  deleteBroadbandPlan,
} = require("../Controller/broadbandPlanController");

const authMiddleware = require("../Middleware/authMiddleware");

// ======================================
// CREATE PLAN
// POST /api/broadband-plans
// Protected
// ======================================
router.post(
  "/create-broadband-plans",
  authMiddleware,
  createBroadbandPlan
);

// ======================================
// GET ALL PLANS
// GET /api/broadband-plans
// Public
// ======================================
router.get(
  "/getAll-broadband-plans",
  getBroadbandPlans
);

// ======================================
// GET SINGLE PLAN
// GET /api/broadband-plans/:id
// Public
// ======================================
router.get(
  "/getSingle-broadband-plans/:id",
  getBroadbandPlanById
);

// ======================================
// UPDATE PLAN
// PUT /api/broadband-plans/:id
// Protected
// ======================================
router.put(
  "/update-broadband-plans/:id",
  authMiddleware,
  updateBroadbandPlan
);

// ======================================
// DELETE PLAN
// DELETE /api/broadband-plans/:id
// Protected
// ======================================
router.delete(
  "/detele-broadband-plans/:id",
  authMiddleware,
  deleteBroadbandPlan
);

module.exports = router;