import React from 'react'
import style from "./prevArrow.module.css"
import { ChevronLeft } from 'lucide-react';
import { SlickArrowProps } from '@/types/slickArrow';

export default function SamplePrevArrow(props:SlickArrowProps) {
    const {  onClick } = props;
    return (
      <div className={`${style.style}`} onClick={onClick}>
          <ChevronLeft />
      </div>
  );
  }
