import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserService } from '../../services/user/user.service';
import { AccountDto } from '../../dto/user/account-dto';
import { AccountCreateDto } from '../../dto/user/account-create-dto';
import { AccountUpdateDto } from '../../dto/user/account-update-dto';

@ApiTags('Users')
@Controller('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  create(@Body() createDto: AccountCreateDto): void {
    this.userService.create(createDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The records have been successfully returned.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  findAll(@Query() query: { name: string }): AccountDto[] {
    return this.userService.getAll(query);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully returned.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  public findOne(@Param('id') id: number): AccountDto {
    return this.userService.getOne(id);
  }

  @Put(':id')
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  update(@Param('id') id: number, @Body() updateDto: AccountUpdateDto): void {
    this.userService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 204,
    description: 'The record has been successfully deleted.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  remove(@Param('id') id: number): void {
    this.userService.delete(id);
  }
}
