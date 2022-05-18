/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
    return knex.schema.createTable('NotaFiscalVenda', function(table) {
        table.increments('id').primary();
        table.double('codigo').notNullable();
        table.string('data').notNullable();
        table.double('valorNota').notNullable();
        table.integer('cliente').references('id').inTable('cliente');
        
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('NotaFiscalVenda');
};
