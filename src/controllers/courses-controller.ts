import { Request, Response } from "express";
import { knex } from "../database/knex";

class CoursesController {
  async index(req: Request, res: Response) {
    const courses = await knex("courses").select();

    res.status(200).json(courses);
  }

  async indexById(req: Request, res: Response) {
    const { id } = req.params;

    const course = await knex("courses").select().where({ id });

    res.json(course);
  }

  async create(req: Request, res: Response) {
    const { name } = req.body;

    await knex("courses").insert({ name });

    res.status(201).json();
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;

    await knex("courses").update({ name }).where({ id });

    res.status(200).json();
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params;

    await knex("courses").delete().where({ id });

    res.status(200).json();
  }
}

export { CoursesController };
