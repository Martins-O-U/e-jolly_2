exports.up = function (knex) {
    return knex.schema.createTable('EventPlannerList', table => {
        table.increments('id');
        table.string('Name', 150).notNullable().unique();
        table.string('Email', 150).notNullable();
        table.integer('PhoneNumber', 150);
    })

        .createTable('EventList', table => {
            table.increments('id');
            table.string('EventName', 200).notNullable()
            table.integer('EventList_Id').unsigned().notNullable().references('id')
                .inTable('EventPlannerList').onUpdate('CASCADE').onDelete('CASCADE');
        })

        .createTable('InvitedGuestList', table => {
            table.increments('id');
            table.string('Name', 150).notNullable()
        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('EventPlannerList')
        .dropTableIfExists('EventList')
        .dropTableIfExists('InvitedGuestList')
};