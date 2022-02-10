import { Plant, Items } from './plants.types';

export const plantArray: Plant[] = [
  {
    id: '1',
    info: {
      name: 'Gerald',
      taxa: 'Epipremnum aureum',
      moniker: 'Golden pothos',
      group: 'Patio',
    },
  },
  {
    id: '5',
    info: {
      name: 'Reggie',
      taxa: ' Monstera deliciosa',
      moniker: 'Monsteras',
      group: 'Deck',
    },
  },
  {
    id: '6',
    info: {
      name: 'Tabitha',
      taxa: 'Streptocarpus',
      moniker: 'African violet',
      group: 'Deck',
    },
  },
  {
    id: '2',
    info: {
      name: 'Albert',
      taxa: 'Arabidopsis curbita',
      moniker: 'Red leaf solloum',
      group: 'Patio',
    },
  },
  {
    id: '3',
    info: {
      name: 'Richie',
      taxa: 'Ananas comosus',
      moniker: 'Pineapple',
      group: 'Patio',
    },
  },
  {
    id: '4',
    info: {
      name: 'Gerta',
      taxa: 'Thaumatophyllum',
      moniker: 'Split-leaf',
      group: 'Patio',
    },
  },
];

export const getContainersArray = (items: Plant[]) => {
  const containers: string[] = [];

  items.map(
    (item) =>
      !containers.includes(item.info.group) && containers.push(item.info.group)
  );

  return containers;
};

const getPlantsCache = (plantArray: Plant[]) => {
  const groups = getContainersArray(plantArray);
  const plants: Items = {};

  groups.map((container) => {
    plants[container] = plantArray.filter(
      (plant) => plant.info.group === container
    );
  });

  return { plants, groups };
};
export const { plants, groups } = getPlantsCache(plantArray);
