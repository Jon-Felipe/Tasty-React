import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <h3 className='text-3xl font-semibold'>Ohh! Page Not Found</h3>
      <p>We can't seem to find the page you're looking for</p>
      <Link to='/' className='bg-orange-500 text-white px-4 py-2 rounded-md'>
        Back Home
      </Link>
    </div>
  );
};

export default Error;
