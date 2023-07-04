import { Link, NavLink, Outlet } from 'react-router-dom';

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
    <div>
      <ProfileLinks />
      <Outlet />
    </div>
  );
};

const ProfileLinks = () => {
  return (
    <div className='grid grid-cols-3 place-items-center border-b-2 border-b-orange-300 pb-2'>
      {profileLinks.map((link) => (
        <NavLink
          key={link.id}
          to={link.url}
          className={({ isActive }) =>
            isActive
              ? 'text-md font-semibold text-orange-500'
              : 'text-sm font-medium'
          }
          end
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  );
};

export default ProfileLayout;
