import { ApiProperty } from '@nestjs/swagger';

export class AccountCreateDto {
  @ApiProperty({
    description: 'The name of user account',
  })
  name: string;
}
