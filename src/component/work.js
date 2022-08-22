import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { work } from './data.js';
class Work extends Component {
  render() {
    const box_render = work.map((id) => work_box(id));

    return (
      <div data-aos="fade-up" id='work' className='px-[25px] mt-[50px] md:mt-[120px] md:px-[120px] '>
        <div className='w-full px-5 mb-4  py-[45px] bg-slate-100/90 rounded-[50px] shadow-xl '>
          <div className='bg-slate-100 relative top-[-60px] h-[40px] mb-[-35px] text-[black] pt-1 mx-auto rounded-[25px] w-[150px] text-center shadow-md'>
            <h1 className='align-middle font-bold text-[20px]'>EXPERIENCE</h1>{' '}
          </div>

          <div className='flex overflow-x-auto gap-3  md:px-[35px] '>
            {box_render}
          </div>
 

        </div>
      </div>
    );
  }
}

function work_box(work_data) {
  var github = '';

  if (work_data.github !== 'None') {
    github = (
      <a href={work_data.github} target='_blank'>
        <button className='w-[120px]  shadow-sm hover:bg-[white] text-black hover:text-[black] ease-in-out duration-300 h-[50px] rounded-[15px] border-2'>
          <FontAwesomeIcon
            className='px-1  h-4 hover:h-5 ease-in-out duration-300'
            icon={brands('github')}
          />
          GITHUB
        </button>
      </a>
    );
  }
  var website = '';
  if (work_data.url !== 'None') {
    website = (
      <a href={work_data.url} target='_blank'>
        <button className='w-[120px]  shadow-sm hover:bg-[white] text-black hover:text-[black] ease-in-out duration-300 h-[50px] rounded-[15px] border-2'>
        <FontAwesomeIcon
              className='px-1  h-4 hover:h-5 ease-in-out duration-300'
              icon={solid('sitemap')}
            />
          WEBSITE
        </button>
      </a>
    );
  }

  

  return (
    <div
    data-aos="fade-in"
      key={work_data.project}
       
      className='w-full flex-shrink-0 md:w-1/3 md:mx-auto mb-[35px]  mt-2 bg-[white] overflow-hidden shadow-lg p-5 md:ease-in-out md:duration-300 rounded-[45px]'
    >
      <div className='bg-[#34425E] h-[180px]  mb-[-155px]  relative top-[-20px] w-[150%] mx-[-30px] rounded-t-[45px]'></div>

      <div className=''>
        <img
          src={'img/' + work_data.pic}
          className='mx-auto relative     h-[100px]'
        ></img>
      </div>

      <h2 className='underline bg-[#272C38] w-[200px] rounded-[35px] mt-[55px]  h-[35px] pt-1 relative top-[-38px] mb-[-29px]  mx-auto  text-center text-[white] underline-offset-4 mb-2'>
        {work_data.project}
      </h2>

 
 

      <p className='mb-[12px] mt-[-35px] text-center underline text-[#004C4B]'>
        {work_data.type}{' '}
      </p>





      <p className=' mb-2'>
        <span className=' text-[#40908B]'>STACK:</span>{' '}
        {push_badge(work_data.stack)}
      </p>
      <div className=' mb-2 '>
        <span className='text-[#40908B] '>DETAIL: </span>
        <span className='text-black'>{work_data.detail}</span>
        

      </div>

      <p className=' mb-2 '>
        <span className='text-[#40908B] '>YEAR: </span>
        <span className='text-black'>{work_data.year}</span>
      </p>

      <div className='flex justify-center mt-[25px] gap-2'>
      {website}
        {github}
        </div>
    </div>
  );
}

function push_badge(stack) {
  let badge_render = stack
    .split(',')
    .map((id) => (
      <span  key={id} className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800'>
        {' '}
        {id}{' '}
      </span>
    ));

  return badge_render;
}

export default Work;


