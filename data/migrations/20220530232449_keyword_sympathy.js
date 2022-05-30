/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('keyword_sympathy', table => {
        table.integer('keyword_id_a')
            .references('id')
            .inTable('keyword')
            .notNullable()
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.integer('keyword_id_b')
            .references('id')
            .inTable('keyword')
            .notNullable()
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.primary(['keyword_id_a', 'keyword_id_b'])
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('keyword_sympathy')
};
