import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { OAuthModule } from './oauth/oauth.module';
import { AuthModule } from './auth/auth.module';
import { MediaModule } from './media/media.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [OAuthModule, AuthModule, MediaModule, UserModule, ConfigModule.forRoot()],
})
export class AppModule {}
