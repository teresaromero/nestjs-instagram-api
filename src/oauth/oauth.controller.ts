import { Controller, Get, Query, ValidationPipe, Post, UsePipes, Body } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { OAuthService } from './oauth.service';
import { AuthorizeDto } from './dto/authorize.dto';
import { AccessTokenDto } from './dto/accessToken.dto';

@Controller('oauth')
export class OAuthController {
  constructor(private oauthService: OAuthService) {}

  @Get('/authorize')
  authorize(
    @Query(ValidationPipe) authorizeDto: AuthorizeDto,
  ): Promise<AxiosResponse> {
    return this.oauthService.authorize(authorizeDto);
  }

  @Post('/access_token')
  @UsePipes(ValidationPipe)
  accessToken(
    @Body() accessTokenDto: AccessTokenDto
  ): Promise<AxiosResponse> {
    return this.oauthService.accessToken(accessTokenDto)
  }
}
