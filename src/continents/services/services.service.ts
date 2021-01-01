import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateContinentDto } from '../dtos/create-continent.dto'
import { ContinentsRepository } from '../repositories/continents.repository'
import { Continent } from '../schemas/continents.schema'

@Injectable()
export class ContinentsService {
  constructor(private readonly continentsRepository: ContinentsRepository) {}

  async create(data: CreateContinentDto): Promise<Continent> {
    return await this.continentsRepository.create(data)
  }

  async findAll(): Promise<Array<Continent>> {
    return await this.continentsRepository.findAll()
  }

  async findById(id: string): Promise<Continent> {
    return await this.continentsRepository.findById(id)
  }

  async findByName(name: string): Promise<Array<Continent>> {
    const continentFound = await this.continentsRepository.findByName(name)
    if (!continentFound) throw new BadRequestException('No results for this name.')
    return continentFound
  }
}
