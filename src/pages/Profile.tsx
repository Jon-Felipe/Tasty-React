import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

// components
import FormRow from '../components/UI/FormRow';

const Profile = () => {
  const { user } = useSelector((state: RootState) => state.user);

  const [values, setValues] = useState({
    firstName: user?.name || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <section>
      <div className='max-w-screen-md mx-auto space-y-4'>
        <div className='py-4 border-b'>
          <h4 className='font-semibold text-base'>Personal Info</h4>
          <p className='font-light text-sm text-slate-400'>
            Update your personal details here
          </p>
        </div>
        <form>
          <div className='grid grid-cols-2 gap-x-6'>
            <FormRow
              type='text'
              name='firstName'
              value={values?.firstName}
              handleChange={handleOnChange}
              labelText='First Name'
              required
            />
            <FormRow
              type='text'
              name='lastName'
              value={values?.lastName}
              handleChange={handleOnChange}
              labelText='Last Name'
              required
            />
          </div>
          <div className='my-2'>
            <FormRow
              type='email'
              name='email'
              value={values?.email}
              handleChange={handleOnChange}
              labelText='Email'
              required
            />
          </div>
          <div className='mt-4'>
            <button
              type='submit'
              className='bg-orange-500 text-white px-4 py-1.5 rounded-md'
              onClick={() => console.log('update')}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Profile;
