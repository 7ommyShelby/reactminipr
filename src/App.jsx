import './App.css'
import ImageGal from './pr/imggal/ImageGal';
import Modeal from './pr/modal/Modeal';
import Todo from './pr/todo/Todo';
import Watch from './pr/stopwatch/Watch';
import Chips from './pr/chips/Chips';
import Guess from './pr/guess_number/Guess';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pr/Home';
import Counter from './pr/counter/Counter';
import Accordion from './pr/accordian/Accordion';
import StringTransform from './pr/str/StringTransform';
import Otp from './pr/otp/Otp';

function App() {


  return (

    <>
      <div className='h-fit bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route path='' element={<ImageGal />} />
              <Route path='modal' element={<Modeal />} />
              <Route path='todolist' element={<Todo />} />
              <Route path='stopwtch' element={<Watch />} />
              <Route path='chip' element={<Chips />} />
              <Route path='guess' element={<Guess />} />
              <Route path='counter' element={<Counter />} />
              <Route path='accordian' element={<Accordion />} />
              <Route path='strtrns' element={<StringTransform />} />
              <Route path='otp' element={<Otp />} />
            </Route>
          </Routes>
        </BrowserRouter>



        {/* <Counter /> */}
        {/* <Modeal /> */}
        {/* <Todo/> */}
        {/* <Watch /> */}
        {/* <Chips /> */}
        {/* <Guess/> */}
      </div>
    </>
  )
}

export default App
