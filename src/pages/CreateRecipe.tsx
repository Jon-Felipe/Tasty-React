import { FaPlus } from 'react-icons/fa';

// components
import FormRow from '../components/FormRow';
import FormRowSelect from '../components/FormRowSelect';

const CreateRecipe = () => {
  return (
    <section>
      <h1 className='text-3xl font-semibold tracking-wide mb-4'>
        Create Recipe
      </h1>
      <form>
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
            placeholder='E.g. Lemo Garlic Shrimp'
            value={''}
            handleChange={() => console.log('name')}
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
            value={''}
            onChange={() => console.log('description')}
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
            value={''}
            handleChange={() => console.log('prepTime')}
            required
          />
          {/* cook time */}
          <FormRow
            name='cookTime'
            labelText='Cook Time'
            type='number'
            placeholder='E.g. 45'
            value={''}
            handleChange={() => console.log('cookTime')}
            required
          />
          {/* servings */}
          <FormRow
            name='servings'
            labelText='Servings'
            type='number'
            placeholder='E.g. 6'
            value={''}
            handleChange={() => console.log('servings')}
            required
          />
        </div>
        <div className='flex flex-col lg:flex-row items-center gap-x-8'>
          {/* difficulty */}
          <FormRowSelect
            labelText='Difficulty'
            name='difficulty'
            value={''}
            onChange={() => console.log('difficulty')}
            list={[
              { id: 1, listItem: 'Easy' },
              { id: 2, listItem: 'Medium' },
            ]}
          />
          {/* cuisine */}
          <FormRowSelect
            labelText='Cuisine'
            name='cuisine'
            value={''}
            onChange={() => console.log('cuisine')}
            list={[
              { id: 1, listItem: 'european' },
              { id: 2, listItem: 'asian' },
            ]}
          />
          {/* dishType */}
          <FormRowSelect
            labelText='Dish Type'
            name='dishType'
            value={''}
            onChange={() => console.log('dishType')}
            list={[
              { id: 1, listItem: 'breakfast' },
              { id: 2, listItem: 'lunch' },
            ]}
          />
        </div>
        <div className='flex flex-col lg:flex-row items-center gap-x-8'>
          {/* ingredients */}
          <AddRecipeItemInputRow
            name='ingredients'
            labelText='Ingredients'
            type='text'
            placeholder='E.g. 4 Tomatoes'
            value={''}
            handleChange={() => console.log('servings')}
            required
          />
          {/* instructions */}
          <AddRecipeItemInputRow
            name='instructions'
            labelText='Instructions'
            type='text'
            placeholder='E.g. Mix together the ingredients in one bowl'
            value={''}
            handleChange={() => console.log('instructions')}
            required
          />
          {/* equipment */}
          <AddRecipeItemInputRow
            name='equipment'
            labelText='Equipment'
            type='text'
            placeholder='E.g. 1 Baking Tray'
            value={''}
            handleChange={() => console.log('equipment')}
            required
          />
          {/* tips */}
          <AddRecipeItemInputRow
            name='tips'
            labelText='Tips'
            type='text'
            placeholder='E.g. Preheat oven 15 minutes before starting'
            value={''}
            handleChange={() => console.log('tips')}
            required
          />
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
};

const AddRecipeItemInputRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  placeholder,
  required,
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
        <button className='w-32 md:w-28 bg-orange-400 text-white rounded-lg px-4 py-2.5 text-sm font-semibold'>
          Add
        </button>
      </div>
    </div>
  );
};
