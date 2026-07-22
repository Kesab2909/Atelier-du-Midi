import { useEffect, useState } from "react";

import { MouseParallax } from "react-just-parallax";



import PlusSvg from "../../assets/svg/PlusSvg";



export const Gradient = () => {

  return (

    <>

      <div className="relative z-1 h-6 mx-2.5 bg-n-11/90 shadow-premium rounded-b-[1.25rem] lg:h-6 lg:mx-8" />

      <div className="relative z-1 h-6 mx-6 bg-n-11/50 shadow-premium rounded-b-[1.25rem] lg:h-6 lg:mx-20" />

    </>

  );

};



export const BottomLine = () => {

  return (

    <>

      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-gradient-to-r from-transparent via-n-6 to-transparent pointer-events-none xl:block" />



      <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />



      <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />

    </>

  );

};



export const HeroAtmosphere = () => {

  return (

    <div

      className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100%,56rem)] h-[32rem] pointer-events-none"

      aria-hidden="true"

    >

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(172,106,255,0.22)_0%,_transparent_68%)]" />



      <div

        className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-full bg-[linear-gradient(180deg,_rgba(172,106,255,0.12)_0%,_transparent_85%)] animate-beam-pulse"

        style={{ clipPath: "polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)" }}

      />



      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-color-1/12 rounded-full blur-[100px] animate-glow-breathe" />

      <div className="absolute top-[18%] right-[22%] w-56 h-56 bg-color-5/12 rounded-full blur-[80px] animate-drift-slow" />

      <div className="absolute top-[42%] left-[38%] w-40 h-40 bg-color-6/8 rounded-full blur-[60px] animate-drift-slower" />

    </div>

  );

};



const Rings = () => {

  return (

    <>

      <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-orbital-slow" />

      <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/8 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[inset_0_0_80px_rgba(172,106,255,0.06)]" />

      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-color-1/20 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_60px_rgba(172,106,255,0.08)]" />

    </>

  );

};



const OrbitalBall = ({ mounted, className, size }) => (

  <div

    className={`${size} -ml-1 rounded-full bg-gradient-to-b from-[#DD734F] to-[#1A1A32] shadow-[0_0_24px_rgba(172,106,255,0.35)] transition-all duration-700 ease-spring ${

      mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"

    } ${className || ""}`}

  />

);



export const BackgroundCircles = ({ parallaxRef }) => {

  const [mounted, setMounted] = useState(false);



  useEffect(() => {

    setMounted(true);

  }, []);



  return (

    <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">

      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_rgba(172,106,255,0.08)_0%,_transparent_55%)]" />

      <Rings />



      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">

          <OrbitalBall mounted={mounted} size="w-2 h-2" className="-mt-36" />

        </div>



        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">

          <OrbitalBall mounted={mounted} size="w-4 h-4" className="-mt-32" />

        </div>



        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">

          <div

            className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block shadow-[0_0_20px_rgba(185,174,223,0.45)] transition-all duration-700 ease-spring ${

              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"

            }`}

          />

        </div>



        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">

          <div

            className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full shadow-[0_0_14px_rgba(185,174,223,0.4)] transition-all duration-700 ease-spring ${

              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"

            }`}

          />

        </div>



        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">

          <div

            className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full shadow-[0_0_28px_rgba(136,229,190,0.4)] transition-all duration-700 ease-spring ${

              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"

            }`}

          />

        </div>



        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">

          <div

            className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full shadow-[0_0_28px_rgba(136,229,190,0.4)] transition-all duration-700 ease-spring ${

              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"

            }`}

          />

        </div>

      </MouseParallax>

    </div>

  );

};

