import React, { useRef } from 'react'
import GradientButton from '../components/GradientButton'
import projects from '../components/ProjectsData'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { gsap } from 'gsap/gsap-core';
import { Link } from 'react-router-dom';
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Work = () => {
  const workRef = useRef(null)
  const ProjectRef = useRef(null)
  
  useGSAP(()=>{
    const projectWidth = ProjectRef.current.scrollWidth;
    const scrollDistance = projectWidth - window.innerWidth;

    gsap.to(ProjectRef.current,{
      x: -scrollDistance,
      ease:"linear",
      scrollTrigger:{
        trigger:workRef.current,
        start:"center center",
        end: ()=> `+=${projectWidth}`,
        pin: true,
        scrub:1,
        anticipatePin:1,
        invalidateOnRefresh:true
      }
    }
    )
  })

  return (
    <>
    <div ref={workRef} className='min-h-screen bg-white text-black py-24 lg:py-40 overflow-hidden'>
      {/* title wrapper */}
      <div className='main-container pb-8 lg:pb-12 flex max-md:flex-col gap-6 justify-between items-start md:items-end'>
        <div className='max-w-xl'>
          <h3 className='mb-3'>Selected Work</h3>
          <p  className='text-lg lg:text-xl'>A showcase of my selected projects-designed to inspire, engage, and deliver real result.</p>
        </div>
       <Link to="/projects"><GradientButton text="Explore All" className='btn-light' /></Link>
      </div>
      {/* project wrapper */}
      <div ref={ProjectRef}>
      <div  className="flex gap-4 lg:gap-8 ms-4 lg:ms-[40%] mt-6 pb-6">
        {projects.map(({id,name,image,link})=>(
           <a key={id} href={link} className='relative rounded-2xl w-full min-w-[340px] lg:min-w-xl h-64 lg:h-96 block overflow-hidden group'>
          <img src={image} alt="" className='w-full h-full object-center transition-transform duration-300 group-hover:scale-105'/>
          <span className='absolute top-4 right-4 bg-black text-white uppercase leading-[1.4] font-heading px-5 py-1 rounded-full text-sm lg:text-lg'>{name}</span>
        </a>
        ))}
       
      </div>
      </div>
    </div>
    </>
  )
}

export default Work