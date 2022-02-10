import wrap from '@vendia/serverless-express'
import { app } from '../app'

export const handler = wrap({app})