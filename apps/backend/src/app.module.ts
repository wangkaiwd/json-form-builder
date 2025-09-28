import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AiFormJsonModule } from './modules/ai-form-json/ai-form-json.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot(), AiFormJsonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
