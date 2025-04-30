import React from 'react';
import style from "./nextArrow.module.css"
import { ChevronRight } from 'lucide-react';
import { SlickArrowProps } from '@/types/slickArrow';


export default function SampleNextArrow(props:SlickArrowProps) {
    const {  onClick } = props;
    return (
        <div className={`${style.style}`} onClick={onClick}>
            <ChevronRight />
        </div>
    );
  }