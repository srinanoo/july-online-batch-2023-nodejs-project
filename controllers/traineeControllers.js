const { TraineeModel } = require('../models/traineeModel');

// Create Trainee
function CreateTrainee(req, res) {
    // console.log("Creating Trainee...");

    try {
        let obj;
        if(req.body)
            obj = {
                "name": req.body.name
            }
        else
            obj = {};

        TraineeModel.find(obj).then(async (data) => {
            if(data.length > 0) {
                res.json({"msg": "Trainee Already Exists!"});
            } else {
                const NewTrainee = new TraineeModel(req.body);
                await NewTrainee.save();
                res.json({"msg": "Trainee has been created successfully!!!"});
            }
        });
    } catch (err) {
        console.log("Error: " + err.message);
        res.send("Error:" + err.message);
    }
}

// Read Trainees (all trainees)
function ReadTrainees(req, res) {
    console.log("Reading Trainees...");
    try {
        let obj;
        if(req.body)
            obj = req.body;
        else
            obj = {};

        TraineeModel.find(obj).then((data) => {
            console.log(data);
            if(data.length > 0)
                res.json(data);
            else
                res.json({"msg": "No Trainees found!!!!"});
        });
    } catch (err) {
        console.log("Error: " + err.message);
        res.send("Error:" + err.message);
    }
}

// Read Specific Trainees (get only that specific trainee data)
function ReadSpecificTrainee(name) {
    console.log("Reading Specific Trainees...");

    try {
        fs.readFile(traineesFile, "utf8", (err, data) => {
            if(err) console.log(err);
            else {
                // data // the entire trainee data from trainess.json
                // name // we have the runtime data to be used for reading a specific trainee
                let traineesData = JSON.parse(data);

                // Option 1
                // let resultArr = [];
                // traineesData.forEach((v) => {
                //     if(name === v.name) {
                //         resultArr.push(v);
                //     }
                // });

                // Option 2
                let resultArr = traineesData.filter(v => name === v.name);

                if(resultArr.length > 0) 
                    console.log(resultArr);
                else
                    console.log("No Trainee Found!");
            }
        });
    } catch (err) {
        console.log("Error: " + err.message);
    }
}

// Update / Edit Trainee
function UpdateTrainee(req, res) {
    console.log("Updating Trainee...");

    try {
        let obj;
        if(req.body)
            obj = {
                "name": req.body.name
            }
        else
            obj = {};

        TraineeModel.find(obj).then(async (data) => {
            if(data.length > 0) {
                TraineeModel.updateOne(obj, req.body).then(result => {
                    console.log(result);
                    if(result.modifiedCount > 0)
                        res.json({"msg": "Trainee updated successfully!!!"});
                    else
                        res.json({"msg": "Unable to update or already updated the Trainee details!!!"});
                });
            } else {
                res.json({"msg": "Trainee not found!!!"});
            }
        });
    } catch (err) {
        console.log("Error: " + err.message);
        res.send("Error:" + err.message);
    }
}

// Delete Trainee
function DeleteTrainee(req, res) {
    console.log("Deleting Trainee...");

    try {
        let obj;
        if(req.body)
            obj = {
                "name": req.body.name
            }
        else
            obj = {};

        TraineeModel.find(obj).then(async (data) => {
            if(data.length > 0) {
                TraineeModel.deleteOne(obj, req.body).then(result => {
                    console.log(result);
                    if(result.deletedCount > 0)
                        res.json({"msg": "Trainee deleted successfully!!!"});
                    else
                        res.json({"msg": "Unable to delete Trainee!!!"});
                });
            } else {
                res.json({"msg": "Trainee not found!!!"});
            }
        });
    } catch (err) {
        console.log("Error: " + err.message);
        res.send("Error:" + err.message);
    }
}

module.exports = {
    CreateTrainee,
    ReadTrainees,
    ReadSpecificTrainee,
    UpdateTrainee,
    DeleteTrainee
};