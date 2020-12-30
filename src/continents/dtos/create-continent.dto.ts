import { IsNotEmpty, IsNumber, IsNumberString, IsString } from 'class-validator'

export class CreateContinentDto {
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  name: string

  @IsNumberString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  territorialExtension: number

  @IsNumber()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  quantityCountries: number

  @IsNumberString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  population: number
}
