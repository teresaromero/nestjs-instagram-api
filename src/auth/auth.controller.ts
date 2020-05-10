import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { AxiosResponse } from 'axios';

import { AuthService } from './auth.service';
import { AccessTokenDto } from './dto/accessToken.dto';
import { RefreshAccessTokenDto } from './dto/refreshAccessToken.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/access_token')
  accessToken(
    @Query(ValidationPipe) accessTokenDto: AccessTokenDto,
  ): Promise<AxiosResponse> {
    return this.authService.accessToken(accessTokenDto);
  }


  @Get('/refresh_access_token')
  refreshAccessToken(
    @Query(ValidationPipe) refreshAccessTokenDto: RefreshAccessTokenDto,
  ): Promise<AxiosResponse> {
    return this.authService.refreshAccessToken(refreshAccessTokenDto);
  }
}
