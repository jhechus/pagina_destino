import Fotof from './Fotof'
import TextF from './TextF'

import FamyMobile from '../assets/images/image-intro-mobile.jpg'
import FamyDesk from '../assets/images/image-intro-desktop.jpg'


export default function Familit() {
  return (
    <section className=' bg-Dark-Violet h-max pb-[90px] lg:h-[67vh] lg:grid lg:grid-cols-2 relative'>

        <Fotof 
          order='order-2'
          imgMobile={FamyMobile}
          imgDesktop={FamyDesk}
        />
        <TextF
          order='order-1'
          title='Humanizing your insurance.'
          text='Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.'
        />
        
      
    </section>
  )
}
