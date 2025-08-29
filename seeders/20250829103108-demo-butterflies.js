'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('butterflies', [
    {
      name: 'Monarch',
      order_name: 'Lepidoptera',
      family: 'Nymphalidae',
      color: 'Orange and black',
      size: 'Medium',
      origin: 'North America',
      location: 'USA, Canada, Mexico',
      habitat: 'Fields and meadows',
      plants: 'Milkweed',
      cycle: 'Egg, larva, pupa, adult',
      img: 'https://example.com/monarch.jpg',
      fenology: 'Migrates south in fall',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Swallowtail',
      order_name: 'Lepidoptera',
      family: 'Papilionidae',
      color: 'Yellow and black',
      size: 'Large',
      origin: 'Worldwide',
      location: 'Various',
      habitat: 'Gardens and forests',
      plants: 'Parsley, dill',
      cycle: 'Egg, larva, pupa, adult',
      img: 'https://example.com/swallowtail.jpg',
      fenology: 'Spring to summer',
      created_at: new Date(),
      updated_at: new Date()
    }
    // ... más registros si quieres
  ], {});
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('butterflies', null, {});
}
