import React from 'react';

type Props = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const ProfileLinkButton = ({ text, onClick }: Props) => {
  return (
    <button
      className='block w-full border p-4 shadow rounded'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ProfileLinkButton;
