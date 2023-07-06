type Props = {
  text: string;
};

const Error = ({ text }: Props) => {
  return <p className='text-xl font-semibold text-center'>{text}</p>;
};

export default Error;
