import { useEffect, useRef, useState } from "react";



const VARIANT_CLASS = {

  fade: "reveal",

  scale: "reveal-scale",

};



const ScrollReveal = ({

  children,

  className,

  delay = 0,

  variant = "fade",

  as: Tag = "div",

  style,

  ...props

}) => {

  const ref = useRef(null);

  const [visible, setVisible] = useState(false);

  const revealClass = VARIANT_CLASS[variant] || VARIANT_CLASS.fade;



  useEffect(() => {

    const el = ref.current;

    if (!el) return;



    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setVisible(true);

          observer.disconnect();

        }

      },

      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }

    );



    observer.observe(el);

    return () => observer.disconnect();

  }, []);



  return (

    <Tag

      ref={ref}

      className={`${revealClass} ${visible ? "reveal-visible" : ""} ${className || ""}`}

      style={{ "--reveal-delay": `${delay}ms`, ...style }}

      {...props}

    >

      {children}

    </Tag>

  );

};



export default ScrollReveal;

