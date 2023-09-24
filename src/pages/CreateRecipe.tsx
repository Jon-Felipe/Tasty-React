// components
import FormRow from '../components/FormRow';
import FormRowSelect from '../components/FormRowSelect';

const CreateRecipe = () => {
  return (
    <section>
      <header>
        <h1 className='text-3xl font-semibold tracking-wide'>Create Recipe</h1>
      </header>
      <article className='p-8 shadow rounded-md mt-4'>
        <form className='flex flex-col md:flex-row gap-y-4 md:gap-y-0 md:gap-x-4'>
          <div className='w-full'>
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
            {/* recipe description */}
            <div className='mt-2'>
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
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-y-4 md:gap-x-4 mt-2'>
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
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-y-4 md:gap-x-4 mt-2'>
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
          </div>
          <div className='w-full space-y-2'>
            {/* ingredients */}
            <FormRow
              name='ingredients'
              labelText='Ingredients'
              type='text'
              placeholder='E.g. 1 cup sugar'
              value={''}
              handleChange={() => console.log('ingredients')}
              required
            />
            {/* instructions */}
            <FormRow
              name='instructions'
              labelText='Instructions'
              type='text'
              placeholder='E.g. Mix together the ingredients in one bowl'
              value={''}
              handleChange={() => console.log('instructions')}
              required
            />
            {/* equipment */}
            <FormRow
              name='equipment'
              labelText='Equipment'
              type='text'
              placeholder='E.g. 1 Baking Tray'
              value={''}
              handleChange={() => console.log('equipment')}
              required
            />
            {/* tips */}
            <FormRow
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
      </article>
    </section>
  );
};

export default CreateRecipe;
