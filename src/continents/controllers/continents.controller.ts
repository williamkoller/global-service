import { Controller, Get, UseInterceptors } from '@nestjs/common'
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor'
import { TransformInterceptor } from 'src/interceptors/transform.interceptor'
import { Continent } from '../schemas/continents.schema'
import { ContinentsService } from '../services/services.service'

@Controller('continents')
export class ContinentsController {
  constructor(private readonly continentsService: ContinentsService) {}

  @Get()
  @UseInterceptors(TransformInterceptor, LoggingInterceptor)
  async findAll(): Promise<Array<Continent>> {
    return await this.continentsService.findAll()
  }
}
