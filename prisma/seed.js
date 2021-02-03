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
          login: 'albmar',
          password: null,
          kingdomRole: '',
          imageName: 'albin.jpeg',
        },
        {
          firstname: 'Alexandre',
          lastname: 'Dragnicourt',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          login: 'aledra',
          password: null,
          kingdomRole: '',
          imageName: 'alexandre.jpeg',
        },
        {
          firstname: 'Anthony',
          lastname: 'Vergès',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          login: 'antver',
          password: null,
          kingdomRole: '',
          imageName: 'anthony.jpeg',
        },
        {
          firstname: 'David',
          lastname: 'Mosca',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          login: 'davmos',
          password: null,
          kingdomRole: '',
          imageName: 'david.jpeg',
        },
        {
          firstname: 'Diane',
          lastname: 'Casanova',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          login: 'diacas',
          password: null,
          kingdomRole: '',
          imageName: 'diane.jpeg',
        },
        {
          firstname: 'Laura',
          lastname: 'Gluton',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          login: 'lauglu',
          password: null,
          kingdomRole: '',
          imageName: 'laura.jpeg',
        },
        {
          firstname: 'Linida',
          lastname: 'Resseguier',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          login: 'linres',
          password: null,
          kingdomRole: '',
          imageName: 'linda.jpeg',
        },
        {
          firstname: 'Malo',
          lastname: 'Pivert',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          login: 'malpiv',
          password: null,
          kingdomRole: '',
          imageName: 'malo.jpeg',
        },
        {
          firstname: 'Nelly',
          lastname: 'Chieng',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          login: 'nelchi',
          password: null,
          kingdomRole: '',
          imageName: 'nelly.jpeg',
        },
        {
          firstname: 'Raphael',
          lastname: 'Levevre',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          login: 'raplev',
          password: null,
          kingdomRole: '',
          imageName: 'raphael.jpeg',
        },
        {
          firstname: 'Renaud',
          lastname: 'Fournet',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          login: 'renfour',
          password: null,
          kingdomRole: '',
          imageName: 'renaud.jpeg',
        },
        {
          firstname: 'Romain',
          lastname: 'Zucconi',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          login: 'romzuc',
          password: null,
          kingdomRole: '',
          imageName: 'romain.jpeg',
        },
        {
          firstname: 'Samuel',
          lastname: 'De Zaldua',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          login: 'samdez',
          password: null,
          kingdomRole: '',
          imageName: 'samuel.jpeg',
        },
        {
          firstname: 'Théodore',
          lastname: 'Lefrançois',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          login: 'thelef',
          password: null,
          kingdomRole: '',
          imageName: 'theodore.jpeg',
        },
        {
          firstname: 'Victor',
          lastname: 'Salomon',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          login: 'vicsal',
          password: null,
          kingdomRole: '',
          imageName: 'victor.jpeg',
        },
        {
          firstname: 'Yoan',
          lastname: 'Marcos',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          login: 'yoamar',
          password: null,
          kingdomRole: '',
          imageName: 'yoann.jpeg',
        },
      ].map((elmt) => {
        return prisma.family.create({ data: elmt });
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
          latitude: 48.80309,
          longitude: 2.08009,
          imageName: 'versailles.jpg',
        },
        {
          name: 'Chenonceau',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
          isActif: true,
          isVisitable: true,
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
          latitude: 47.407831702,
          longitude: 0.984829394,
          imageName: 'amboise.jpg',
        },
      ].map((elmt) => {
        return prisma.realEstate.create({ data: elmt });
      })
    );

    // ****** goldBook ******
    await Promise.all(
      [
        {
          name: 'Jean Valjean',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
        },
        {
          name: 'Jean Valjean',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
        },
        {
          name: 'Jean Valjean',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
        },
        {
          name: 'Jean Valjean',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
        },
        {
          name: 'Jean Valjean',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
        },
        {
          name: 'Jean Valjean',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
        },
        {
          name: 'Jean Valjean',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
        },
        {
          name: 'Jean Valjean',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
        },
        {
          name: 'Jean Valjean',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
        },
        {
          name: 'Jean Valjean',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
        },
        {
          name: 'Jean Valjean',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
        },
        {
          name: 'Jean Valjean',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
        },
        {
          name: 'Jean Valjean',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
        },
        {
          name: 'Jean Valjean',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
        },
        {
          name: 'Jean Valjean',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
        },
        {
          name: 'Jean Valjean',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum arcu sit amet enim hendrerit, vel pulvinar elit molestie. Donec gravida vitae erat ut molestie.',
        },
      ].map((elmt) => {
        return prisma.goldBook.create({ data: elmt });
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
