import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../services/app.service';
import { AccountDto } from '../../dto/user/account-dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('app')
@Controller('main')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully returned.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getHello(): AccountDto {
    return this.appService.getHello();
  }
}
