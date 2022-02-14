import express from 'express';
import { requireUser } from '../utils/middleware/requireUser';
import { validateResource } from '../utils/middleware/validateResource';
import {
  createPlantHandler,
  deletePlantHandler,
  getAllPlantHandler,
  getPlantHandler,
  updatePlantHandler,
} from './plant.controller';
import {
  createPlantSchema,
  deletePlantSchema,
  getAllPlantSchema,
  getPlantSchema,
  updatePlantSchema,
} from './plant.schema';

export const plantRouter = express.Router();

// Create plant
plantRouter.post(
  '/api/plant',
  [requireUser, validateResource(createPlantSchema)],
  createPlantHandler
);

// Get plant
plantRouter.get(
  '/api/plant/:id',
  [requireUser, validateResource(getPlantSchema)],
  getPlantHandler
);

// Get all plants
plantRouter.post(
  '/api/plant',
  [requireUser, validateResource(getAllPlantSchema)],
  getAllPlantHandler
);

// Update plant
plantRouter.post(
  '/api/plant',
  [requireUser, validateResource(updatePlantSchema)],
  updatePlantHandler
);

// Remove plant
plantRouter.post(
  '/api/plant',
  [requireUser, validateResource(deletePlantSchema)],
  deletePlantHandler
);
