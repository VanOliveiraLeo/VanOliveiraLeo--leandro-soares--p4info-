/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cliente').del()
  await knex('cliente').insert([
    {id: 1, codigo: 234.3, cnpjcpf: '000.000.000-00', nome: 'jubnelson', TipoCliente: 'Pessoa_Fisica'},
    {id: 2, codigo: 245.3, cnpjcpf: '111.111.111-11', nome: 'zé', TipoCliente: 'Pessoa_Fisica'}

  ]);
};
