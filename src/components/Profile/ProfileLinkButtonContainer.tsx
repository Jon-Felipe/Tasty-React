import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { deleteUser } from '../../features/user/userSlice';

type Props = {
  setLink: React.Dispatch<React.SetStateAction<string>>;
};

const ProfileLinkButtonContainer = ({ setLink }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleOnClick = () => {};

  return (
    <section className='basis-1/4 space-y-4'>
      <button
        className='block w-full border p-4 shadow rounded'
        onClick={() => setLink('info')}
      >
        My Information
      </button>
      <button
        className='block w-full border p-4 shadow rounded'
        onClick={() => setLink('myrecipes')}
      >
        My Recipes
      </button>
      <button
        className='block w-full border p-4 shadow rounded bg-red-500 text-white'
        onClick={handleOnClick}
      >
        Delete Account
      </button>
    </section>
  );
};

export default ProfileLinkButtonContainer;
