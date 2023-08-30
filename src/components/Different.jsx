import Process from '../assets/images/icon-snappy-process.svg'
import Prices from '../assets/images/icon-affordable-prices.svg'
import People from '../assets/images/icon-people-first.svg'

export default function Different() {
  return (
    <section>
        <div className="w-[150px] mt-[150px] mx-auto pt-[1px] h-[1px] bg-Dark-Violet opacity-30 mb-[50px]
        lg:ml-[150px] lg:mt-[270px]" />

        <h1 
        className="text-center font-bold text-[40px] mb-[50px] text-Very-Dark-Violet
        lg:text-left lg:ml-[150px]
        "> We’re different </h1><br/>
        
        <div className=' text-center lg:flex lg:text-left lg:mx-auto lg:right-0 lg:left-0 lg:px-[150px] lg:gap-[50px] xl:gap-[200px] '>

            <div className='mb-[60px]'>
                <img className='mx-auto lg:mx-0' src={Process} alt="processimg" />
                <h2 className=' font-semibold text-[30px] mt-[20px] text-Very-Dark-Violet'> Snappy Process </h2>
                <p className=' text-Dark-Grayish-Violet px-10 mt-4
                lg:px-0 lg:max-w-[350px]' > Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms. </p>
            </div>

            <div className='mb-[60px]'>
                <img className='mx-auto lg:mx-0' src={Prices} alt="processimg" />
                <h2 className=' font-semibold text-[30px] mt-[20px] text-Very-Dark-Violet'> Affordable Prices </h2>
                <p  className=' text-Dark-Grayish-Violet px-10 mt-4
                lg:px-0 lg:max-w-[350px]'> We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible. </p>
            </div>

            <div className='mb-[60px]'>
                <img className='mx-auto lg:mx-0' src={People} alt="processimg" />
                <h2 className=' font-semibold text-[30px] mt-[20px] text-Very-Dark-Violet'> People First </h2>
                <p  className=' text-Dark-Grayish-Violet px-10 mt-4
                lg:px-0 lg:max-w-[350px]'> Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it. </p>
            </div>

        </div>


    </section>
  )
}
