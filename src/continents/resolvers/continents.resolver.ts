import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateContinentDto } from '../dtos/create-continent.dto'
import { UpdateContinentDto } from '../dtos/update-continent.dto'
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

  @Query(() => Continent)
  async findById(@Args('id') id: string): Promise<Continent> {
    return await this.continentsService.findById(id)
  }

  @Query(() => [Continent])
  async findByName(@Args('name') name: string): Promise<Array<Continent>> {
    return await this.continentsService.findByName(name)
  }

  @Mutation(() => Continent)
  async update(@Args('_id') _id: string, @Args('data') data: UpdateContinentDto): Promise<Continent> {
    return await this.continentsService.update(_id, data)
  }
}
