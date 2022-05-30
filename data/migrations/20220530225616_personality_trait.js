/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('personality_trait', table => {
        table.increments();
        table.string('positive')
            .unique()
            .notNullable();
        table.string('negative')
            .unique()
            .notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('personality_trait')
};
