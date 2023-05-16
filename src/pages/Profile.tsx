import React from 'react';

// components
import UpdateProfileForm from '../components/Profile/UpdateProfileForm';

type Props = {};

const Profile = (props: Props) => {
  return (
    <article className='max-w-screen-xl mx-auto py-2'>
      <h1 className='text-4xl font-bold'>My Profile</h1>
      <p className='text-sm text-gray-400 font-medium'>
        Details about your Personal Information
      </p>
      <div className='flex flex-col md:flex-row gap-4 mt-2 md:mt-4'>
        <section className='basis-1/4'>
          <p>profile links</p>
        </section>
        <UpdateProfileForm />
      </div>
    </article>
  );
};

export default Profile;
