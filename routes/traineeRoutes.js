const routes = require('express').Router();
const Trainees = require('../controllers/traineeControllers');

// http://localhost:4000/trainees/readTrainees
routes.get("/readTrainees", Trainees.ReadTrainees);

// http://localhost:4000/trainees/readSpecificTrainee
routes.get("/readSpecificTrainee", Trainees.ReadSpecificTrainee);

// http://localhost:4000/trainees/createTrainee
routes.post("/createTrainee", Trainees.CreateTrainee);

// http://localhost:4000/trainees/updateTrainee
routes.put("/updateTrainee", Trainees.UpdateTrainee);

// http://localhost:4000/trainees/deleteTrainee
routes.delete("/deleteTrainee", Trainees.DeleteTrainee);

module.exports = routes;