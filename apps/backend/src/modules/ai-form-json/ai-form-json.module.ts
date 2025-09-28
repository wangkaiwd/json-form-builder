import { Module } from '@nestjs/common'
import { AiFormJsonController } from './ai-form-json.controller'
import { AiFormJsonService } from './ai-form-json.service'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [HttpModule],
  controllers: [AiFormJsonController],
  providers: [AiFormJsonService],
})
export class AiFormJsonModule {}
