const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({
    origin: ['http://127.0.0.1:5173/', 'http://localhost:3000/']
}));

const TraineeRoutes = require('./routes/traineeRoutes');
app.use("/trainees", TraineeRoutes);

app.listen(4000, () => console.log(`Server is listening in ${4000}`));