
exports.up = function (knex) {
    return knex.schema
        .createTable('EventPlanners', table => {
            table.increments('id');
            table.integer('phoneNumber', 20);
            table.varchar('username').notNullable();
            table.string('email', 128).unique().notNullable();
            table.varchar('location');
            table.timestamps('created_at');
        })
        .createTable('Events', table => {
            table.increments('id');
            table.varchar('eventName').notNullable();
            table.integer('event_id', 5).unsigned().notNullable()
                .references('id').inTable('EventPlanners').onDelete('CASCADE').onUpdate('CASCADE');
        })
        .createTable('Tables', table => {
            table.increments('id');
            table.integer("table", 5);
            table.integer('eventTable_id', 5).unsigned().notNullable()
                .references('id').inTable('Events').onDelete('CASCADE').onUpdate('CASCADE');
        })
        .createTable('FoodList', table => {
            table.increments('id');
            table.string("foodName", 128);
            table.integer('eventFood_id', 5).unsigned().notNullable()
                .references('id').inTable('Events').onDelete('CASCADE').onUpdate('CASCADE');
        })
        .createTable('DrinkList', table => {
            table.increments('id');
            table.string("foodName", 128);
            table.integer('eventDrink_id', 5).unsigned().notNullable()
                .references('id').inTable('Events').onDelete('CASCADE').onUpdate('CASCADE');
        })
        .createTable('GuestList', table => {
            table.increments('id');
            table.string('guestName').notNullable();
            table.integer('totalInvitedPersons');
            table.integer('totalNumberOfTables');
            table.integer('guestEvent_id', 5).unsigned().notNullable()
                .references('id').inTable('Events').onDelete('CASCADE').onUpdate('CASCADE');
            table.integer('guestTable_id', 5).unsigned().notNullable()
                .references('id').inTable('Tables').onDelete('CASCADE').onUpdate('CASCADE');
            table.integer('guestFood', 5).unsigned().notNullable()
                .references('id').inTable('FoodList').onDelete('CASCADE').onUpdate('CASCADE');
            table.integer('guestDrink', 5).unsigned().notNullable()
                .references('id').inTable('DrinkList').onDelete('CASCADE').onUpdate('CASCADE');
        })
        .createTable('NumberPerGuest', table => {
            table.increments('id');
            table.integer("invitedPersons");
            table.integer('numberPerGuest_id', 5).unsigned().notNullable()
                .references('id').inTable('GuestList').onDelete('CASCADE').onUpdate('CASCADE');
        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('NumberPerGuest')
        .dropTableIfExists('GuestList')
        .dropTableIfExists('DrinkList')
        .dropTableIfExists('FoodList')
        .dropTableIfExists('Tables')
        .dropTableIfExists('Events')
        .dropTableIfExists('EventPlanners')
};