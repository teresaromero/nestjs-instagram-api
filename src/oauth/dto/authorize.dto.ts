import { IsNotEmpty, IsNumberString, IsUrl } from 'class-validator';

export class AuthorizeDto {
  @IsNotEmpty()
  @IsNumberString()
  client_id: string;

  @IsUrl()
  @IsNotEmpty()
  redirect_uri: string;

  @IsNotEmpty()
  response_type: string;

  @IsNotEmpty()
  scope: string;

  state: string;
}
