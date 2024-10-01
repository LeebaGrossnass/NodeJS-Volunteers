class BaseService {
    constructor(repo) {
        this.repo = repo;
    }

    async getAll(filters) {        
        return await this.repo.getAll(filters);
      }
    
      async getById(id) {
        console.log(id+"service")
        return await this.repo.get(id);
      }

}

//module.exports = BaseService;
export default BaseService;