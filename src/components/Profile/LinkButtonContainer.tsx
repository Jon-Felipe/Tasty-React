import { useDispatch } from 'react-redux';
import { logoutUser } from '../../features/user/userSlice';

// components
import ProfileLinkButton from './ProfileLinkButton';
import { AppDispatch } from '../../store';

type Props = {};

const LinkButtonContainer = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section className='basis-1/4 space-y-4'>
      <ProfileLinkButton
        text='My Information'
        onClick={() => console.log('info')}
      />
      <ProfileLinkButton
        text='My Recipes'
        onClick={() => console.log('my recipes')}
      />
      <button
        className='block w-full border p-4 shadow rounded bg-red-500 text-white'
        onClick={() => dispatch(logoutUser())}
      >
        Delete Account
      </button>
    </section>
  );
};

export default LinkButtonContainer;
