import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

// components
import FormRow from '../components/FormRow';
import { deleteUser, updateUser } from '../features/user/userSlice';

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
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

  const handleOnDelete = () => {
    const response = window.confirm(
      'Are you sure you want to delete your account?'
    );
    if (response) {
      dispatch(deleteUser());
    }
  };

  const handleOnUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { firstName, lastName, email } = values;

    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      toast.error('please fill in all fields');
      return;
    }

    dispatch(
      updateUser({
        name: values.firstName,
        lastName: values.lastName,
        email: values.email,
      })
    );
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
        <form onSubmit={handleOnUpdate}>
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
          <div className='flex items-center gap-x-4 mt-4'>
            <button
              type='button'
              className='border border-orange-500 text-orange-500 px-4 py-1.5 rounded-md'
              onClick={handleOnDelete}
            >
              Delete Account
            </button>
            <button
              type='submit'
              className='bg-orange-500 text-white px-4 py-1.5 rounded-md'
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
