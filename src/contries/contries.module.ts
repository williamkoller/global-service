import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Country, CountrySchema } from './schemas/contries.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Country.name,
        schema: CountrySchema,
      },
    ]),
  ],
})
export class ContriesModule {}
