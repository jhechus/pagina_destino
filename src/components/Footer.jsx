import logofoo from '../assets/images/logo.svg'
import face from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import insta from '../assets/images/icon-instagram.svg'
import patronfoo from '../assets/images/bg-pattern-footer-mobile.svg'
import patronfoodesk from '../assets/images/bg-pattern-footer-desktop.svg'

export default function Footer() {
  return (
    <div>
      <footer className=' bg-Very-Light-Gray pt-[80px]'>

        <picture className='absolute mt-[-80px] lg:mt-[-95px]'>
            <source media='(max-width: 639px)' srcSet={patronfoo}  />
            <source media='(min-width: 640px)' srcSet={patronfoodesk}  />
            <img className=' w-full sm:w-auto sm:mx-auto sm:pt-5' src={patronfoo} alt="Family Photo" />
        </picture>

        <div className=' lg:flex lg:justify-between lg:items-center lg:px-[150px] lg:mt-[-30px]'>
            <img className=' mx-auto lg:mx-0' src={logofoo} alt="" />

            <div className=' flex justify-center gap-5 pt-8 hover:cursor-pointer'>
                <img src={face} alt="" />
                <img src={twitter} alt="" />
                <img src={pinterest} alt="" />
                <img src={insta} alt="" />
            </div>
        </div>

        {/* la línea horizontal */}
        <div className="w-[90%] mt-10 mx-auto top-[90px] py-[1px] bg-Very-Dark-Violet opacity-40 lg:w-[80%]" />

        <br /><br />

        <div className=' pb-20 lg:grid lg:grid-cols-4 lg:px-[100px]'>

            <div className=' text-center'>
                <h2 className=' pb-5 font-semibold text-Very-Dark-Violet opacity-60 text-lg'> Our company </h2>
                <ul className=' li>[text-dark] li>gap-5'>
                    <li className=' font-medium pt-1'> How we work </li>
                    <li className=' font-medium pt-1'> Why Insure? </li>
                    <li className=' font-medium pt-1'> View plans </li>
                    <li className=' font-medium pt-1'> Reviews </li>
                </ul>
            </div>

            <div className=' text-center pt-10 lg:pt-0'>
                <h2 className=' pb-5 font-semibold text-Very-Dark-Violet opacity-60 text-lg'> Help me </h2>
                <ul className=' li>[text-dark] li>gap-5'>
                    <li className=' font-medium pt-1'> FAQ </li>
                    <li className=' font-medium pt-1'> Terms of use </li>
                    <li className=' font-medium pt-1'> Privacy policy </li>
                    <li className=' font-medium pt-1'> Cookies </li>
                </ul>
            </div>

            <div className=' text-center pt-10 lg:pt-0'>
                <h2 className=' pb-5 font-semibold text-Very-Dark-Violet opacity-60 text-lg'> Contact </h2>
                <ul className=' li>[text-dark] li>gap-5'>
                    <li className=' font-medium pt-1'>   Sales </li>
                    <li className=' font-medium pt-1'> Support </li>
                    <li className=' font-medium pt-1'> Live chat</li>
                </ul>
            </div>

            <div className=' text-center pt-10 lg:pt-0'>
                <h2 className=' pb-5 font-semibold text-Very-Dark-Violet opacity-60 text-lg'> Others </h2>
                <ul className=' li>[text-dark] li>gap-5'>
                    <li className=' font-medium pt-1'>   Careers </li>
                    <li className=' font-medium pt-1'> Press </li>
                    <li className=' font-medium pt-1'> Licenses </li>
                </ul>
            </div>
 
        </div>

      </footer>
    </div>
  )
}
