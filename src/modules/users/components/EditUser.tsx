import React from 'react'
import { useEditUser } from 'modules/users/hooks/useUser'
import Input from 'common/components/UI/input/Input'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { ConnectedFocusError } from 'focus-formik-error'
import  Button  from 'common/components/UI/button/Button'
import Label from 'common/components/UI/label/Label'

const Index = ({ user }: { user: User }) => {
  const { mutate } = useEditUser()

  return (
    <div className=' bg-[#90a4a738] p-5 rounded-md'>
      <div className='row'>
        <h3 className='text-center text-2xl'>Edit User</h3>
      </div>
      <Formik<User>
        initialValues={user}
        validationSchema={Yup.object({
          username: Yup.string().required('Username is required'),
          email: Yup.string().required('Email is required'),
        })}
        onSubmit={(values) => {
          mutate(values)
        }}
      >
        {({ handleSubmit, values, handleChange, errors }) => {
          return (
            <form onSubmit={handleSubmit}>
              <ConnectedFocusError />
              <Label id='username'>Username</Label>
              <Input
                type='text'
                name='username'
                value={values.username}
                className={'p-3 w-full  focus:outline-0 '}
                error={errors.username}
                onChange={handleChange}
              />
              <Label id='email'>Email</Label>
              <Input
                type='email'
                name='email'
                value={values.email}
                onChange={handleChange}
                className='p-3  w-full focus:outline-0'
                error={errors.email}
              />
              <Button label='Edit' />
            </form>
          )
        }}
      </Formik>
    </div>
  )
}
export default Index
