import React, { useEffect, useState } from 'react'
import logo1 from '../assests/amazon_BannerSize1.jpg'
import logo2 from '../assests/amazon_BannerSize2.jpg'
import logo3 from '../assests/amazon_BannerSize3.jpg'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import Courses from './Courses';
import Featuring from './Featuring';
import CompanyLogos from './CompanyLogos';
import FrequentQues from './FrequentQues';
import Footer from './footer/Footer';
import { useGetHealthCheckQuery } from '../features/user/userApi';

const Home = () => {
  

  const { data   } = useGetHealthCheckQuery()
     

  const arrImg = [
      {
          id: 1,
          img: logo1,
      },
      {
        id: 2,
        img: logo2,
     },
     {
      id: 3,
      img: logo3,
     },
]


const [imgSlide , setImgSlide] = useState(0)


useEffect(()=>{
     let timer = 0
      timer = setTimeout(()=>{      
        imgSlide === arrImg.length -1 ? setImgSlide(0) : setImgSlide(imgSlide + 1)
      },2000)

      return()=>{
            clearTimeout(timer)
      } 
},[imgSlide])

 return (
    <div className='w-full'>
     <div className='max-w-[96rem] m-auto'>
          <div className='w-full flex flex-col  gap-10'>
              {/* Images Sliders Code here  */}
              <div className='w-full relative group cursor-pointer'> 
                  <img  src={arrImg[imgSlide].img} alt='Images Slide'  loading='lazy' className='w-full h-[12rem] sm:h-[15rem] md:h-[30rem] object-cover md:object-fill'    />
                  <div className='absolute top-0 w-full h-[12rem] sm:h-[15rem] md:h-[30rem] flex justify-between items-center p-2'>
                    <button  className='text-2xl md:text-4xl text-white hidden group-hover:block' onClick={()=> imgSlide === 0 ? setImgSlide(arrImg.length-1) : setImgSlide(imgSlide - 1 ) } > <FaChevronLeft /></button>
                    <button className='text-2xl md:text-4xl text-white hidden group-hover:block' onClick={()=> imgSlide === arrImg.length -1 ? setImgSlide(0) : setImgSlide(imgSlide + 1)}> <FaChevronRight /></button>
                  </div>
                  <div className='w-full absolute bottom-[2rem] flex justify-center gap-3'>
                      {
                         arrImg.map((i , index)=>(
                             <button className={index === imgSlide ? 'w-4 h-2  border-white rounded-full bg-white'  : 'w-2 h-2  border-white border-2 rounded-full text-black'} key={index}  data-btn={index} onClick={(e) => setImgSlide(parseInt(e.target.dataset.btn))}></button>
                         ))
                      }  
                  </div>
              </div>     
              {/* Courses Component  */}
              <div className='w-full'>  
                   <Courses />
              </div>

              {/* Featuring Component */}

              <div className='w-full'>
                  <Featuring />
              </div>

              {/* CompanyLogo Component */}
              <div className='w-full'>
                 <CompanyLogos />
              </div>

              {/* Frequent Questions Component */}
              <div className='w-full'>
                 <FrequentQues />
              </div>
              {/* Footer */}
              <div>
                <Footer />
              </div>
          </div>
     </div>
    </div>
  )
}

export default Home  