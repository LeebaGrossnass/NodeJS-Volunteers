import BaseController from './BaseController.js';
import service from '../services/HelpRequestService.js';

class HelpRequestsController extends BaseController {
    constructor(service) {
        super(service);        
    }
    async update(req, res, next) {
        const id = req.params.id;
        const userId = req.query;
        const data =  req.body;
            data.VolunteerId = userId.Id;
            data.Status = 2;         
        try {
            const response = await this.service.update(id, data);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}
export default new HelpRequestsController(service);