
import Route from "../core/entities/Route";
import { RouteServiceFactory } from "../factory/RouteRouteServiceFactory.factory";
import { ListRoutesAllFieldUppercaseUseCase } from "./list-routes-all-field-uppercase.use-case";

describe("Shoul routes all field uppercase", () => {
    let routeService = RouteServiceFactory.create();

    it("When there is no routes return empty array", async () => {
        const useCase = new ListRoutesAllFieldUppercaseUseCase(routeService);
        const result = await useCase.execute();
        expect(result).toEqual([]);
    });
  
    it("When there is route return all fields uppercase", async () => {
        const useCase = new ListRoutesAllFieldUppercaseUseCase(routeService);
        const route = new Route("name", "address");
        routeService.save(route);
        const result = await useCase.execute();
        expect(result).toEqual([{
            name: "NAME",
            address: "ADDRESS"
        }]);
    });
  });
  