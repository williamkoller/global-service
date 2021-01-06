import { Inject, Injectable } from '@nestjs/common'
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js'
import { AwsSerice } from 'src/shared/aws/aws.service'
import { AuthConfig } from '../config/auth.config'
import { RegisterRequestDto } from '../dtos/register-request.dto'

@Injectable()
export class AuthService {
  private readonly userPool: CognitoUserPool
  constructor(@Inject('AuthConfig') private readonly authConfig: AuthConfig, private readonly awsService: AwsSerice) {
    this.userPool = new CognitoUserPool({
      UserPoolId: authConfig.userPoolId,
      ClientId: authConfig.clientId,
    })
  }
  registerUser(registerRequestDto: RegisterRequestDto): Promise<{ UserSub: string }> {
    return this.awsService.registerUser(registerRequestDto)
  }

  authenticateUser(user: { username: string; password: string }) {
    const { username, password } = user
    const authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    })
    const userData = {
      Username: username,
      Pool: this.userPool,
    }

    const newUser = new CognitoUser(userData)

    return new Promise((resolve, reject) => {
      return newUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          resolve(result)
        },
        onFailure: (error) => {
          reject(error)
        },
      })
    })
  }
}
