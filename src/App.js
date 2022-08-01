import React from 'react';
import { Route, Routes } from 'react-router';
import { Header } from './components';
import { AnimatePresence } from 'framer-motion';
import { CreateContainer, MainContainer } from './components';


const App = () => {
  return (

<AnimatePresence exitBeforeEnter> {/* By wraping everything inside AnimatePresense it makes this whole component have the animations and we need not import this on every component so we are adding it here in the top level component */}
    <div className='w-screen h-auto flex flex-col bg-primary'>
      <Header />

      <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
        <Routes>
            <Route path='/*' element={<MainContainer />}/>
            <Route path='/createItem' element={<CreateContainer />}/>
        </Routes>
      </main>
    </div>
</AnimatePresence>
    
  )
}

export default App;