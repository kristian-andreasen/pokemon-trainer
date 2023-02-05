import { Injectable } from '@angular/core';
import { Pokemon } from 'src/models/pokemon.model';
import { User } from 'src/models/user.model';
import { StorageUtil } from 'src/utils/storage.utils';
import { StorageKeys } from '../enums/storage-keys.enum';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //User or undefined
  private _user?: User;

  get user(): User | undefined {
    return this._user;
  }

  set user(user: User | undefined) {
    StorageUtil.storageSave<User>(StorageKeys.User, user!);
    this._user = user;
  }

  constructor() {
    this._user = StorageUtil.storageRead<User>(StorageKeys.User);
  }
}
