const express = require("express");
const router = express.Router();
const placeController = require("../controllers/placeController");

router.post("/places", placeController.addPlace);
router.get("/places/nearby", placeController.getNearbyPlaces);
router.get("/places/nearest", placeController.getNearestPlace);
router.get("/places/distance", placeController.getDistance);

module.exports = router;
