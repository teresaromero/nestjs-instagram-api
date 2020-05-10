import { IsNotEmpty, IsNumberString, IsUrl } from 'class-validator';

export class AccessTokenDto {
  @IsNotEmpty()
  @IsNumberString()
  client_id: string;

  @IsNotEmpty()
  client_secret: string;

  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  grant_type: string;

  @IsUrl()
  @IsNotEmpty()
  redirect_uri: string;

}
