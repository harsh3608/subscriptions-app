export interface UserLoginRequest {
    email: string
    password: string
}

export interface LoginResponse {
    statusCode: number
    isSuccess: boolean
    response: AuthenticationResponse
    message: string
}
  
export interface AuthenticationResponse {
    personName: string
    email: string
    userType: string
    token: string
    expiration: string
}

export interface UserRegisterRequest {
    id: string
    personName: string
    gender: string
    email: string
    phoneNumber: string
    password: string
    confirmPassword: string
    userType: number
  }