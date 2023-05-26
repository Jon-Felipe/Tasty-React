import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginType } from '../utils/types';
import { toast } from 'react-toastify';

// components
import FormRow from '../components/FormRow';

type Props = {};

const initialValues: LoginType = {
  email: '',
  password: '',
};

const Login = (props: Props) => {
  const [values, setValues] = useState<LoginType>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = values;

    if (!email.trim() || !password.trim()) {
      toast.error('Please fill in both fields');
      return;
    }
  };

  return (
    <section>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <Link
          to='/'
          className='flex items-center mb-6 text-2xl font-semibold text-gray-900'
        >
          <h1>Tasty Recipes</h1>
        </Link>
        <div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 '>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
              Sign in to your account
            </h1>
            <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
              <FormRow
                type='email'
                name='email'
                value={values.email}
                handleChange={handleChange}
                labelText='Your email'
                placeholder='name@example.com'
                required
              />
              <FormRow
                type='password'
                name='password'
                value={values.password}
                handleChange={handleChange}
                labelText='Password'
                placeholder='••••••••'
                required
              />
              <button
                type='submit'
                className='w-full text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              >
                Sign in
              </button>
              <p className='text-sm font-light text-gray-500'>
                Don't have an account yet?{' '}
                <Link
                  to='/register'
                  className='font-medium text-primary-600 hover:underline'
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
