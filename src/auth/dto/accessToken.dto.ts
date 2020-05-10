import { IsNotEmpty } from 'class-validator';

export class AccessTokenDto {
  @IsNotEmpty()
  client_secret: string;

  @IsNotEmpty()
  grant_type: string;

  @IsNotEmpty()
  access_token: string;
}
