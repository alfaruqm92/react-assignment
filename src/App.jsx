import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChoose }  from './components/WhyChoose';

export default function App() {
  return (
    <main className='flex flex-col gap-2'>
      <header className='flex justify-between items-center'>
        <Navbar />
      </header> 
       <section id='hero-section'>
        <Hero />
      </section>  

      <section id='why-choose-us-section'>
        <WhyChoose />
      </section>
    </main>
  );
}