import React from 'react';

// components
import FormRow from '../FormRow';

type Props = {};

const UpdateProfileForm = (props: Props) => {
  const handleOnSubmit = () => {};

  return (
    <div className='basis-3/4 shadow-lg rounded-lg p-10'>
      <h2 className='text-3xl font-bold'>Update Your Information Here</h2>
      <form onSubmit={handleOnSubmit} className='mt-4'>
        <div className='grid gap-y-2 md:gap-y-0 md:grid-cols-2 md:gap-x-6 mb-2'>
          <FormRow
            type='text'
            name='name'
            value={''}
            handleChange={() => console.log('handle change')}
            labelText='Name'
            placeholder='e.g. John Doe'
            required
          />
          <FormRow
            type='text'
            name='email'
            value={''}
            handleChange={() => console.log('handle change')}
            labelText='Email Address'
            placeholder='e.g. example@example.com'
            required
          />
        </div>
        <FormRow
          type='text'
          name='address'
          value={''}
          handleChange={() => console.log('handle change')}
          labelText='Address'
          placeholder='e.g. 123 street, cnr 4th avenue, testvil'
          required
        />
        <div className='grid gap-y-2 md:gap-y-0 md:grid-cols-2 md:gap-x-6 mt-2'>
          <FormRow
            type='text'
            name='city'
            value={''}
            handleChange={() => console.log('handle change')}
            labelText='City'
            placeholder='e.g. Porto'
            required
          />
          <FormRow
            type='text'
            name='area'
            value={''}
            handleChange={() => console.log('handle change')}
            labelText='Area'
            placeholder='e.g. Paranhos'
            required
          />
        </div>
        <div className='grid gap-y-2 md:gap-y-0 md:grid-cols-2 md:gap-x-6 my-2'>
          <FormRow
            type='number'
            name='zip'
            value={''}
            handleChange={() => console.log('handle change')}
            labelText='Zip Code'
            placeholder='e.g. 1234'
            required
          />
          <FormRow
            type='text'
            name='country'
            value={''}
            handleChange={() => console.log('handle change')}
            labelText='Country'
            placeholder='e.g. Portugal'
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
