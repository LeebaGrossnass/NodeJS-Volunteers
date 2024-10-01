import repo from '../repositories/VolunteerRepo.js';
import BaseService from './BaseService.js';
class VolunteerService extends BaseService {
    constructor(repo) {
        super(repo);
    }
    async add(data){
        try{
            let vol = await this.repo.add(data);
            return vol;
        }
        catch(errors){
            console.log(errors);
            throw new Error("unable to add volunteer.")
        }
    }
}

//module.exports = new StudentService(repo);
export default new VolunteerService(repo);