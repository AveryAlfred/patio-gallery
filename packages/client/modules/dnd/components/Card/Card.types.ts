import { object, string } from 'zod';

export const CardInfoSchema = object({
  name: string().nonempty(),
  moniker: string(),
  taxa: string(),
});


export const CardSnapSchema = object({
  date: string().nonempty(),
  note: string(),
  photo: string(),
});