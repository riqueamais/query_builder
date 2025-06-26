import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("course_modules").insert([
    { name: "Iniciando com CSS", course_id: 1 },
    { name: "O que é Git?", course_id: 2 },
    { name: "Do Javascript para o Typescript", course_id: 3 },
    { name: "Começando com React", course_id: 4 },
    { name: "Fundamentos Node.js", course_id: 5 },
  ]);
}
