import { Link } from 'react-router-dom';

// extras
import { recipesQuickLink } from '../utils/constants';

type Props = {};

const QuickLinks = (props: Props) => {
  return (
    <section className='grid md:grid-cols-3 lg:grid-cols-9 gap-y-2 md:gap-4 lg:gap-y-0'>
      {recipesQuickLink.map(({ id, text, path, icon }) => (
        <RecipeLink key={id} text={text} path={path} icon={icon} />
      ))}
    </section>
  );
};

export default QuickLinks;

type LinkProps = {
  path: string;
  icon: string;
  text: string;
};

const RecipeLink = ({ path, icon, text }: LinkProps) => {
  return (
    <article className='border-2 rounded-xl text-center p-2'>
      <Link to={path}>
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
