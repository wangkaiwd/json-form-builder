import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { catchError, firstValueFrom } from 'rxjs'
import { AxiosError } from 'axios'

@Injectable()
export class AiFormJsonService {
  constructor (private readonly httpService: HttpService) {}

  async getJson (input: string) {
    const { data } = await firstValueFrom(
      this.httpService.post(
        'https://api.coze.cn/v1/workflow/run',
        {
          workflow_id: '7554793570432286720',
          parameters: {
            input,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.COZE_TOKEN}`,
          },
        }),
    )
    const json = JSON.parse(data.data)
    return json.output
  }
}
