import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AxiosResponse } from 'axios';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/me')
  getMe(): Promise<AxiosResponse> {
    return this.userService.getMe();
  }

  @Get('/:userId')
  getUserById(
    @Param('userId') userId: string,
  ): Promise<AxiosResponse> {
    return this.userService.getUserById(userId);
  }

  @Get('/:userId/media')
  getMediaByUserId(
    @Param('userId') userId: string,
  ): Promise<AxiosResponse> {
    return this.userService.getMediaByUserId(userId);
  }
}
