
import NavBar from './components/Navbar'
import Blog from './components/Blog'


function App() {
  return (
    <div>
      <NavBar />
      <h1 className='text-3xl font-bold mt-20 max-w-3xl m-auto'>Blog</h1>
      <div className='max-w-3xl m-auto'>
        {Array.from({ length: 5 }).map((_, index) => {
          return <Blog key={index} />;
        })}
      </div>
      <div className='flex items-center justify-center gap-8 mt-10 pt-20 p-5'>
        <span><img src="/fb.svg" alt="" /></span>
        <span><img src="/Linkedin.svg" alt="" /></span>
        <span><img src="/Group.svg" alt="" /></span>
      </div>
      <p className='text-center p-5'>Copyright ©2020 All rights reserved</p>
    </div>
  );
}


export default App;
