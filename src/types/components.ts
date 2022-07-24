export type LoginFormProps = {
  onSubmit: (data: LoginFormData) => void
}

export type LoginFormData = {
  email: string
  password: string
}
