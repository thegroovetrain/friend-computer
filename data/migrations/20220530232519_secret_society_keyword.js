/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('secret_society_keyword', table => {
        table.integer('secret_society_id')
            .references('id')
            .inTable('secret_society')
            .notNullable()
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.integer('keyword_id')
            .references('id')
            .inTable('keyword')
            .notNullable()
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.primary(['secret_society_id', 'keyword_id'])
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('secret_society_keyword')
};
