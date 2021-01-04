import { Field, ID } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type CountryDocument = Country & Document

@Schema({ _id: true, timestamps: true })
export class Country {
  @Field(() => ID)
  _id: string

  @Prop()
  @Field()
  name: string

  @Prop()
  @Field(() => Number)
  territorialExtension: number

  @Prop()
  @Field()
  language: string

  @Prop()
  @Field()
  location: string

  @Prop()
  @Field()
  currency: string
}

export const CountrySchema = SchemaFactory.createForClass(Country)
