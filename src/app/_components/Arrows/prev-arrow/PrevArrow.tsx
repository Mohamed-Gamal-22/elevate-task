import React from 'react'
import style from "./prevArrow.module.css"
import { ChevronLeft } from 'lucide-react';

export default function SamplePrevArrow(props:any) {
    const { className, onClick } = props;
    return (
      <div className={`${style.style}`} onClick={onClick}>
          <ChevronLeft />
      </div>
  );
  }
