export const Application = {
  bcrypt: {
    salt  : 8,
    secret: process.env.BCRYPT_SECRET ?? ''
  },
  connection: {
    mock: {
      name: 'Mock'
    },
    mongodb: {
      name: process.env.MONGO_NAME ?? '',
      uri : process.env.MONGO_CONNECTION ?? ''
    }
  },
  port: process.env.PORT ?? '3001'
}