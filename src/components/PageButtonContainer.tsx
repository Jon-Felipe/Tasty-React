import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { changePage } from '../features/allRecipes/allrecipesSlice';

type Props = {};

const PageButtonContainer = (props: Props) => {
  const btnStyles =
    'w-28 h-10 bg-orange-100 rounded-md text-orange-500 capitalize flex items-center justify-center gap-2';

  const dispatch = useDispatch<AppDispatch>();
  const { numOfPages, page } = useSelector((state: RootState) => state.recipe);

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };

  return (
    <section className='h-24 mt-8 flex items-center justify-end flex-wrap gap-4'>
      <button type='button' className={`${btnStyles}`} onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className='bg-orange-100 rounded-md'>
        {pages.map((pageNumber) => {
          return (
            <button
              type='button'
              key={pageNumber}
              className={`w-12 h-10 font-bold text-xl text-orange-500 rounded-md ${
                pageNumber == page && 'bg-orange-500 text-white'
              }`}
              onClick={() => dispatch(changePage(pageNumber))}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      <button type='button' className={`${btnStyles}`} onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </section>
  );
};

export default PageButtonContainer;
