

export default function Navbar() {
  return (
    <nav className='fixed flex justify-center items-center z-10 gap-5 p-5'>
        <h4>
            <a href="#">DebiEdu</a>
        </h4>

        <div className='flex gap-6'>
            <a href='#'>About</a>
            <a href='#'>Experience</a>
            <a href='#'>Contact</a>
        </div>

        <div className='flex gap-4'>
            <button className='bg-blue-700 text-white w-19 h-8 rounded-lg '>
                Log In           
            </button>

            <a className='text-blue-700 text-md '>Sign Up</a>
        </div>
    </nav>
  );
}

