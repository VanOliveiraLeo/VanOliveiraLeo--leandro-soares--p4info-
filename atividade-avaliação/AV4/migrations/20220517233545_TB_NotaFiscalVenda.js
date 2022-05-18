/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('TB_NotaFiscalVenda', table => {
        table.increments('id').primary()
        table.number('codigo').notNull()
        table.string('data').notNull()
        table.number('valorNota').notNull()
        table.integer('cliente_id').unsigned()
        table.integer('intems_id').unsigned()
        table.foreign('cliente_id').references('TB_Clientes.id')
        table.foreign('intems_id').references('TB_IntemNotaFiscal.id')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('TB_NotaFiscalVenda');
};
