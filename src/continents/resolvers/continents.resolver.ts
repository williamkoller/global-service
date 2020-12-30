import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { CreateContinentDto } from '../dtos/create-continent.dto'
import { Continent } from '../schemas/continents.schema'
import { ContinentsService } from '../services/services.service'

@Resolver()
export class ContinentsResolver {
  constructor(private readonly continentsService: ContinentsService) {}

  @Mutation(() => Continent)
  async create(@Args('data') data: CreateContinentDto): Promise<Continent> {
    return this.continentsService.create(data)
  }
}
