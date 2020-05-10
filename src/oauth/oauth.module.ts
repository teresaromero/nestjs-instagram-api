import { Module, HttpModule } from '@nestjs/common';
import { OAuthController } from './oauth.controller';
import { OAuthService } from './oauth.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
      baseURL: 'https://api.instagram.com/oauth'
    })
    ],
  controllers: [OAuthController],
  providers: [OAuthService]
})
export class OAuthModule {}
