import React from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';

type Props = {};

const PageButtonContainer = (props: Props) => {
  const btnStyles =
    'w-28 h-10 bg-orange-500 border-transparent rounded-md text-white capitalize flex items-center justify-center gap-2';

  const dispatch = useDispatch<AppDispatch>();
  const { numOfPages } = useSelector((state: RootState) => state.recipe);

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {};
  const prevPage = () => {};

  return (
    <section className='h-24 mt-8 flex items-center justify-end flex-wrap gap-4'>
      <button type='button' className={`${btnStyles}`} onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <button type='button' className={`${btnStyles}`} onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </section>
  );
};

export default PageButtonContainer;
