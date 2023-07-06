type Props = {
  text: string;
};

const NotFound = ({ text }: Props) => {
  return <p className='text-xl font-semibold text-center'>{text}</p>;
};

export default NotFound;
