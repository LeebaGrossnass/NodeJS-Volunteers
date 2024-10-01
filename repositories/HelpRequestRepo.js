import HelpRequestModel from "../models/HelpRequestModel.js";
import BaseRepo from "./BaseRepo.js";

class HelpRequestRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }

    async update(id, data) {
        try {
            let request = await this.model.findByIdAndUpdate(id, data);
            return request;
        }
        catch (errors) {
            console.log(errors.message);
            throw new Error("An error occurred while trying to update the request's status. Please try again later.");
        }
    }

}
export default new HelpRequestRepo(HelpRequestModel);
