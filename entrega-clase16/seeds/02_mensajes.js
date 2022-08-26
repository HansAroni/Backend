/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('mensajes').del()
  await knex('mensajes').insert([
    {id: 1, nombre: 'agustin', mensaje:"hola"},
    {id: 2,  nombre: 'julian', mensaje:"chau"}
  ]);
};
