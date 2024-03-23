import { Elysia } from "elysia";
import {} from './api'

const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

app.get('/plant/:genus', ({genus}) => )

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
