/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('clone_personality_trait', table => {
        table.integer('clone_id')
            .references('id')
            .inTable('clone')
            .notNullable()
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.integer('personality_trait_id')
            .references('id')
            .inTable('personality_trait')
            .notNullable()
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.boolean('negative')
            .defaultTo(false)
            .notNullable();
        table.primary(['clone_id', 'personality_trait_id']);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('clone_personality_trait')
};
