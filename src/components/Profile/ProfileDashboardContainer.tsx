// components
import UpdateProfileForm from './UpdateProfileForm';
import MyRecipes from './MyRecipes';

type Props = {
  link: string;
};

const ProfileDashboardContainer = ({ link }: Props) => {
  return (
    <section className='basis-3/4'>
      {link === 'info' && <UpdateProfileForm />}
      {link === 'myrecipes' && <MyRecipes />}
    </section>
  );
};

export default ProfileDashboardContainer;
