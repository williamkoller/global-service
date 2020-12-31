import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateContinentDto } from '../dtos/create-continent.dto'
import { Continent } from '../schemas/continents.schema'
import { ContinentsService } from '../services/services.service'

@Resolver(Continent.name)
export class ContinentsResolver {
  constructor(private readonly continentsService: ContinentsService) {}

  @Query(() => [Continent])
  async findAll(): Promise<Array<Continent>> {
    return await this.continentsService.findAll()
  }

  @Mutation(() => Continent)
  async create(@Args('data') data: CreateContinentDto): Promise<Continent> {
    return await this.continentsService.create(data)
  }
}
