import PatronA from '../assets/images/bg-pattern-intro-left-mobile.svg'
import PatronB from '../assets/images/bg-pattern-intro-right-mobile.svg'
import PatronAdesk from '../assets/images/bg-pattern-intro-right-desktop.svg'
import PatronBdesk from '../assets/images/bg-pattern-intro-left-desktop.svg';

export default function TextF({ order, title, text }) {
  return (
    <div className={`${order} text-center lg:text-left lg:pl-[150px]`}>
      <picture>
            <source media='(max-width: 639px)' srcSet={PatronA}  />
            <source media='(min-width: 640px)' srcSet={PatronAdesk}  />
            <img className=' absolute sm:hidden lg:block lg:right-0 lg:mt-[-80px]' src={PatronA} alt="Family Photo" />
      </picture>

      {/* Agregar la línea horizontal */}
      <div className="hidden lg:block absolute w-[250px] top-[90px] h-[1px] bg-white" />

      <h1 className=' text-white font-bold text-[50px] leading-[50px] px-[12px] pt-[100px] pb-6
      lg:pt-[150px] lg:text-[75px] lg:leading-[80px] lg:px-0'> {title} </h1>
      <p className=' text-white font-medium px-9 pb-7 lg:px-2'> {text} </p>
      <button className='text-white border border-white px-8 py-2 '> View plans </button>

      <picture>
            <source media='(max-width: 639px)' srcSet={PatronB}  />
            <source media='(min-width: 640px)' srcSet={PatronBdesk}  />
            <img className='absolute top-[820px] right-0 md:hidden lg:block lg:left-0 lg:top-[425px]' src={PatronB} alt="Family Photo" />
      </picture>

    </div>
  )
}
