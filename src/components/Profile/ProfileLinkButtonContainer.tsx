import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { logoutUser } from '../../features/user/userSlice';

type Props = {};

const ProfileLinkButtonContainer = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section className='basis-1/4 space-y-4'>
      <button
        className='block w-full border p-4 shadow rounded'
        onClick={() => console.log('click')}
      >
        My Information
      </button>
      <button
        className='block w-full border p-4 shadow rounded'
        onClick={() => console.log('click')}
      >
        My Recipes
      </button>
      <button
        className='block w-full border p-4 shadow rounded bg-red-500 text-white'
        onClick={() => dispatch(logoutUser())}
      >
        Delete Account
      </button>
    </section>
  );
};

export default ProfileLinkButtonContainer;
