const prisma = require('../src/prismaClient');

(async () => {
  try {
    // ****** family ******
    await Promise.all(
      [
        {
          firstname: 'Albin',
          lastname: 'Marchand',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          password: null,
          kingdomRole: '',
          imageName: 'albin.jpg',
        },
        {
          firstname: 'Alexandre',
          lastname: 'Dragnicourt',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          password: null,
          kingdomRole: '',
          imageName: 'alexandre.jpg',
        },
        {
          firstname: 'Anthony',
          lastname: 'Vergès',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          password: null,
          kingdomRole: '',
          imageName: 'anthony.jpg',
        },
        {
          firstname: 'David',
          lastname: 'Mosca',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          password: null,
          kingdomRole: '',
          imageName: 'david.jpg',
        },
        {
          firstname: 'Diane',
          lastname: 'Casanova',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          password: null,
          kingdomRole: '',
          imageName: 'diane.jpg',
        },
        {
          firstname: 'Laura',
          lastname: 'Gluton',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          password: null,
          kingdomRole: '',
          imageName: 'laura.jpg',
        },
        {
          firstname: 'Linida',
          lastname: 'Resseguier',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          password: null,
          kingdomRole: '',
          imageName: 'linda.jpg',
        },
        {
          firstname: 'Malo',
          lastname: 'Pivert',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          password: null,
          kingdomRole: '',
          imageName: 'malo.jpg',
        },
        {
          firstname: 'Nelly',
          lastname: 'Chieng',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          password: null,
          kingdomRole: '',
          imageName: 'nelly.jpg',
        },
        {
          firstname: 'Raphael',
          lastname: 'Levevre',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          password: null,
          kingdomRole: '',
          imageName: 'raphael.jpg',
        },
        {
          firstname: 'Renaud',
          lastname: 'Fournet',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          password: null,
          kingdomRole: '',
          imageName: 'renaud.jpg',
        },
        {
          firstname: 'Romain',
          lastname: 'Zucconi',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          password: null,
          kingdomRole: '',
          imageName: 'romain.jpg',
        },
        {
          firstname: 'Samuel',
          lastname: 'De Zaldua',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          password: null,
          kingdomRole: '',
          imageName: 'samuel.jpg',
        },
        {
          firstname: 'Théodore',
          lastname: 'Lefrançois',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          password: null,
          kingdomRole: '',
          imageName: 'theodore.jpg',
        },
        {
          firstname: 'Victor',
          lastname: 'Salomon',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          password: null,
          kingdomRole: '',
          imageName: 'victor.jpg',
        },
        {
          firstname: 'Yoan',
          lastname: 'Marcos',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          password: null,
          kingdomRole: '',
          imageName: 'yoann.jpg',
        },
      ].map((elmt) => {
        return prisma.create({ data: elmt });
      })
    );

    // ****** admin ******
    await Promise.all(
      ['Prospector', 'Commercial'].map((elmt) => {
        return prisma.admin.create({ data: { role: elmt } });
      })
    );

    // ****** realEstate ******
    await Promise.all(
      [
        {
          name: 'Versailles',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          isVisitable: true,
          password: null,
          latitude: 45.748112,
          longitude: 4.860201,
          imageName: 'versailles.jpg',
        },
        {
          name: 'Chenonceau',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          isVisitable: true,
          password: null,
          latitude: 47.32487,
          longitude: 1.070301,
          imageName: 'chenonceau.jpg',
        },
        {
          name: 'Azay-le-Rideau',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          isVisitable: true,
          password: null,
          latitude: 47.2596,
          longitude: 0.4666,
          imageName: 'azay-le-rideau.jpg',
        },
        {
          name: 'Chambord',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          isVisitable: true,
          password: null,
          latitude: 47.616126,
          longitude: 1.517218,
          imageName: 'chambord.jpg',
        },
        {
          name: 'Amboise',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          isVisitable: true,
          password: null,
          latitude: 47.407831702,
          longitude: 0.984829394,
          imageName: 'versailles.jpg',
        },
      ].map((elmt) => {
        return prisma.admin.create({ data: { role: elmt } });
      })
    );
  } catch (error) {
    throw new Error(error);
  }
})()
  .then(() => {
    console.log('ALL SEEDS FOR PROD DONE !');
  })
  .catch((e) => console.error(e))
  .finally(() => process.exit());
