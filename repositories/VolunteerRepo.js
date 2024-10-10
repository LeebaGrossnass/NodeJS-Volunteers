
import VolunteerModel from "../models/VolunteerModel.js";
import BaseRepo from "./BaseRepo.js";

class VolunteerRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }
    async get(id) {
        try {
            
             let data = await this.model.findById(id); 
             return data;  
        }
        catch (errors) {
            throw errors;
        }
    }
    async add(data){
        try{
            let vol = await this.model.create(data);
            return vol._id;
        }
        catch(errors){
            console.log(errors.message);
            throw new Error("The action failed, please check your credentials and try again.");
        }
    }
}
export default new VolunteerRepo(VolunteerModel);
