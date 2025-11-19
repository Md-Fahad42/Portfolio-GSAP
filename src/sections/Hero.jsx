import React, { useRef } from "react";
import GradientButton from "../components/GradientButton";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
const Hero = () => {
  const heroRef = useRef(null);
  // pin hero section
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
    });
    SplitText.create("h1", {
      type: "lines, words",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        gsap.from(self.words, {
          y: 100,
          opacity: 0,
          stagger: 0.1,
        }); 
      },
    });
    SplitText.create("h2", {
      type: "lines, words",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        gsap.from(self.words, {
          y: 100,
          opacity: 0,
          stagger: 0.1,
          delay:0.6
        }); 
      },
    });
    gsap.from(".gradient-btn",{
      opacity:0,
      y:40,
      duration:0.5,
      ease:"power2.out",
      delay:1.5
    })

    gsap.from(".star",{
      scale:0,
      rotate:180,
      opacity:0,
      transformOrigin:"center",
       duration:1.5,
       ease:"back.out(1.6)",
       onComplete:()=>{
        gsap.to(".star",{
          rotate:"+=360",
          duration:20,
          ease:"linear",
          repeat:-1
        })
       }
    })
  },{scope:heroRef});
  return (
    <>
      <div ref={heroRef} className="relative z-10 overflow-hidden">
        <div className="main-container h-screen  flex flex-col lg:py-12 lg:justify-center items-start max-lg:pt-40">
          <h1 className="text-3xl lg:text-[3.2vw] uppercase font-heading font-semibold ">
            MD Fahad Ansari
          </h1>
          <h2 className="text-6xl lg:text-[8vw] font-heading font-bold `leading-[1]` tracking-tight mt-8 mb-9">
            Software Developer <br />&{" "}
            <span className="text-stroke">Designer</span>
          </h2>
          <GradientButton text="LET'S TALK" className="gradient-btn" />
        </div>
        <div className="star absolute z-10 top-80 lg:top-28 right-[-32%] lg:right-[-12%]">
          <svg
            className="h-[48vh] lg:h-[80vh]"
            width="100%"
            height="100%"
            viewBox="0 0 653 631"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M290.361 1.55611L333.686 284.91L333.88 286.179L334.595 285.114L496.712 43.7172L530.894 66.1542L354.53 298.39L353.719 299.458L355.031 299.182L644.761 238.164L651.694 276.116L359.086 321.398L357.759 321.603L358.897 322.315L605.849 476.828L581.885 510.336L344.939 341.783L343.894 341.039L344.16 342.294L403.733 622.683L363.139 630.092L319.819 346.737L319.626 345.469L318.911 346.534L156.783 587.928L122.522 565.048L298.964 333.261L299.777 332.192L298.463 332.469L8.73045 393.474L1.564 354.212L294.405 310.247L295.74 310.046L294.596 309.329L47.5646 154.375L71.6092 121.305L308.567 289.864L309.612 290.609L309.345 289.353L249.767 8.96559L290.361 1.55611Z"
              stroke="white" // 🤍 white outline
              strokeWidth="2" // outline ka thickness
              strokeLinecap="round" // smooth edges
              strokeLinejoin="round"
              fill="none" // andar transparent
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Hero;
