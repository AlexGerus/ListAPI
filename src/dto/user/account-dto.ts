import { ApiProperty } from '@nestjs/swagger';

export class AccountDto {
  @ApiProperty({
    description: 'The id of user account',
  })
  id: number;

  @ApiProperty({
    description: 'The name of user account',
  })
  name: string;
}
