export default {
  port: 1337,
  origin: 'http://localhost:3000',
  db: {
    table: 'patio',
  },
  auth: {
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
    accessTokenPrivateKey: ``,
    accessTokenPublicKey: ``,
    refreshTokenPrivateKey: ``,
    refreshTokenPublicKey: ``,
  },
};
