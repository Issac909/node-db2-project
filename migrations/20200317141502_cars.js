exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();

    tbl
      .integer("VIN")
      .notNullable()
      .unique()
      .index();

    tbl.string("make", 255).notNullable().index();

    tbl.string("model", 255).notNullable().index();

    tbl.integer('mileage');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
