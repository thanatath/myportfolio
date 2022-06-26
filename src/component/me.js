import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid,brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import {me_info} from './data.js'


class MyName extends Component {






  render() {
    const name = me_info.name;
    const lname = me_info.lname;
    const pic = 'img/' + me_info.pic;
    const about_me = me_info.about_me;
    const email = me_info.email;
    const phone = me_info.phone;
    const github = me_info.github;
    const cv = me_info.cv;
    return (
      <div data-aos="fade-in" id='me' className=' w-full mx-auto mt-[50px] mb-[50px] '>
        <p className='text-center text-[20px] mb-[35px]'>Hola i'm</p>
        <h1 className='text-center text-[45px]'>{name}</h1>
        <h3 className='text-center text-[20px] mb-[25px]'>{lname}</h3>

        <div className='flex justify-center md:gap-8 mb-[25px]'>
          <span><FontAwesomeIcon className='mx-2' icon={solid('envelope')} />{email}</span>
          <span><FontAwesomeIcon className='mx-2' icon={solid('phone')} />{phone}</span>
        
        </div>

        <div className='flex text-center w-full mx-auto mb-[25px] gap-8 justify-center relative md:left-[-17px]'>
          
          <button className='w-[150px] shadow-md hover:bg-[white] hover:text-[black] ease-in-out duration-300 h-[50px] rounded-[15px] border-2'>
          <FontAwesomeIcon className='px-1' icon={solid('address-card')} />
          <a href={cv} target='_blank'>
            Download CV
            </a>
          </button>

          <button className='w-[120px] shadow-md hover:bg-[white] hover:text-[black] ease-in-out duration-300 h-[50px] rounded-[15px] border-2'>
          <a href={github} target='_blank'>
          <FontAwesomeIcon className='px-1' icon={brands('github')} />
          
            GITHUB
            </a>
          </button>
        </div>
        <div className='flex  flex-col md:justify-center md:flex-row gap-[25px]'>
          <div>
            <img
            data-aos="slide-right"
              className='rounded-[35px] shadow-xl  m-auto ease-in-out duration-300 px-[20px] md:px-[0px] w-full md:w-[450px]'
              src={pic}
            />
          </div>
          <div 
          data-aos="slide-left"
          className=' w-full px-5 md:w-[450px] md:text-[black] md:bg-slate-100/90 md:px-[45px] md:py-[250px] rounded-[35px] md:h-[600px] md:my-auto'>
            <h1 className='text-center'>About Me</h1>

            <p>{about_me}</p>
          </div>
        </div>
        
      </div>
    );
  }
}



export default MyName;
