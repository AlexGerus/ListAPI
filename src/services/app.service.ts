import { Injectable } from '@nestjs/common';
import { AccountDto } from '../dto/user/account-dto';

@Injectable()
export class AppService {
  getHello(): AccountDto {
    return {
      id: 1,
      name: 'Hello World',
    };
  }
}
