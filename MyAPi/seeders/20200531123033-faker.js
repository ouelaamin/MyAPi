'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('users', [{
            firstname: 'Admin',
            lastname: 'Istrateur',
            address: '1 place Carlos',
            age: '42',
            username: 'root',
            email: 'root@gmail.com',
            password: 'toor',
            root: 1,
            professionnel: 0,
            client: 0
        }, {
            firstname: 'Prof',
            lastname: 'Essionnel',
            address: '7 rue de la vitrine',
            age: '28',
            username: 'professionnel',
            email: 'prof@essionnel.io',
            password: 'professionnel',
            root: 0,
            professionnel: 1,
            client: 0,
        }, {
            firstname: 'Cli',
            lastname: 'Ent',
            address: '32 allée de la concorde',
            age: '17',
            username: 'invite',
            email: 'invite@moi.fr',
            password: 'invitemoi',
            root: 0,
            professionnel: 0,
            client: 1
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('users', null, {});
    }
};