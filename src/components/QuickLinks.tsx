import { Link } from 'react-router-dom';

// extras
import { recipesQuickLink } from '../utils/constants';
import allIcon from '../assets/icons/all-icon.png';

type Props = {};

const QuickLinks = (props: Props) => {
  return (
    <section className='grid md:grid-cols-3 lg:grid-cols-9 gap-y-2 md:gap-4 lg:gap-y-0'>
      {recipesQuickLink.map(({ id, text, path, icon }) => (
        <RecipeLink id={id} text={text} path={path} icon={icon} />
      ))}
      <RecipeLink text='Browse All' path='recipes' icon={allIcon} />
    </section>
  );
};

export default QuickLinks;

type LinkProps = {
  id?: number;
  path: string;
  icon: string;
  text: string;
};

const RecipeLink = ({ id, path, icon, text }: LinkProps) => {
  return (
    <article className='border-2 rounded-xl text-center p-2'>
      <Link key={id} to={`category/${path}`}>
        <img
          src={icon}
          alt={text}
          className='hidden md:block mb-2 md:mx-auto'
        />
        <p className='font-bold lg:text-xs'>{text}</p>
      </Link>
    </article>
  );
};
