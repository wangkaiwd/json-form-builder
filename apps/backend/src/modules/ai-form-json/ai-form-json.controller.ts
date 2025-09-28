import { Body, Controller, Post } from '@nestjs/common'
import { AiFormJsonService } from './ai-form-json.service'

@Controller('ai-form-json')
export class AiFormJsonController {
  constructor (private readonly appService: AiFormJsonService) {}

  @Post()
  getJson (@Body() body: { input: string }) {
    return this.appService.getJson(body.input)
  }
}
