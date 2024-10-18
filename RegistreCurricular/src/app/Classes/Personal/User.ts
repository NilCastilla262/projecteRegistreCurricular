export class User {
  private _UUIdUser: string;
  private _UserType: number;
  private _UserName: string;
  private _Password: string;
  private _email: string;

  constructor() {
    this._UUIdUser = '';
    this._UserType = 0;
    this._UserName = '';
    this._Password = '';
    this._email = '';
  }
}
