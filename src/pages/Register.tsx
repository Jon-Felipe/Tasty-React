import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { registerUser } from '../features/user/userSlice';
import { RegisterUserAttributes } from '../utils/types';

// components
import FormRow from '../components/FormRow';

const initialValues: RegisterUserAttributes = {
  name: '',
  email: '',
  password: '',
};

const Register = () => {
  const [values, setValues] = useState<RegisterUserAttributes>(initialValues);

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user, isLoading } = useSelector((store: RootState) => store.user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, password } = values;
    if (!name.trim() || !email.trim() || !password.trim()) {
      alert('Please fill in all fields');
      return;
    }

    dispatch(registerUser({ name, email, password }));
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  return (
    <section>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-fit lg:py-0'>
        <Link
          to='/'
          className='flex items-center mb-6 text-2xl font-semibold text-gray-900'
        >
          <h1>Tasty Recipes</h1>
        </Link>
        <div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 '>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900'>
              Create an account
            </h1>
            <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
              <FormRow
                type='text'
                name='name'
                value={values.name}
                handleChange={handleChange}
                labelText='Your name'
                placeholder='John Doe'
                required
              />
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
                className='w-full text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-primary-400'
              >
                {isLoading ? 'Loading...' : 'Create an account'}
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
