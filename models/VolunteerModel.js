// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const VolunteerSchema = new Schema({
    Id: Number,
    FirstName: String,
    LastName: String,
    PhoneNuber: String,
    Expertise: Number
},{versionKey:false});

const VolunteerModel = mongoose.model("VolunteerModel", VolunteerSchema,"Volunteers");
console.log(VolunteerModel);
export default VolunteerModel;