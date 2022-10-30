export const Application = {
  bcrypt: {
    salt: parseInt(process.env.BCRYPT_SALT ?? '10')
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
  jwt: {
    expiresIn: process.env.JWT_EXPIRES_IN ?? '15m',
    secret   : process.env.JWT_SECRET ?? ''
  },
  port: process.env.PORT ?? '3001'
}