import connect from '../db.js';
import aggregation from '../Pipeline/requestPipeline.js'
import filter from '../Pipeline/filters.js';
class BaseRepo {
    constructor(model) {
        this.model = model;
        connect();
    }

    async getAll(props) {
        let subPipeline = filter(props);
        let agg = aggregation(subPipeline);
        let data = await this.model.aggregate(agg).exec();
        return data;
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
}
export default BaseRepo;
