import { Injectable } from '@nestjs/common';
import { AccountDto } from '../../dto/user/account-dto';
import { AccountCreateDto } from '../../dto/user/account-create-dto';
import { AccountUpdateDto } from '../../dto/user/account-update-dto';

@Injectable()
export class UserService {
  private idCount = 3;
  private users: AccountDto[] = [
    {
      id: 1,
      name: 'A1',
    },
    {
      id: 2,
      name: 'A2',
    },
    {
      id: 3,
      name: 'A3',
    },
  ];

  public getAll(query: { name: string }): AccountDto[] {
    if (query?.name) {
      return this.users.filter((user: AccountDto) => (user.name = query.name));
    }
    return this.users;
  }

  public getOne(id: number): AccountDto {
    return this.users.find((user: AccountDto) => (user.id = id));
  }

  public create(body: AccountCreateDto): void {
    this.idCount += 1;
    const newUser: AccountDto = {
      id: this.idCount,
      name: body.name,
    };
    this.users.push(newUser);
  }

  public update(id: number, body: AccountUpdateDto): void {
    const userIndex: number = this.users.findIndex(
      (user: AccountDto) => (user.id = id),
    );
    if (userIndex !== -1) {
      this.users[userIndex].name = body.name;
    }
  }

  public delete(id: number): void {
    const userIndex: number = this.users.findIndex(
      (user: AccountDto) => (user.id = id),
    );
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
    }
  }
}
