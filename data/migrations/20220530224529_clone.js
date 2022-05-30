/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('clone', table => {
        table.increments();
        table.string('name', 8)
            .notNullable();
        table.string('security_clearance', 1)
        table.integer('home_sector_id')
            .unsigned()
            .references('id')
            .inTable('sector')
            .onDelete('SET NULL')
            .onUpdate('CASCADE');
        table.integer('clone_number')
            .notNullable()
            .unsigned()
            .defaultTo(1);
        table.integer('max_clones')
            .notNullable()
            .unsigned()
            .defaultTo(6);
        table.string('gender', 32);
        table.integer('treason_stars')
            .defaultTo(0)
            .unsigned()
            .notNullable();
        table.integer('xp_points')
            .defaultTo(0)
            .unsigned()
            .notNullable();
        table.integer('violence')
            .unsigned()
            .notNullable();
        table.integer('brains')
            .unsigned()
            .notNullable();
        table.integer('chutzpah')
            .unsigned()
            .notNullable();
        table.integer('mechanics')
            .unsigned()
            .notNullable();
        table.integer('moxie')
            .unsigned()
            .notNullable()
            .defaultTo(8);
        table.integer('memory')
            .unsigned()
            .notNullable()
            .defaultTo(16);
        table.integer('mutant_power_id')
            .references('id')
            .inTable('mutant_power');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('clone')
};
