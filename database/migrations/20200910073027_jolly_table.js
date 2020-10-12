
exports.up = function (knex) {
    return knex.schema
        .createTable('EventPlanners', table => {
            table.increments('id');
            table.integer('phoneNumber', 20);
            table.string('username').notNullable();
            table.string('email', 128).unique().notNullable();
            table.string('password', 128).notNullable();
            table.string('location');
            table.timestamps('created_at');
        })
        .createTable('Events', table => {
            table.increments('id');
            table.string('eventName').notNullable();
        })
        .createTable('EventPlannerLink', table => {
            table.increments('id');
            table.integer('event_id', 5).unsigned().notNullable()
                .references('id').inTable('Events').onDelete('CASCADE').onUpdate('CASCADE');
            table.integer('eventPlanner_id', 5).unsigned().notNullable()
                .references('id').inTable('EventPlanners').onDelete('CASCADE').onUpdate('CASCADE');
        })
        .createTable('Tables', table => {
            table.increments('id');
            table.string("table", 5);
        })
        .createTable('EventTableLink', table => {
            table.increments('id');
            table.integer('event_id', 5).unsigned().notNullable()
                .references('id').inTable('Events').onDelete('CASCADE').onUpdate('CASCADE');
            table.integer('eventTable_id', 5).unsigned().notNullable()
                .references('id').inTable('Tables').onDelete('CASCADE').onUpdate('CASCADE');
        })
        .createTable('FoodList', table => {
            table.increments('id');
            table.string("foodName", 128);
        })
        .createTable('EventFoodLink', table => {
            table.increments('id');
            table.integer('event_id', 5).unsigned().notNullable()
                .references('id').inTable('Events').onDelete('CASCADE').onUpdate('CASCADE');
            table.integer('eventFood_id', 5).unsigned().notNullable()
                .references('id').inTable('FoodList').onDelete('CASCADE').onUpdate('CASCADE');
        })
        .createTable('DrinkList', table => {
            table.increments('id');
            table.string("drinkName", 128);
        })
        .createTable('EventDrinkLink', table => {
            table.increments('id');
            table.integer('event_id', 5).unsigned().notNullable()
                .references('id').inTable('Events').onDelete('CASCADE').onUpdate('CASCADE');
            table.integer('eventDrink_id', 5).unsigned().notNullable()
                .references('id').inTable('DrinkList').onDelete('CASCADE').onUpdate('CASCADE');
        })
        .createTable('GuestList', table => {
            table.increments('id');
            table.integer('eventGuest_id', 5).unsigned().notNullable()
                .references('id').inTable('Events').onDelete('CASCADE').onUpdate('CASCADE');
            table.string('guestName');
            table.integer('invitedNumber');
        })
        .createTable('GuestLink', table => {
            table.increments('id');
            table.integer('guest_id', 5).unsigned().notNullable()
                .references('id').inTable('GuestList').onDelete('CASCADE').onUpdate('CASCADE');
            table.integer('guestEvent_id', 5).unsigned().notNullable()
                .references('id').inTable('Events').onDelete('CASCADE').onUpdate('CASCADE');
            table.integer('guestTable_id', 5).unsigned().notNullable()
                .references('id').inTable('Tables').onDelete('CASCADE').onUpdate('CASCADE');
            table.integer('guestFood', 5).unsigned().notNullable()
                .references('id').inTable('FoodList').onDelete('CASCADE').onUpdate('CASCADE');
            table.integer('guestDrink', 5).unsigned().notNullable()
                .references('id').inTable('DrinkList').onDelete('CASCADE').onUpdate('CASCADE');
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('GuestLink')
        .dropTableIfExists('GuestList')
        .dropTableIfExists('EventDrinkLink')
        .dropTableIfExists('DrinkList')
        .dropTableIfExists('EventFoodLink')
        .dropTableIfExists('FoodList')
        .dropTableIfExists('EventTableLink')
        .dropTableIfExists('Tables')
        .dropTableIfExists('EventPlannerLink')
        .dropTableIfExists('Events')
        .dropTableIfExists('EventPlanners')
};
