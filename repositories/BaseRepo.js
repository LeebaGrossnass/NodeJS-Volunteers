import connect from '../db.js';
import aggregation from '../Pipeline/requestPipeline.js'
import filter from '../Pipeline/filters.js';
class BaseRepo {
    constructor(model) {
        this.model = model;
        //autoBind(this);
        connect();
    }

    async getAll(props) {
        let subPipeline = filter(props);
        let agg = aggregation(subPipeline);
        let data = await this.model.aggregate(agg).exec();
        //let data = await this.model.find({}).exec();
        console.log(data);
        return data;
    }


    async get(id) {
        try {

            // let agg = aggregation()
            // let data2 = await this.model.find({}).exec();
            // console.log("data2" + data2); 
            // let data = await this.model.aggregate(agg).exec(); 
            
             let data = await this.model.findById(id); 
          
             console.log(data+"111111111111111111111111");
             return data;  
        }

        catch (errors) {
            throw errors;
        }
    }

}

//module.exports = BaseRepo;
export default BaseRepo;