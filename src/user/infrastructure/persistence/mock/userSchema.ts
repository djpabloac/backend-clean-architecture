import UserEntity, { UserStatus } from '../../../domain/userEntity'

export const users: UserEntity[] = [
  {
    email   : 'pepito@mock.com',
    name    : 'Pepe Perez',
    password: '5eaf7ab7-3782-4ec1-8b68-87da25292b71',
    photo   : '',
    status  : UserStatus.Active,
    uuid    : '5eaf7ab7-3782-4ec1-8b68-87da25292b71'
  },
  {
    email   : 'ariadne1@mock.com',
    name    : 'Ariadne Arteaga',
    password: '$2b$12$SXZeNttC3pt/XSuDFl9dM.jhbnDSq5e7Kp/xBD57dR4ddHIfCc12i',
    photo   : '',
    status  : UserStatus.Active,
    uuid    : '10d55272-b85b-4100-88c7-1d5e80ce4472'
  }
]