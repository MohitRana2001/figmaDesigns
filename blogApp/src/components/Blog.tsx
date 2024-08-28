export default function Blog() {
    return (
      <div className='flex flex-col gap-3 py-8 border-b border-gray-300'>
        <h1 className='font-bold text-xl'>
          UI Interactions of the week
        </h1>
        <div className='flex gap-2 text-sm'>
          <span className='text-gray-500'>12 Feb 2019</span>
          <span className='text-gray-900'>|</span>
          <span className='text-gray-300'>Express, Handlebars</span>
        </div>
        <p className='text-gray-600 text-sm'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
    );
  }
  