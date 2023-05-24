import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

// components
import FormRow from '../FormRow';

type Props = {};

const UpdateProfileForm = (props: Props) => {
  const { user } = useSelector((state: RootState) => state.user);

  const handleOnSubmit = () => {};

  return (
    <div className='basis-3/4 shadow-lg rounded-lg p-10'>
      <h2 className='text-3xl font-bold'>Update Your Information Here</h2>
      <form onSubmit={handleOnSubmit} className='mt-4'>
        <div className='grid md:grid-cols-2 gap-x-4 mb-2'>
          <FormRow
            type='text'
            name='name'
            value={user?.name}
            handleChange={() => console.log('handle change')}
            labelText='Name'
            placeholder='Name'
            required
          />
          <FormRow
            type='text'
            name='lastName'
            value={user?.lastName}
            handleChange={() => console.log('handle change')}
            labelText='Last Name'
            placeholder='Last Name'
            required
          />
        </div>
        <div className='mb-2'>
          <FormRow
            type='text'
            name='email'
            value={user?.email}
            handleChange={() => console.log('handle change')}
            labelText='Email Address'
            placeholder='e.g. example@example.com'
            required
          />
        </div>
        <button
          type='submit'
          className='w-full text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
        >
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
