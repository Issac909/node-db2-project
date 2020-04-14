exports.seed = function (knex) {
  // Inserts seed entries
  return knex("table_name").insert([
    { id: 1, VIN: 123456789, make: 'Ford', model: 'Mustang', mileage: 22500 },
    { id: 2, VIN: 843908409, make: 'Honda', model: 'Accord', mileage: 67800 },
    { id: 3, VIN: 672348989, make: 'Hyundai', model: 'Elantra', mileage: 54200 },
    { id: 4, VIN: 487326487, make: 'Acura', model: 'TLX', mileage: 10150 },
    { id: 5, VIN: 297483634, make: 'BMW', model: 'X3', mileage: 70500 },
    { id: 6, VIN: 472348632, make: 'Nissan', model: 'Sentra', mileage: 105667 }
  ]);
};
