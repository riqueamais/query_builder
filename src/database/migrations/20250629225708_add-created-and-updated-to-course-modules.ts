import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("course_modules", (table) => {
    table.timestamp("created_at", { useTz: false });
    table.timestamp("updated_at", { useTz: false });
  });

  await knex("course_modules").update({
    created_at: knex.fn.now(),
    updated_at: knex.fn.now(),
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("course_modules", (table) => {
    table.dropColumn("created_at");
    table.dropColumn("updated_at");
  });
}
