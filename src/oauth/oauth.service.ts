import { Injectable, HttpService, HttpException } from '@nestjs/common';
import { AxiosResponse } from 'axios';

import { AuthorizeDto } from './dto/authorize.dto';
import { AccessTokenDto } from './dto/accessToken.dto';

@Injectable()
export class OAuthService {
  constructor(private httpService: HttpService) {}

  async authorize(authorizeDto: AuthorizeDto): Promise<AxiosResponse> {
    try {
      const response = await this.httpService
        .get('/authorize', {
          params: authorizeDto,
        })
        .toPromise();
      return response.data;
    } catch (error) {
      const { status, statusText } = error.response;
      throw new HttpException(statusText, status);
    }
  }

  async accessToken(accessTokenDto: AccessTokenDto): Promise<AxiosResponse> {
    try {
      const response = await this.httpService
        .post('/access_token', {
          data: accessTokenDto,
        })
        .toPromise();
      return response.data;
    } catch (error) {
      const { status, statusText } = error.response;
      throw new HttpException(statusText, status);
    }
  }
}
