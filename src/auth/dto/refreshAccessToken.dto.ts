import { IsNotEmpty } from 'class-validator';

export class RefreshAccessTokenDto {

  @IsNotEmpty()
  grant_type: string;

  @IsNotEmpty()
  access_token: string;
}
