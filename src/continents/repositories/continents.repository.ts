import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateContinentDto } from '../dtos/create-continent.dto'
import { Continent, ContinentDocument } from '../schemas/continents.schema'

@Injectable()
export class ContinentsRepository {
  constructor(@InjectModel(Continent.name) private readonly continentModel: Model<ContinentDocument>) {}

  async create(data: CreateContinentDto): Promise<Continent> {
    const continent = new this.continentModel(data)
    await continent.save()
    return continent
  }

  async findAll(): Promise<Array<Continent>> {
    return await this.continentModel.find({}, { __v: false }).exec()
  }

  async findById(id: string): Promise<Continent> {
    const continentId = await this.continentModel.findById(id).exec()
    if (!continentId) {
      throw new NotFoundException('Continent not found.')
    }
    return continentId
  }

  async findByName(name: string): Promise<Array<Continent>> {
    return await this.continentModel.find({ name: { $regex: name, $options: 'i' } }, { __v: false })
  }
}
