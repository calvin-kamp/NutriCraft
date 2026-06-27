import { toTypedSchema } from '@vee-validate/yup';
import * as Yup from 'yup'

export const registerSchema = toTypedSchema(Yup.object({
    email: 
      Yup
        .string()
        .required()
        .email('Please enter a valid email.'),
    password: 
      Yup
        .string()
        .required()
        .min(8, 'Password must be atleast 8 characters.'),
    passwordConfirm: 
      Yup
        .string()
        .required()
        .oneOf([Yup.ref('password')], 'Passwords do not match')
  })
)