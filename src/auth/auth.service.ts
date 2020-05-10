import { Injectable, HttpService, HttpException } from '@nestjs/common';
import { AxiosResponse } from 'axios';

import { AccessTokenDto } from './dto/accessToken.dto';
import { RefreshAccessTokenDto } from './dto/refreshAccessToken.dto';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {}

  async accessToken(accessTokenDto: AccessTokenDto): Promise<AxiosResponse> {
    try {
      const response = await this.httpService
        .get('/access_token', {
          params: accessTokenDto,
        })
        .toPromise();
      return response.data;
    } catch (error) {
      const { status, statusText } = error.response;
      throw new HttpException(statusText, status);
    }
  }

  async refreshAccessToken(
    refreshAccessTokenDto: RefreshAccessTokenDto,
  ): Promise<AxiosResponse> {
    try {
      const response = await this.httpService
        .get('/refresh_access_token', {
          params: refreshAccessTokenDto,
        })
        .toPromise();
      return response.data;
    } catch (error) {
      const { status, statusText } = error.response;
      throw new HttpException(statusText, status);
    }
  }
}
