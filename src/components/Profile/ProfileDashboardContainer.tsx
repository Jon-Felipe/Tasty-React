// components
import UpdateProfileForm from './UpdateProfileForm';
import MyRecipes from './MyRecipes';

type Props = {
  link: string;
};

const ProfileDashboardContainer = ({ link }: Props) => {
  return (
    <section className='basis-3/4 shadow-lg rounded-lg p-10'>
      {link === 'info' && <UpdateProfileForm />}
      {link === 'myRecipes' && <MyRecipes />}
    </section>
  );
};

export default ProfileDashboardContainer;
