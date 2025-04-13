import React from 'react';
import style from "./nextArrow.module.css"
import { ChevronRight } from 'lucide-react';


export default function SampleNextArrow(props:any) {
    const { className, onClick } = props;
    return (
        <div className={`${style.style}`} onClick={onClick}>
            <ChevronRight />
        </div>
    );
  }