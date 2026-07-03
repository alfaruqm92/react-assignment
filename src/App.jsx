import Navbar from './components/Navbar';



export default function App() {
  return (
    <main className='flex flex-col p-5 gap-6'>
      <header className='flex bg-taupe-300 justify-between items-center'>
        <Navbar />
      </header>   
    </main>
  );
}