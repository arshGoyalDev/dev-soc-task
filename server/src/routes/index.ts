import { Router } from "express";

import { getName } from "@/controllers";

const routes = Router();

routes.get('/name', getName);

export { routes };