import React, {useEffect} from 'react';
import './Button.css';
import {AiOutlineArrowRight} from 'react-icons/ai';

import AOS from "aos";
import "aos/dist/aos.css";

const Button = ({title, nonAnimation}) => {

  useEffect(() => {
    AOS.init({
        easing: 'ease',
        once: false,
        offset: 100
      });
    AOS.refresh();
  }, []);

  return (
    <button data-aos={nonAnimation? "" :"zoom-in"} className='flex btnComponent items-center xs:!p-[5px] xs:!px-2' type="submit"> {title} <AiOutlineArrowRight /></button>
  )
}

export default Button
