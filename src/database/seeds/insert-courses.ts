import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("courses").insert([
    { name: "CSS" },
    { name: "Git" },
    { name: "Typescript" },
    { name: "React" },
    { name: "Node.js" },
  ]);
}
