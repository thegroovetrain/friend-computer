/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('clone_secret_society', table => {
        table.integer('clone_id')
            .references('id')
            .inTable('clone')
            .notNullable()
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.integer('secret_society_id')
            .references('id')
            .inTable('secret_society')
            .notNullable()
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.primary(['clone_id', 'secret_society_id'])
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('clone_secret_society');
};
