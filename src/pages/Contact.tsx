import React from 'react';

// components
import FormRow from '../components/UI/FormRow';

const Contact = () => {
  return (
    <section>
      <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900'>
          Contact Us
        </h2>
        <form className='space-y-8'>
          <FormRow
            type='email'
            name='email'
            value=''
            handleChange={() => console.log()}
            labelText='Your email'
            placeholder='name@example.com'
            required
          />
          <FormRow
            type='text'
            name='subject'
            value=''
            handleChange={() => console.log()}
            labelText='Subject'
            placeholder='Let us know how we can help you'
            required
          />
          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Your message
            </label>
            <textarea
              name='message'
              id='message'
              rows={6}
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300'
              placeholder='Leave a comment...'
            ></textarea>
          </div>
          <button
            type='submit'
            className='py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800'
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
