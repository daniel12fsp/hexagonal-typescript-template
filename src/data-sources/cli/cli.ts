import Route from "../../core/entities/Route";
import { RouteServiceFactory } from "../../factory/RouteRouteServiceFactory.factory";
import { ListRoutesAllFieldUppercaseUseCase } from "../../use-cases/list-routes-all-field-uppercase.use-case";
import { SaveRouteUseCase } from "../../use-cases/save-route.use-case";

const routeService = RouteServiceFactory.create();

async function listRoutesUppercase() {
  try {
    const listRoutesUppercase =  new ListRoutesAllFieldUppercaseUseCase(routeService)
    const routes = await listRoutesUppercase.execute();
    console.log(routes);
  } catch (error ) {
    console.log("Internal error" + (error as Error).message);
    return;
  }
}

async function createRoute(name: string, address: string) {
    let route;
    try {
        route = new Route(name, address);
      } catch (error) {
        console.log("Can't create route\n" + (error as Error).message);
        return;
      }
      try {
        const saveRouteUseCase=  new SaveRouteUseCase(routeService)
        await saveRouteUseCase.execute(route);
        console.log("Route created");
      } catch (error ) {
        console.log("Can't save route\n"+ (error as Error).message);
      }
}

function handleRoute(verb: string, params: string[]){
    switch (verb) {
        case 'create':
            const [name, address] = params;
            return createRoute(name, address);
    
        case 'list-uppercase':
          return listRoutesUppercase();
  
    }
}

function main(entity: string, verb:string, params: string[]) {
  
  
  switch (entity) {
    case "route":
      
      return handleRoute(verb, params);
      
      default:
        console.log("Error: entity not found");
        break;
      }
    }

    const [entity, verb, ...params] = process.argv.slice(2)

    main(entity, verb, params)