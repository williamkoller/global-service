import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ContinentDocument = Continent & Document

@Schema()
@ObjectType()
export class Continent {
  @Field(() => ID)
  _id: string

  @Prop()
  @Field()
  name: string

  @Prop()
  @Field()
  territorialExtension: number

  @Prop()
  @Field()
  quantityCountries: number

  @Prop()
  @Field()
  population: number
}

export const ContinentSchema = SchemaFactory.createForClass(Continent)
