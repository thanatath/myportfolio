import React, { Component, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { adventure_time } from 'react-json-pretty/themes/adventure_time.css';
import { me_info,skilldatas,education,work,award } from './data.js';
import JSONPretty from 'react-json-pretty';

 
class Myskill extends Component {

  constructor (props) {
    super(props);
    this.state = {
      code_props:JSON.stringify(skilldatas),
 
      modalContent:{
        title:'More Data',
        text:('Personal info \n'+JSON.stringify(me_info,null,2)+'\nEducation info \n'+JSON.stringify(education,null,2)+'\nWork info \n'+JSON.stringify(work,null,2)+'\nAward info \n'+JSON.stringify(award,null,2)),
        type:'code'
      }
    };
  }
  render() {

    

    return (
      <div className='flex flex-col md:mt-[-60px] mt-[65px] md:flex-row justify-center'>
        <div
          data-aos='slide-right'
          id='myskill'
          className='px-[18px] md:mt-[150px] w-full md:w-[950px] md:relative'
        >
          <div className='pb-[50px] px-[25px] w-full bg-slate-100/90 rounded-[50px] shadow-xl '>
            <div className='bg-slate-100 relative top-[-17px] h-[40px] text-[black] pt-1 mx-auto rounded-[25px] w-[150px] text-center shadow-md'>
              <h1 className='align-middle font-bold text-[20px]'>
                STACK SKILL
              </h1>{' '}
            </div>

            <div className='relative bg-[white] h-[500px] hidden md:block -z-10 rounded-l-[45px] w-1/5 top-[-40px] mb-[-500px] left-[-25px]' />

            {render_skill(skilldatas)}
          </div>
        </div>
        <div
          data-aos='slide-left'
          id='myskill'
          className='  mt-[170px] hidden md:block w-[550px] relative '
        >
          <div className='pb-[40px] pt-[35px] px-[25px] w-full bg-[#1e1e1e] rounded-[45px] shadow-xl '>
            {CodeComponent(this.state)}

            <div className='flex justify-center'>
              <button
                className='rounded-[45px] mt-[35px] text-black hover:text-[white] bg-[#f5bb12] h-[45px] w-[120px]'
                data-modal-toggle='morecode_madal'
                data-bs-toggle="modal"
                onClick={() => {this.props.onModalContent(this.state.modalContent)}}
               
              >
                More Data
              </button>

         




             


            </div>
          </div>
        </div>
      </div>
    );
  }
}



function img_skill(data) {
  return data.split(',').map((data) => {
    return (
      <div
        key={data}
        className='h-[60px] md:h-[80px]  m-auto mx-[5px] my-[10px] md:my-[1px] py-3'
      >
        <img
          className='h-[60px] md:h-[80px] mx-auto'
          src={`img/${data}.webp`}
        />
        <span className='hidden md:block font-softbold'>{data}</span>
      </div>
    );
  });
}

function render_skill(skilldatas) {
  return skilldatas.map((skilldatas) => {
    return (
      <div key={skilldatas.label} className='mb-[35px] md:mb-[45px] md:flex'>
        <div className='md:w-1/4 w-full mx-auto mb-3 md:flex '>
          <div className='text-[black]  rounded-[45px] md:my-auto md:ml-[25px] md:pt-[50px] bg-gray-100 md:bg-transparent font-semibold text-center  md:text-[20px]'>
            {skilldatas.label}
          </div>
        </div>
        <div className='w-full mx-auto'>
          <div className='text-[black] justify-center md:justify-start text-center mt-2 flex flex-wrap'>
            {img_skill(skilldatas.data)}
          </div>
        </div>
      </div>
    );
  });
}

function CodeComponent(props) {
  return <JSONPretty data={props.code_props}></JSONPretty>;
}

export default Myskill;
