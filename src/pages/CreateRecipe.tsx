import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { AppDispatch, RootState } from '../store';
import {
  handleChange,
  handleAddRecipeItem,
} from '../features/recipe/recipeSlice';

// components
import FormRow from '../components/FormRow';
import FormRowSelect from '../components/FormRowSelect';
import { AddRecipeItemType } from '../utils/types';
import { cuisineList, difficultyList, dishTypeList } from '../utils/constants';
import { toast } from 'react-toastify';

const CreateRecipe = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    name,
    description,
    prepTime,
    cookTime,
    servings,
    difficulty,
    cuisine,
    dishType,
    ingredient,
    ingredients,
    instruction,
    instructions,
    equipment,
    equipments,
    tip,
    tips,
  } = useSelector((state: RootState) => state.recipe);

  const handleOnChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const name = e.target.name;
    let value;

    if (name == 'prepTime' || name == 'cookTime' || name == 'servings') {
      value = Number(e.target.value);
    } else {
      value = e.target.value;
    }

    dispatch(handleChange({ name, value }));
  };

  const handleRecipeItemOnAdd = (payload: AddRecipeItemType) => {
    const { name, value } = payload;

    if (
      !ingredient.trim() ||
      !instruction.trim() ||
      !equipment.trim() ||
      !tip.trim()
    ) {
      toast.error('Please provide a value');
      return;
    }

    dispatch(handleAddRecipeItem({ name, value }));
  };

  return (
    <section>
      <h1 className='text-3xl font-semibold tracking-wide mb-4'>
        Create Recipe
      </h1>
      <form>
        <div className='flex flex-col lg:flex-row md:gap-x-8'>
          <section className='lg:basis-2/3'>
            <div className='flex flex-col md:flex-row items-center gap-x-8'>
              {/* recipe image */}
              <FormRow
                name='image'
                labelText='Image'
                type='file'
                value={''}
                handleChange={() => console.log('name')}
                required
              />
              {/* recipe name */}
              <FormRow
                name='name'
                labelText='Name'
                type='text'
                placeholder='E.g. Lemon Garlic Shrimp'
                value={name}
                handleChange={handleOnChange}
                required
              />
            </div>
            {/* recipe description */}
            <div>
              <label
                htmlFor='description'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Description
              </label>
              <textarea
                name='description'
                id='description'
                value={description}
                onChange={handleOnChange}
                placeholder='Add your description here'
                className='border rounded p-2 w-full h-32'
              />
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-x-8'>
              {/* prep time */}
              <FormRow
                name='prepTime'
                labelText='Prep Time'
                type='number'
                placeholder='E.g. 15'
                value={prepTime}
                handleChange={handleOnChange}
                required
              />
              {/* cook time */}
              <FormRow
                name='cookTime'
                labelText='Cook Time'
                type='number'
                placeholder='E.g. 45'
                value={cookTime}
                handleChange={handleOnChange}
                required
              />
              {/* servings */}
              <FormRow
                name='servings'
                labelText='Servings'
                type='number'
                placeholder='E.g. 6'
                value={servings}
                handleChange={handleOnChange}
                required
              />
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-x-8'>
              {/* difficulty */}
              <FormRowSelect
                labelText='Difficulty'
                name='difficulty'
                value={difficulty}
                onChange={handleOnChange}
                list={difficultyList}
                required
              />
              {/* cuisine */}
              <FormRowSelect
                labelText='Cuisine'
                name='cuisine'
                value={cuisine}
                onChange={handleOnChange}
                list={cuisineList}
                required
              />
              {/* dishType */}
              <FormRowSelect
                labelText='Dish Type'
                name='dishType'
                value={dishType}
                onChange={handleOnChange}
                list={dishTypeList}
                required
              />
            </div>
          </section>
          <section className='lg:basis-1/3'>
            <div className='flex flex-col lg:space-y-1'>
              {/* ingredients */}
              <AddRecipeItemInputRow
                name='ingredient'
                labelText='Ingredients'
                type='text'
                placeholder='E.g. 4 Tomatoes'
                value={ingredient}
                handleChange={handleOnChange}
                onClick={() =>
                  handleRecipeItemOnAdd({
                    name: 'ingredients',
                    value: 'ingredient',
                  })
                }
                required
              />
              {ingredients.length > 0 && (
                <RecipeItemList listItems={ingredients} />
              )}
              {/* instructions */}
              <AddRecipeItemInputRow
                name='instruction'
                labelText='Instructions'
                type='text'
                placeholder='E.g. Mix together the ingredients in one bowl'
                value={instruction}
                handleChange={handleOnChange}
                onClick={() =>
                  handleRecipeItemOnAdd({
                    name: 'instructions',
                    value: 'instruction',
                  })
                }
                required
              />
              {instructions.length > 0 && (
                <RecipeItemList listItems={instructions} />
              )}
              {/* equipment */}
              <AddRecipeItemInputRow
                name='equipment'
                labelText='Equipment'
                type='text'
                placeholder='E.g. 1 Baking Tray'
                value={equipment}
                handleChange={handleOnChange}
                onClick={() =>
                  handleRecipeItemOnAdd({
                    name: 'equipments',
                    value: 'equipment',
                  })
                }
                required
              />
              {equipments.length > 0 && (
                <RecipeItemList listItems={equipments} />
              )}
              {/* tips */}
              <AddRecipeItemInputRow
                name='tip'
                labelText='Tips'
                type='text'
                placeholder='E.g. Preheat oven 15 minutes before starting'
                value={tip}
                handleChange={handleOnChange}
                onClick={() =>
                  dispatch(handleAddRecipeItem({ name: 'tips', value: 'tip' }))
                }
                required
              />
              {tips.length > 0 && <RecipeItemList listItems={tips} />}
            </div>
          </section>
        </div>
        <div className='mt-4 text-end'>
          <button
            type='submit'
            className='bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-semibold w-full md:w-36'
          >
            Create Recipe
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateRecipe;

type RecipeItemProps = {
  type: React.HTMLInputTypeAttribute | undefined;
  name: string | undefined;
  value: string | number | readonly string[] | undefined;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  labelText: string | undefined;
  placeholder?: string | undefined;
  required?: boolean | undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const AddRecipeItemInputRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  placeholder,
  required,
  onClick,
}: RecipeItemProps) => {
  return (
    <div className='w-full'>
      <label htmlFor={name} className='text-sm font-medium text-gray-900'>
        {labelText}
      </label>
      <div className='flex items-center justify-between gap-x-2 mt-2'>
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5'
        />
        <button
          type='button'
          onClick={onClick}
          className='w-32 md:w-28 bg-orange-400 text-white rounded-lg px-4 py-2.5 text-sm font-semibold'
        >
          Add
        </button>
      </div>
    </div>
  );
};

type RecipeListItemType = {
  listItems: string[];
};

const RecipeItemList = ({ listItems }: RecipeListItemType) => {
  return (
    <ul className='space-y-1 max-h-20 overflow-y-scroll'>
      {listItems.map((item, index) => (
        <li
          key={index}
          className='flex items-center justify-between px-2 text-sm font-bold'
        >
          {item}
          <span>
            <button type='button'>
              <FaTrash className='h-4 w-4' color='red' />
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};
