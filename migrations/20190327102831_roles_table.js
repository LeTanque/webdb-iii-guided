// What new changes we need to make
exports.up = function(knex) {
    return knex.schema.createTable('roles', tbl => {
        // primary key. Called ID and make it auto increment. Method for that.
        tbl.increments('id'); // Id by default, or whatever you pass in.

        tbl.string('name', 128).notNullable().unique()

        // tbl.unique('name')

    })
};

// how to undo the changes made in the up function
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('roles')
};

// npx knex init                        // creates config file empty
// npx knex migrate:make roles_table    // makes a table called roles
// npx knex migrate:latest              // creates latest migration
// nox knex migrate:rollback            //
