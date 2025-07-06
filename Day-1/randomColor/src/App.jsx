import React, { useState } from 'react'

const App = () => {

  const [typeofColor, settypeofColor] = useState('hex');

  const [color, setcolor] = useState('#fffff');

  const randomUtil = (length) => {
    return Math.floor(Math.random()*length);
  }

  const HandelHexColorHandeler = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    let hexColor = '#';

    for (let i = 0; i<6; i++) {
      hexColor +=hex[randomUtil(hex.length)];
    }

    setcolor(hexColor);
  }



  const HandelRGBColorHandeler = () => {
      const r = randomUtil(256)
      const g = randomUtil(256)
      const b = randomUtil(256)

      setcolor(`rgb(${r},${g},${b})`);
  }



  return (
    <div className='w-full  h-screen flex px-4  justify-center items-center flex-col gap-5' style={{backgroundColor:color}}>
      <h1 className='text-3xl  lg:text-5xl font-semibold'>Random Color Generator</h1>
      <div className='border w-full lg:w-1/2 py-10 px-2 rounded flex flex-col items-center justify-center  gap-4 bg-white'>
        <h2 className='text-3xl'>{color}</h2>
        <div className='flex flex-col items-center lg:flex-row gap-10 '>
          <button onClick={typeofColor == 'hex' ? HandelHexColorHandeler : HandelRGBColorHandeler} className='border px-4 py-2 rounded active:scale-80 transition-all hover:rounded-xl hover:bg-green-400 w-fit'>Generate Color</button>
          <button onClick={() => settypeofColor('hex')} className='border px-4 py-2 rounded active:scale-80 transition-all hover:rounded-xl hover:bg-green-400 w-fit'>Select For Hex Color Color</button>
          <button onClick={() => settypeofColor('rgb')} className='border px-4 py-2 rounded active:scale-80 transition-all hover:rounded-xl hover:bg-green-400 w-fit'>Generate RGB Color</button>
        </div>
      </div>
    </div>
  )
}

export default App