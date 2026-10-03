const BroadbandPlan = require("../model/broadbandPlanSchema");

// ======================================
// CREATE BROADBAND PLAN
// POST /api/broadband-plans
// ======================================
const createBroadbandPlan = async (req, res) => {
  try {
    const {
      speed,
      price,
      features,
      popular,
      status,
    } = req.body;

    // Required fields validation
    if (!speed || price === undefined) {
      return res.status(400).json({
        success: false,
        message: "Speed and price are required",
      });
    }

    // Create plan
    const plan = await BroadbandPlan.create({
      speed,
      price,
      features: features || [],
      popular: popular || false,
      status: status || "Active",
    });

    return res.status(201).json({
      success: true,
      message: "Broadband plan created successfully",
      plan,
    });
  } catch (error) {
    console.error("Create Broadband Plan Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// ======================================
// GET ALL BROADBAND PLANS
// GET /api/broadband-plans
// ======================================
const getBroadbandPlans = async (req, res) => {
  try {
    const plans = await BroadbandPlan.find().sort({
      price: 1,
    });

    return res.status(200).json({
      success: true,
      count: plans.length,
      plans,
    });
  } catch (error) {
    console.error("Get Broadband Plans Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// ======================================
// GET SINGLE BROADBAND PLAN
// GET /api/broadband-plans/:id
// ======================================
const getBroadbandPlanById = async (req, res) => {
  try {
    const { id } = req.params;

    const plan = await BroadbandPlan.findById(id);

    if (!plan) {
      return res.status(404).json({
        success: false,
        message: "Broadband plan not found",
      });
    }

    return res.status(200).json({
      success: true,
      plan,
    });
  } catch (error) {
    console.error("Get Broadband Plan Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// ======================================
// UPDATE BROADBAND PLAN
// PUT /api/broadband-plans/:id
// ======================================
const updateBroadbandPlan = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      speed,
      price,
      features,
      popular,
      status,
    } = req.body;

    // Only allow these fields to be updated
    const updateData = {
      speed,
      price,
      features,
      popular,
      status,
    };

    // Remove undefined fields
    Object.keys(updateData).forEach((key) => {
      if (updateData[key] === undefined) {
        delete updateData[key];
      }
    });

    // Update plan
    const updatedPlan = await BroadbandPlan.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    // Plan not found
    if (!updatedPlan) {
      return res.status(404).json({
        success: false,
        message: "Broadband plan not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Broadband plan updated successfully",
      plan: updatedPlan,
    });
  } catch (error) {
    console.error("Update Broadband Plan Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// ======================================
// DELETE BROADBAND PLAN
// DELETE /api/broadband-plans/:id
// ======================================
const deleteBroadbandPlan = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPlan = await BroadbandPlan.findByIdAndDelete(id);

    // Plan not found
    if (!deletedPlan) {
      return res.status(404).json({
        success: false,
        message: "Broadband plan not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Broadband plan deleted successfully",
    });
  } catch (error) {
    console.error("Delete Broadband Plan Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  createBroadbandPlan,
  getBroadbandPlans,
  getBroadbandPlanById,
  updateBroadbandPlan,
  deleteBroadbandPlan,
};