'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('butterflies', [
      {
        name: 'Mariposa monarca',
        order_name: 'Lepidoptera',
        family: 'Danaidae',
        color: 'Naranja con negro',
        size: '10 cm',
        origin: 'México',
        location: 'América del Norte',
        habitat: 'Bosques de oyamel',
        plants: 'Asclepias',
        cycle: 'Huevo, oruga, crisálida y adulto',
        img: 'https://static.nationalgeographic.es/files/styles/image_3200/public/2273.600x450.jpg?w=1600',
        fenology: 'Migración en otoño, reproducción en primavera y verano',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Morpho azul',
        order_name: 'Lepidoptera',
        family: 'Nymphalidae',
        color: 'Azul metálico',
        size: '15 cm',
        origin: 'Brasil',
        location: 'Selvas del Amazonas',
        habitat: 'Bosques tropicales',
        plants: 'Frutas fermentadas, savia de árboles',
        cycle: 'Huevo, larva, pupa y adulto',
        img: 'https://palmitospark.es/wp-content/uploads/2023/04/butterfly-g31bc30040_1280.jpg',
        fenology: 'Activa todo el año',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Heliconius charithonia',
        order_name: 'Lepidoptera',
        family: 'Nymphalidae',
        color: 'Negro con rayas amarillas',
        size: '7.5 cm',
        origin: 'América Central',
        location: 'Desde México hasta Florida',
        habitat: 'Bosques húmedos y jardines',
        plants: 'Passiflora',
        cycle: 'Completo en 4 semanas',
        img: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Heliconius_charithonia%2C_Mariposario_de_Icod_de_los_Vinos%2C_Tenerife%2C_Espa%C3%B1a%2C_2012-12-13%2C_DD_04.jpg',
        fenology: 'Todo el año en climas cálidos',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Agraulis vanillae',
        order_name: 'Lepidoptera',
        family: 'Nymphalidae',
        color: 'Anaranjado brillante con manchas negras',
        size: '7 cm',
        origin: 'Sur de EE. UU.',
        location: 'América Central y del Sur',
        habitat: 'Zonas abiertas, jardines',
        plants: 'Passiflora',
        cycle: '30 días',
        img: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Agraulis_vanillae_butterfly_from_above.JPG',
        fenology: 'Primavera a otoño',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Danaus gilippus',
        order_name: 'Lepidoptera',
        family: 'Danaidae',
        color: 'Café rojizo con bordes negros',
        size: '9 cm',
        origin: 'América del Sur',
        location: 'Tropical y subtropical americano',
        habitat: 'Sabana y matorral',
        plants: 'Asclepias',
        cycle: 'Huevo, larva, crisálida, adulto',
        img: 'https://jardin.inecol.mx/images/MARIPOSA_MES/Danaus_gilippus_thersippus.jpg',
        fenology: 'Todo el año en zonas cálidas',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Diaethria clymena',
        order_name: 'Lepidoptera',
        family: 'Nymphalidae',
        color: 'Rojo, azul y blanco, con patrón 88',
        size: '4 cm',
        origin: 'Colombia',
        location: 'América del Sur',
        habitat: 'Bosques lluviosos bajos',
        plants: 'Frutas, savia',
        cycle: 'Larva especializada en Ulmaceae',
        img: 'https://inaturalist-open-data.s3.amazonaws.com/photos/347373297/original.jpeg',
        fenology: 'Activa todo el año',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('butterflies', null, {});
  }
};
