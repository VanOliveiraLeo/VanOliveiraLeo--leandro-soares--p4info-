/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Produto', function(table) {
        table.increments('id').primary();
        table.double('codigo').notNullable();
        table.string('descricao').notNullable();
        table.double('valor').notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('Produto');
};
