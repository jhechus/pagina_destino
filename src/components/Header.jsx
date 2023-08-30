import Navbar from "./Navbar"
import Logo from '../assets/images/logo.svg'

export default function Header() {
  return (
    <header className=" w-full top-0 left-0 right-0 bg-white flex justify-between items-center px-5 py-5 sm:px-0 sm:py-0">
      <img className=" sm:pl-10" src={Logo} alt="" />
      <Navbar />
    </header>
  )
}
