/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('sector', table => {
        table.increments();
        table.string('designation', 3)
            .unique()
            .index()
            .notNullable();
        table.boolean('shuttered')
            .defaultTo(false);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sector');
};
