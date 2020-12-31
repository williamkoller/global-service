import { Injectable } from '@nestjs/common'
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
}
