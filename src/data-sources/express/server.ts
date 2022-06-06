import express, { Request, Response, json } from "express";
import cors from "cors";

import { SaveRouteUseCase } from "../../use-cases/save-route.use-case";
import { RouteServiceFactory } from "../../factory/RouteRouteServiceFactory.factory";
import { ListRoutesAllFieldUppercaseUseCase } from "../../use-cases/list-routes-all-field-uppercase.use-case";
import Route from "../../core/entities/Route";

const routeService = RouteServiceFactory.create();

const app = express();

app.use(cors());

app.use(json());

app.post("/api/v1/routes", async (req: Request, res: Response) => {
  let route;
  try {
    route = new Route(req.body.name, req.body.address);
  } catch (error) {
    res.status(400).send((error as Error).message);
    return;
  }
  try {
    const saveRouteUseCase = new SaveRouteUseCase(routeService);
    await saveRouteUseCase.execute(route);
  } catch (error) {
    res.status(500).send((error as Error).message);
    return;
  }
});

app.get("/api/v1/routes", async (req: Request, res: Response) => {
  try {
    const listRoutesUppercase = new ListRoutesAllFieldUppercaseUseCase(
      routeService
    );
    const routes = await listRoutesUppercase.execute();
    res.send(routes);
    return;
  } catch (error) {
    res.status(500).send((error as Error).message);
    return;
  }
});

app.listen(8080, () => console.log("Listing Microservice is UP"));
