import { Request, Response } from 'express';
import { CreatePlantInput, UpdatePlantInput } from './plant.schema';
import {
  createPlant,
  deletePlant,
  findAllPlants,
  findAndUpdatePlant,
  findOnePlant,
} from './plant.service';

export const createPlantHandler = async (
  req: Request<{}, {}, CreatePlantInput['body']>,
  res: Response
) => {
  const userId = res.locals.user._id;

  const body = req.body;

  const plant = await createPlant({ ...body, user: userId });

  return res.send(plant);
};

export const updatePlantHandler = async (
  req: Request<UpdatePlantInput['params']>,
  res: Response
) => {
  const userId = res.locals.user._id;

  const plantId = req.params.plantId;
  const update = req.body;

  const plant = await findOnePlant({ plantId });

  if (!plant) {
    return res.sendStatus(404);
  }

  const updatedPlant = await findAndUpdatePlant({ plantId });

  return res.send(updatedPlant);
};

export const getPlantHandler = async (
  req: Request<UpdatePlantInput['params']>,
  res: Response
) => {
  const plantId = req.params.plantId;
  const plant = await findOnePlant({ plantId });

  if (!plant) {
    return res.sendStatus(404);
  }

  return res.send(plant);
};

export const getAllPlantHandler = async (
  req: Request<UpdatePlantInput['params']>,
  res: Response
) => {
  const userId = res.locals.user._id;

  const plants = await findAllPlants({ userId });

  if (!plants) {
    return res.sendStatus(404);
  }

  return res.send(plants);
};

export const deletePlantHandler = async (
  req: Request<UpdatePlantInput['params']>,
  res: Response
) => {
  const userId = res.locals.user._id;
  const plantId = req.params.plantId;

  const plant = await findOnePlant({ plantId });

  if (!plant) {
    return res.sendStatus(404);
  }

  await deletePlant({ plantId });

  return res.sendStatus(200);
};
