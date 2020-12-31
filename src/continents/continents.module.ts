import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Continent, ContinentSchema } from './schemas/continents.schema'
import { ContinentsService } from './services/services.service'
import { ContinentsRepository } from './repositories/continents.repository'
import { ContinentsResolver } from './resolvers/continents.resolver'
import { ContinentsController } from './controllers/continents.controller'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Continent.name,
        schema: ContinentSchema,
      },
    ]),
  ],
  providers: [ContinentsService, ContinentsRepository, ContinentsResolver],
  exports: [ContinentsService, ContinentsRepository],
  controllers: [ContinentsController],
})
export class ContinentsModule {}
