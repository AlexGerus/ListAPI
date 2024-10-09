import { ApiProperty } from '@nestjs/swagger';

export class AccountUpdateDto {
  @ApiProperty({
    description: 'The name of user account',
  })
  name: string;
}
