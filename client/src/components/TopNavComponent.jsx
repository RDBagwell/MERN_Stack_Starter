import { Link } from "react-router-dom";

function TopNavComponent() {
  return (
    <nav className="flex space-x-3 justify-start mb-3 p-2 bg-slate-500 shadow-lg">
        <Link className="text-white hover:text-[#cccccc]" to={'/'}>Home</Link>
        <Link className="text-white hover:text-[#cccccc]" to={'about'}>About us</Link>
    </nav>
  )
}

export default TopNavComponent