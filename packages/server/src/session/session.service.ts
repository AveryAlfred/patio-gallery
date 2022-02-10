import { signJwt } from '../utils/jwt';

export const createSession = async ({ userId }: { userId: string }) => {};

export const findSessionById = async (id: string) => {};

export const signRefreshToken = async ({ userId }: { userId: string }) => {};

export const signAccessToken = (user) => {};
