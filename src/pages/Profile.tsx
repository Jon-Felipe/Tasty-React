import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../features/user/userSlice';

// components
import UpdateProfileForm from '../components/Profile/UpdateProfileForm';
import ProfileLinkButton from '../components/Profile/ProfileLinkButton';

type Props = {};

const Profile = (props: Props) => {
  const [link, setLink] = useState<string>('info');

  const dispatch = useDispatch();

  const handleOnClick = (value: string) => {
    setLink(value);
  };

  return (
    <article className='max-w-screen-xl mx-auto py-2'>
      <h1 className='text-4xl font-bold'>My Profile</h1>
      <p className='text-sm text-gray-400 font-medium'>
        Details about your Personal Information
      </p>
      <div className='flex flex-col md:flex-row gap-4 mt-2 md:mt-4'>
        <section className='basis-1/4 space-y-4'>
          <ProfileLinkButton
            text='My Information'
            onClick={() => handleOnClick('info')}
          />
          <ProfileLinkButton
            text='My Recipes'
            onClick={() => handleOnClick('myRecipes')}
          />
          <ProfileLinkButton
            text='Favourited Recipes'
            onClick={() => handleOnClick('favouriteRecipes')}
          />
          <button
            className='block w-full border p-4 shadow rounded bg-red-500 text-white'
            onClick={() => dispatch(logoutUser())}
          >
            Delete Account
          </button>
        </section>
        <UpdateProfileForm />
      </div>
    </article>
  );
};

export default Profile;
