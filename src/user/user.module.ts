import { Module, HttpModule } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
      baseURL: 'https://graph.instagram.com/',
    }),
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
