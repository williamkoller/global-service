import { BadRequestException, Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { RegisterRequestDto } from './dtos/register-request.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() authenticateRequest: { username: string; password: string }) {
    try {
      return await this.authService.authenticateUser(authenticateRequest)
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  @Post('register')
  async register(@Body() registerRequestDto: RegisterRequestDto): Promise<{ UserSub: string }> {
    try {
      return await this.authService.registerUser(registerRequestDto)
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }
}
