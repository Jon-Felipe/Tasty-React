// components
import FormRow from '../components/UI/FormRow';

const Profile = () => {
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
              name='name'
              value={''}
              handleChange={() => console.log('first')}
              labelText='First Name'
              placeholder='John'
              required
            />
            <FormRow
              type='text'
              name='lastName'
              value={''}
              handleChange={() => console.log('first')}
              labelText='Last Name'
              placeholder='Doe'
              required
            />
          </div>
          <div className='my-2'>
            <FormRow
              type='email'
              name='email'
              value={''}
              handleChange={() => console.log('first')}
              labelText='Email'
              placeholder='example@example.com'
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
