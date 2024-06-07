import React from 'react';
import Navbar from './components/Navbar';
import BackgroundImage from './sections/BackgroundImage';
import Group from './sections/Group';
import Message from './sections/Message';
import Group2 from './sections/Group2';
import Videocall from './sections/Videocall';
import Privacy from './sections/Privacy';
import Chat from './sections/Chat';
import Chat2 from './sections/Chat2';
import Chat3 from './sections/Chat3';
import Footer from './sections/Footer';

const App = () => {
  return (
    <main className='relative'>
      <Navbar />

      <section>
        <BackgroundImage />
      </section>

      <section>
        <Group />
      </section>

      <section>
        <Message />
      </section>

      <section>
        <Group2 />
      </section>

      <section className=' padding '>
        <Videocall />
      </section>

      <section className=' padding bg-coral-black'>
        <Privacy />
      </section>

      <section className=' padding '>
        <Chat />
      </section>
      
      <section className=' padding '>
        <Chat2 />
      </section>

      <section className=' padding '>
        <Chat3 />
      </section>

      <section className=' bg-coral-black padding-x padding-t pb-8'>
        <Footer />
      </section>
      
    </main>
  );


}

export default App;
