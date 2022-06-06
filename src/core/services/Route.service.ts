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


    save(route: Route) {
        if (!route.address.toLocaleLowerCase().includes("brasil")) {
            throw new Error("Address must be brazillian address");
        }
       return this.routeRepository.save(route);
     }
}