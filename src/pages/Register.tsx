import React from 'react';
import { Link } from 'react-router-dom';

// components
import FormRow from '../components/FormRow';

type Props = {};

const Register = (props: Props) => {
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
              Create an account
            </h1>
            <form className='space-y-4 md:space-y-6'>
              <FormRow
                type='email'
                name='email'
                value=''
                handleChange={() => console.log()}
                labelText='Your email'
                placeholder='name@example.com'
                required
              />
              <FormRow
                type='password'
                name='password'
                value=''
                handleChange={() => console.log()}
                labelText='Password'
                placeholder='••••••••'
                required
              />
              <FormRow
                type='password'
                name='confirmPassword'
                value=''
                handleChange={() => console.log()}
                labelText='Confirm password'
                placeholder='••••••••'
                required
              />
              <button
                type='submit'
                className='w-full text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              >
                Create an account
              </button>
              <p className='text-sm font-light text-gray-500'>
                Already have an account?{' '}
                <Link
                  to='/login'
                  className='font-medium text-primary-600 hover:underline'
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
