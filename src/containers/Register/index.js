import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import Logo from '../../assets/logo.svg'
import RegisterImg from '../../assets/register-image.svg'
import { Button, ErrorMessage } from '../../components'
import api from '../../services/api'
import {
  Container,
  RegisterImage,
  ContainerItens,
  Label,
  Input,
  SingInLink
} from './styles'

export function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required('name is a required field'),
    email: Yup.string()
      .email('enter a valid email')
      .required('email is a required field'),
    password: Yup.string()
      .required('password is a required field')
      .min(6, 'password must be at least 6 characteres'),
    confirmPassword: Yup.string()
      .required('password is a required field')
      .oneOf([Yup.ref('password')], 'Password must be the same')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        {
          validateStatus: () => true
        }
      )

      if (status === 201 || status === 200) {
        toast.success('Successful registration')
      } else if (status === 409) {
        toast.error('Email already registered! Login to continue')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('System Failure! Try again')
    }
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="register-image" />
      <ContainerItens>
        <img src={Logo} alt="logo-code-burger" />
        <h1>Sign Up</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Name</Label>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Password</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>
            Confirm Password
          </Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 20, marginBottom: 25 }}>
            Sing Up
          </Button>
        </form>
        <SingInLink>
          Já possui conta?{' '}
          <Link style={{ color: 'white' }} to="/login">
            Sign Up
          </Link>
        </SingInLink>
      </ContainerItens>
    </Container>
  )
}
