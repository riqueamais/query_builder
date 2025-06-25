import express, { Request, Response } from "express";
import { knex } from "./database/knex";

const PORT = 3333;

const app = express();
app.use(express.json());

app.post("/courses", async (req: Request, res: Response) => {
  const { name } = req.body;

  await knex("courses").insert({ name });

  // await knex.raw("INSERT INTO courses (name) VALUES (?)", [name]);

  res.status(201).json();
});

app.get("/courses", async (req: Request, res: Response) => {
  const courses = await knex("courses").select();

  res.status(200).json(courses);
});

app.put("/courses/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  await knex("courses").update({ name }).where({ id });

  res.status(200).json();
});

app.delete("/courses/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  await knex("courses").delete().where({ id });

  res.status(200).json();
});

app.listen(PORT, () => console.log(`Servidor is running on ${PORT}`));
