exports.up = function(knex) {
    return knex.schema.createTable("car_sales", tbl => {
      tbl.increments();
  
      tbl
        .integer("car_id")
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('cars')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      tbl.string('customer_name', 255).notNullable();
  
      tbl.string("date", 255).notNullable();
  
      tbl.integer('sell_amount').notNullable();
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists('car_sales');
  };
