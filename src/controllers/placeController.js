const placeService = require("../services/placeService");

// adding a place
const addPlace = async (req, res) => {
  try {
    const { name, type, latitude, longitude } = req.body;
    const place = await placeService.addPlace(name, type, latitude, longitude);
    res.status(201).json(place);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// finding nearby places
const getNearbyPlaces = async (req, res) => {
  try {
    const { latitude, longitude, radius } = req.query;
    const places = await placeService.findNearbyPlaces(
      latitude,
      longitude,
      radius
    );
    res.json(places);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// finding the nearest place
const getNearestPlace = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;
    const place = await placeService.findNearestPlace(latitude, longitude);
    res.json(place);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// calculating distance
const getDistance = async (req, res) => {
  try {
    const { lat1, lon1, lat2, lon2 } = req.query;
    const distance = await placeService.calculateDistance(
      lat1,
      lon1,
      lat2,
      lon2
    );
    res.json({ distance });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addPlace, getNearbyPlaces, getNearestPlace, getDistance };
