import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ContinentDocument = Continent & Document

@Schema()
export class Continent {
  @Prop()
  name: string

  @Prop()
  territorialExtension: number

  @Prop()
  quantityCountries: number

  @Prop()
  population: number

  @Prop()
  createdAt: Date

  @Prop()
  updatedAt: Date
}

export const ContinentSchema = SchemaFactory.createForClass(Continent)
