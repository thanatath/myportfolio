import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { education } from './data';
class Education extends Component {
  render() {
    return (
      <div data-aos="fade-up" id='education' className='mt-[60px] mx-[20px] md:mt-[120px] flex flex-col justify-center '>
        <div className='bg-slate-100 z-20  relative top-[20px] h-[40px] text-[black] pt-1 mx-auto rounded-[25px] w-[150px] text-center shadow-md'>
              <h1 className='align-middle font-bold text-[20px]'>
                Education
              </h1>
            </div>
        <div className='pb-[25px] pt-4 mx-auto md:px-[25px] w-full bg-slate-100/90 rounded-[50px] shadow-xl md:w-[1039px] overflow-clip'>
        
          <div className='flex md:justify-between justify-center md:border-l-4'>
            <div>{render_education(education)}</div>

            <div className='hidden md:block'>
              <img
                className='relative top-[-40px] w-[480px] left-[25px]  mb-[-150px] '
                src={`img/me2.webp`}
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function render_education(education) {
  return education.map((education) => {
    return (
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        key={education.label}
        className='p-[20px] md:pb-0 md:mb-[1px] md:flex'
      >
        <div  className='w-full p-[15px] hover:shadow-lg duration-300 md:pt-[20px] rounded-[45px] md:h-[220px] bg-slate-100 text-[black] flex flex-col md:flex-row'>
          <div className='text-center flex flex-col md:w-3/4 m-auto'>
            <p className='font-bold'> {education.label} </p>

            <span className=' mt-[15px] text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900'>
              {education.major}
            </span>

            <span className=' mt-[15px] text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900'>
              GPA: {education.gpa}
            </span>
          </div>

          <div className='w-full mt-[15px] md:mt-[0px] text-center'>
            <img
              className='w-[220px] mx-auto md:w-[150px]'
              src={`img/${education.pic}` + '.webp'}
            ></img>
            <div className='mt-2 md:mt-2'>

            <span className=' text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 '>
              ({education.year})
            </span>

            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default Education;
