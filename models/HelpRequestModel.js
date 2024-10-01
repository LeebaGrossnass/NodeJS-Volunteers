import mongoose from "mongoose";

const Schema = mongoose.Schema;

const HelpRequestSchema = new Schema({
    ProblemType: Number,
    ProblemDescription: String,
    PhoneNumber: String,
    Status: Number,
    Urgency: Number,
    VolunteerId: String,
    ID: Number
},
{versionKey:false});


// Compile model from schema
const HelpRequestModel = mongoose.model("HelpRequestModel", HelpRequestSchema,"HelpRequest");
export default HelpRequestModel;