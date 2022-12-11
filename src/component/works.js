import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { work_experience } from './data';
class Education extends Component {
  render() {
    return (
      <div data-aos="fade-up" id='education' className='mt-[50px] mx-[20px] md:mt-[120px] flex justify-center '>
        <div className='pb-[50px]   px-[25px] w-full bg-slate-100/90 rounded-[50px] shadow-xl md:w-[1039px] '>
          <div className='bg-slate-100 relative top-[-17px] h-[40px] text-[black] pt-1 mx-auto rounded-[25px] w-[170px] text-center shadow-md'>
            <h1 className='align-middle font-bold text-[20px]'>Work experience</h1>{' '}
          </div>

          <div>
            <div>{render_education(work_experience)}</div>
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
      
        key={education.label}
        className=' p-[20px] md:pb-0 md:mb-[1px]  md:flex'
      >
        <div  className='w-full p-[45px]  md:pt-[30px] rounded-[45px] md:h-[200px] h-[480px] bg-slate-100 text-[black] flex flex-col md:flex-row'>
          <div className='text-center flex flex-col md:w-3/4 m-auto'>
            <p className='font-bold underline text-[25px]'> {education.label} </p>

            <span className=' mt-[15px] text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900'>
              {education.responsibility}
            </span>

          </div>

          <div className='w-full mt-[15px] md:mt-[0px] text-center'>
            <img
              className='h-[120px] mx-auto'
              src={`img/${education.pic}` + '.webp'}
            ></img>
            <span className=' text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 '>
              ({education.year})
            </span>
          </div>
        </div>
      </div>
    );
  });
}

export default Education;