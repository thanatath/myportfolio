import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid,brands } from '@fortawesome/fontawesome-svg-core/import.macro'
class Navbar extends Component {
    render() {
      return (
          <div>

              <div className='fixed shadow-md rounded-[45px] bg-[#5d79bf] md:pl-[23px] md:py-[50px] z-30 w-[350px] md:w-[80px] inset-x-0 md:inset-x-auto mx-auto bottom-2 md:bottom-auto md:top-[25%] md:right-[80px] h-[50px] md:h-auto  '>
              <div className='flex justify-center  md:flex-col gap-3'>
              <a href='#me'><FontAwesomeIcon className='px-1  z-40 mt-3 h-[25px]' icon={solid('address-card')} /></a>
              <a href='#myskill'><FontAwesomeIcon className='px-1 z-40 mt-3 h-[25px]' icon={solid('utensils')} /></a>
              <a href='#education'><FontAwesomeIcon className='px-1 z-40 mt-3 h-[25px]' icon={solid('graduation-cap')} /></a>
              <a href='#work'><FontAwesomeIcon className='px-1 md:ml-1 z-40 mt-3 h-[25px]' icon={solid('building')} /></a>
              <a href='#award'><FontAwesomeIcon className='px-1 z-40 mt-3 h-[25px]' icon={solid('table-tennis-paddle-ball')} /></a>
              </div>
              </div>
          </div>
      )}};


export default Navbar;