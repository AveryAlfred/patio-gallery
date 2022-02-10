import { Items, PlantInfo } from 'modules/plants/utils/plants.types';
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { plants, groups } from './plantData';
import { nanoid } from 'nanoid';

export const useplants = (
  initialItems: Items = plants,
  initialGroups: string[] = groups
) => {
  const [items, setItems] = useState<Items>(initialItems);
  const [containers, setContainers] = useState<string[]>(initialGroups);

  // Handlers
  const addBlankPlant = (plants: Items, group: string) => {
    plants[group] = [
      ...plants[group],
      {
        id: nanoid(),
        info: { name: '', moniker: '', taxa: '', group: group },
      },
    ];
    return plants;
  };

  const addPlant = (plants: Items, newPlantInfo: PlantInfo) => {
    plants[newPlantInfo.group] = [
      ...plants[newPlantInfo.group],
      { id: nanoid(), info: { ...newPlantInfo } },
    ];
    return plants;
  };

  // const deletePlant = () => {};
  // const updatePlantInfo = () => {};

  // const addGroup = () => {};
  // const deleteContainer = () => {};
  // const updateContainer = () => {};

  // const addPlantEvent = () => {};
  // const deletePlantEvent = () => {};
  // const updatePlantEvent = () => {};

  // Utils
  // const getNextPlantName = () => {};
  // const getNextContainerId = () => {
  //   const containerIds = Object.keys(items);
  //   const lastContainerId = containerIds[containerIds.length - 1];
  //   return String.fromCharCode(lastContainerId.charCodeAt(0) + 1);
  // };

  return {
    items,
    setItems,
    containers,
    setContainers,
    addPlant: (plant: PlantInfo) => setItems((items) => addPlant(items, plant)),
    addNewPlant: (group: string) =>
      setItems((items) => addBlankPlant(items, group)),
  };
};

const PlantContext = React.createContext<ReturnType<typeof useplants> | null>(
  null
);

export const usePlants = () => React.useContext(PlantContext)!;

export const PlantProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <PlantContext.Provider value={useplants()}>
      {children}
    </PlantContext.Provider>
  );
};
