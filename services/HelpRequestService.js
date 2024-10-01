import repo from '../repositories/HelpRequestRepo.js';
import BaseService from './BaseService.js';
class HelpRequestService extends BaseService {
    constructor(repo) {
        super(repo);
    }
    async update(id, data){
        try{
            const d = await this.repo.update(id,data);
            return d;
        }
        catch(errors){
            console.log(errors);
            throw new Error("unable to update request.");
        }
    }
}
export default new HelpRequestService(repo);