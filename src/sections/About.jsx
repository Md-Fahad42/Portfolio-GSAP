import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
const About = () => {
  const aboutRef = useRef(null)
   useGSAP(()=>{
    SplitText.create(".about-text",{
          type:"lines, chars",
          onSplit(self){
            gsap.set(self.chars,{
              opacity:0.25
            })
            gsap.to(self.chars,{
              opacity:1,
              stagger:0.05,
              scrollTrigger:{
                trigger: aboutRef.current,
                start:"top 70%",
                end:"center center",
                scrub:1
              }
            })
          }
    })
   })

  return (
    <>
      <div ref={aboutRef} className="relative h-screen  bg-white rounded-tl-[60px] rounded-tr-[60px] z-20">
        <div
          className="about-text main-container py-4 lg:py-12 h-full flex justify-center items-center
        font-heading text-black text-2xl md:text-3xl xl:text-4xl"
        >
          Hey, I’m Fahad — a passionate Software Engineer who loves building
          clean, modern, and meaningful digital experiences. I enjoy blending
          creativity and logic, designing interfaces that not only look great
          but feel right to use. I specialize in front-end development, React,
          and modern JavaScript ecosystems — and I’m always exploring how
          design, AI, and technology can come together to create smarter
          products. When I’m not coding, you’ll probably find me experimenting
          with animations, fine-tuning UI details, or learning something new
          that keeps me one step ahead. 
          Let’s build something that stands out.
          
        </div>
      </div>
    </>
  );
};

export default About;
