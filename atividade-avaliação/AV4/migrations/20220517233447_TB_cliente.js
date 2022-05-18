/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_Clientes', table => {
        table.increments('id').primary()
        table.number('codigo').notNull()
        table.string('cpfcnpj').notNull().unique()
        table.string('nome').notNull()
        table.enum('TipoCliente', ['PESSOA_FISICA', 'PESSOA_JURIDICA']).defaultTo('PESSOA_FISICA')
    })
}


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('TB_Clientes');
};
// finalizado