import Route from "../entities/Route";
import RouteRepository from "../repositories/Route.repository";

export class RouteService {
    routeRepository: RouteRepository
    constructor(routeRepository: RouteRepository) {
        this.routeRepository = routeRepository
    }

    async getRoutes() {
        return  this.routeRepository.getAll();
    }


    async save(route: Route) {
        console.log("save")
        if (route.address.toLocaleLowerCase().includes("brasil")) {
            throw new Error("Address must be brazillian address");
            
        }
       return await this.routeRepository.save(route);
     }
   
    
}