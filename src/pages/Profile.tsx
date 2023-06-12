import { useState } from 'react';

// components
import ProfileLinkButtonContainer from '../components/Profile/ProfileLinkButtonContainer';
import ProfileDashboardContainer from '../components/Profile/ProfileDashboardContainer';

const Profile = () => {
  const [link, setLink] = useState<string>('info');

  return (
    <article className='max-w-screen-xl mx-auto py-2'>
      <h1 className='text-4xl font-bold'>My Profile</h1>
      <p className='text-sm text-gray-400 font-medium'>
        Details about your Personal Information
      </p>
      <div className='flex flex-col md:flex-row gap-4 mt-2 md:mt-4'>
        <ProfileLinkButtonContainer setLink={setLink} />
        <ProfileDashboardContainer link={link} />
      </div>
    </article>
  );
};

export default Profile;
