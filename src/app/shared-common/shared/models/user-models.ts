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
    personName: string
    gender: string
    email: string
    phoneNumber: string
    password: string
    confirmPassword: string
    userType: number
}

export interface PasswordChangeRequest {
    email: string
    currentPassword: string
    newPassword: string
}

export interface PasswordChangeResponse {
    statusCode: number
    isSuccess: boolean
    response: any
    message: string
}

export interface ForgotPasswordResponse {
    statusCode: number
    isSuccess: boolean
    response: string
    message: string
}


export interface ResetPasswordRequest{
    email: string
    otp: string
    newPassword: string
}

export interface ValidateOtpResponse {
    statusCode: number
    isSuccess: boolean
    response: boolean
    message: string
}