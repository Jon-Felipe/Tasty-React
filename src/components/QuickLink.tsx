import { Link } from 'react-router-dom';

type Props = {
  path: string;
  icon: string;
  text: string;
};

const QuickLink = ({ path, icon, text }: Props) => {
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

export default QuickLink;
