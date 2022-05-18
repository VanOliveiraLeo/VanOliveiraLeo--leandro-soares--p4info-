/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('TB_ItemNotaFiscal', table => {
        table.increments('id').primary()
        table.number('sequencial').notNull()
        table.number('quantidade').notNull()
        table.number('valor').notNull()
        table.integer('produto_id').unsigned()
        table.integer('notaFiscal_id').unsigned()
        table.foreign('produto_id').references('TB_Produto.id')
        table.foreign('notaFiscal_id').references('TB_NotaFiscalVenda.id')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('TB_ItemNotaFiscal');
};
