

export default function Fotof({ order, imgMobile, imgDesktop }) {
  return (
       <picture className={`${order} lg:absolute lg:right-0 lg:pr-[170px] lg:pt-[100px]`}>
            <source media='(max-width: 639px)' srcSet={imgMobile}  />
            <source media='(min-width: 640px)' srcSet={imgDesktop}  />
            <img className=' w-full sm:w-auto sm:mx-auto sm:pt-5' src={imgMobile} alt="Family Photo" />
        </picture>
  )
}
