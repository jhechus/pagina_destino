import Patronbox from '../assets/images/bg-pattern-how-we-work-mobile.svg'
import Patrondesk from '../assets/images/bg-pattern-how-we-work-desktop.svg'

export default function Box() {
  return (
    <section className=' pb-[100px]'>
        <div className="bg-Dark-Violet border w-[90%] mx-auto p-4 text-center py-[70px] lg:py-[59px] lg:grid lg:grid-cols-2">

            <picture className='absolute right-[21px] top-[2280px] lg:top-[1440px] lg:right-[70px] 2xl:right-[95px] md:hidden lg:block'>
                <source media='(max-width: 639px)' srcSet={Patronbox}  />
                <source media='(min-width: 640px)' srcSet={Patrondesk}  />
                <img className=' w-full sm:w-auto sm:mx-auto sm:pt-5' src={Patronbox} alt="Family Photo" />
            </picture>
        
            <h2 className=' text-white font-bold text-[40px] mx-auto leading-[40px] pb-10 z-10
            lg:text-left lg:px-[55px] lg:pr-[90px] lg:text-[50px] lg:leading-[45px]'> Find out more about how we work </h2>
            <button className=' text-white text-2xl font-semibold border border-white py-2 px-7
            lg:max-w-[300px] lg:absolute lg:right-[200px] lg:mt-[40px] z-10 '> How we work </button>
        </div>
    </section>
  )
}
