import reactLogo from '/react.svg'
import reactMegaLogo from '/react_mega.svg'
import viteLogo from '/vite.svg'
import tailwindLogo from '/tailwind.svg'
import reactRouterLogo from '/react_router.svg'
import {Link} from "react-router-dom"

const Component = () => {
  return (
    <article className='bg-slate-400/10 p-4 border-2 border-slate-800 rounded-lg'>
      <p className='text-lg uppercase text-slate-300'>Navigate</p>
      <p className='text-base text-slate-300'><Link to={"/page"} className='underline font-semibold hover:text-slate-400'>Click Here </Link> to go to <strong>/page</strong> route.</p>
    </article>
  )
}

function App() {
  
  return (
    <section className='w-full h-[100vh] grid place-items-center'>
      <a href='https://github.com/USKhokhar/create-react-tt' target='_blank'>
        <img src={reactMegaLogo} alt='react_mega_logo' className='animate-spin-slow' width={192}/>
      </a>
      <h1 className='text-3xl text-center font-semibold leading-10'>Focus On Your Project, We got the rest covered</h1>
      <sub className='text-base text-center uppercase max-w-lg text-slate-300'>A reactjs starter template to get you started quickly with your project</sub>

      <Component />

      <div className='w-2/5 flex items-center justify-between '>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="hover:animate-bounce" alt="Vite logo"  width={64} />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="hover:animate-bounce" alt="React logo" width={64}  />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={tailwindLogo} className="hover:animate-bounce" alt="React logo"  width={64} />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactRouterLogo} className="hover:animate-bounce" alt="React logo"  width={64} />
        </a>
      </div>

      <footer>
        <p className='text-sm text-slate-300'>Created by {"  "}
          <a href="https://github.com/USKhokhar" target='_blank' className='underline font-semibold hover:text-slate-400'>USKhokhar</a>
          ✌
        </p>
      </footer>
    </section>
  )
}

export default App
