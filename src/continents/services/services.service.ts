import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateContinentDto } from '../dtos/create-continent.dto'
import { UpdateContinentDto } from '../dtos/update-continent.dto'
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

  async update(_id: string, data: UpdateContinentDto): Promise<Continent> {
    const updateContinent = await this.continentsRepository.update(_id, data)
    if (updateContinent) {
      return this.continentsRepository.findById(_id)
    } else {
      throw new BadRequestException('Error in update continent')
    }
  }

  async delete(_id: string): Promise<string> {
    return await this.continentsRepository.delete(_id)
  }
}
