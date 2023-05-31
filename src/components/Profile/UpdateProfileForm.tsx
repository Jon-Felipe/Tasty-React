import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

// components
import FormRow from '../UI/FormRow';

// extra
import { UserDataType } from '../../utils/types';
import { AppDispatch, RootState } from '../../store';
import { updateUser } from '../../features/user/userSlice';

type Props = {};

const UpdateProfileForm = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.user);

  const [userData, setUserData] = useState<UserDataType>({
    name: user?.name || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, lastName, email } = userData;

    if (!name.trim() || !lastName.trim() || !email.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    dispatch(updateUser(userData));
  };

  return (
    <div className='basis-3/4 shadow-lg rounded-lg p-10'>
      <h2 className='text-3xl font-bold'>Update Your Information Here</h2>
      <form onSubmit={handleOnSubmit} className='mt-4'>
        <div className='grid md:grid-cols-2 gap-x-4 mb-2'>
          <FormRow
            type='text'
            name='name'
            value={userData?.name}
            handleChange={handleOnChange}
            labelText='Name'
            placeholder='Your first name'
            required
          />
          <FormRow
            type='text'
            name='lastName'
            value={userData?.lastName}
            handleChange={handleOnChange}
            labelText='Last Name'
            placeholder='Your last name'
            required
          />
        </div>
        <div className='mb-2'>
          <FormRow
            type='text'
            name='email'
            value={userData?.email}
            handleChange={handleOnChange}
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
