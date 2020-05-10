/* eslint-disable @typescript-eslint/camelcase */
import { Injectable, HttpService, HttpException } from '@nestjs/common';
import { AxiosResponse } from 'axios';

@Injectable()
export class UserService {
  constructor(private httpService: HttpService) {}

  async getMe(): Promise<AxiosResponse> {
    try {
      const response = await this.httpService
        .get('/me', {
          params: {
            access_token: process.env.ACCESS_TOKEN,
            fields: 'account_type,id,media_count,username',
          },
        })
        .toPromise();
      return response.data;
    } catch (error) {
      const { status, statusText } = error.response;
      throw new HttpException(statusText, status);
    }
  }

  async getUserById(userId): Promise<AxiosResponse> {
    try {
      const response = await this.httpService
        .get(`/${userId}`, {
          params: {
            access_token: process.env.ACCESS_TOKEN,
            fields: 'account_type,id,media_count,username',
          },
        })
        .toPromise();
      return response.data;
    } catch (error) {
      const { status, statusText } = error.response;
      throw new HttpException(statusText, status);
    }
  }

  async getMediaByUserId(userId): Promise<AxiosResponse> {
    try {
      const response = await this.httpService
        .get(`${userId}/media`, {
          params: {
            access_token: process.env.ACCESS_TOKEN,
            fields:
              'caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username',
          },
        })
        .toPromise();
      return response.data;
    } catch (error) {
      const { status, statusText } = error.response;
      throw new HttpException(statusText, status);
    }
  }
}
