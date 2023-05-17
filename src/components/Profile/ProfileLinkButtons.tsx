import React from 'react';

type Props = {};

type LinkButtonProps = {
  text: string;
  className?: string;
};

const ProfileLinkButtons = (props: Props) => {
  const LinkButton = ({ text, className }: LinkButtonProps) => {
    return (
      <button
        className={`block border p-4 shadow rounded ${
          className ? className : ''
        }`}
      >
        {text}
      </button>
    );
  };

  return (
    <section className='flex flex-col gap-y-4'>
      <LinkButton text='My Information' />
      <LinkButton text='My Recipes' />
      <LinkButton text='Favourited Recipes' />
      <LinkButton text='Delete Account' className='bg-red-500 text-white' />
    </section>
  );
};

export default ProfileLinkButtons;
