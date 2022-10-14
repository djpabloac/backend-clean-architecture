import { UserEntity } from "../../../domain/userEntity";

export const USERS_MOCK: UserEntity[] = [
  {
    email : 'pepito@mock.com',
    name  : 'Pepe Perez',
    photo : '',
    status: 'active',
    uuid  : 'aaaaaaaaaaaa'
  },
  {
    email : 'gabe@mock.com',
    name  : 'Gabo Aldave',
    photo : '',
    status: 'active',
    uuid  : 'bbbbbbbbbbbb'
  }
]