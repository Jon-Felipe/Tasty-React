import { Link, Outlet } from 'react-router-dom';

type ProfileLinksType = {
  id: number;
  text: string;
  url: string;
}[];

const profileLinks: ProfileLinksType = [
  { id: 1, text: 'My Information', url: 'my-information' },
  { id: 2, text: 'My Recipes', url: 'my-recipes' },
  { id: 3, text: 'My Favourite Recipes', url: 'my-favourites' },
];

const ProfileLayout = () => {
  return (
    <>
      <div className=''>
        <ProfileLinks />
        <Outlet />
      </div>
    </>
  );
};

const ProfileLinks = () => {
  return (
    <div className='grid grid-cols-3 place-items-center max-w-screen-lg mx-auto border-b-2 pb-2'>
      {profileLinks.map((link) => (
        <Link key={link.id} to={link.url} className='text-sm font-medium'>
          {link.text}
        </Link>
      ))}
    </div>
  );
};

export default ProfileLayout;
