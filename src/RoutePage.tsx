import { Link } from "react-router-dom"

const RoutePage = () => {
  return (
    <section className="h-[100vh] w-full grid place-items-center">
      <h1 className="text-3xl text-center font-semibold leading-10">This is the <strong>/page</strong> route</h1>
      <sub className="text-lg text-center uppercase max-w-lg text-slate-300">This is just for example/showcase purpose. Feel free to delete this.</sub>

      <Link to={"/"} className="text-xl underline text-slate-300 hover:text-slate-500">
        Go Back
      </Link>
    </section>
  )
}

export default RoutePage