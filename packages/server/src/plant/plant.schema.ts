import { object, number, string, TypeOf, array } from 'zod';

const payload = {
  body: object({
    plantId: string({
      required_error: 'plantId is required',
    }),
    info: object({
      name: string(),
      moniker: string(),
      taxa: string(),
      group: string(),
    }),
  }),
};

const params = {
  params: object({
    plantId: string({
      required_error: 'plantId is required',
    }),
  }),
};

export const createPlantSchema = object({
  ...payload,
});
export const getPlantSchema = object({
  ...params,
});

export const getAllPlantSchema = object({
  params: object({
    userId: string({
      required_error: 'userId is required',
    }),
  }),
});

export const updatePlantSchema = object({
  ...payload,
  ...params,
});

export const deletePlantSchema = object({
  ...params,
});

export type CreatePlantInput = TypeOf<typeof createPlantSchema>;
export type UpdatePlantInput = TypeOf<typeof updatePlantSchema>;
export type ReadPlantInput = TypeOf<typeof getPlantSchema>;
export type DeletePlantInput = TypeOf<typeof deletePlantSchema>;
