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
    email   : 'gabe@mock.com',
    name    : 'Gabo Aldave',
    password: '5eaf7ab7-3782-4ec1-8b68-87da25292b71',
    photo   : '',
    status  : UserStatus.Active,
    uuid    : '5eaf7ab7-3782-4ec1-8b68-87da25292b23'
  }
]