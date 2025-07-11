import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center '>
      <h1 className='text-[30px] font-[600] m-[20px]'>Counter</h1>
      <div className="display flex flex-col justify-evenly items-center">
        <p className={twMerge(
          `text-[25px] text-black`,
          count <= -5 && `text-red-500`,
          count <= -50 && `text-orange-500`,
          count <= -500 && `text-yellow-500`,
          count >= 5 && `text-green-500`,
          count >= 50 && `text-blue-500`,
          count >= 500 && `text-purple-500`,
        )}>
          {count}
          </p>
        <div className=''>
          <button className='btnPlus' onClick={() => setCount((prev) => prev + 1)}>
            +1
          </button>
          <button className='btnPlus' onClick={() => setCount((prev) => prev + 10)}>
            +10
          </button>
          <button className='btnPlus' onClick={() => setCount((prev) => prev + 100)}>
            +100
          </button>
        </div>
        <div>
          <button className='btnMinus' onClick={() => setCount((prev) => prev - 1)}>
            -1
          </button>
          <button className='btnMinus' onClick={() => setCount((prev) => prev - 10)}>
            -10
          </button>
          <button className='btnMinus' onClick={() => setCount((prev) => prev - 100)}>
            -100
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
