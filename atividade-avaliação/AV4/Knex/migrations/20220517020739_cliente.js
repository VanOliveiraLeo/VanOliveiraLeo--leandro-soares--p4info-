/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex, Promise) {
    return knex.schema.createTable('cliente', function(table) {
        table.increments('id').primary();
        table.double('codigo').notNullable();
        table.string('cnpjcpf').notNullable;
        table.string('nome').notNullable().unique();
        table.enum('TipoCliente', ['Pessoa_Fisica', 'Pessoa_Juridica']).defaultTo('Pessoa_Fisica');
        
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('cliente');
};
