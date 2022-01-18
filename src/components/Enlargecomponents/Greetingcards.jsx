import React from "react";
import greetings from "../../images/Greetingcard.svg";
import arrow from "../../images/arrow.svg";
import { Link } from "react-router-dom";
import arrow2 from "../../images/arrowup.svg";
import Sidebar from "../Sidebar";

import Hamburger from 'hamburger-react'


import { motion } from "framer-motion";
function GreetingCard() {
  const [open,setopen]=React.useState(false)
  const [state, setState] = React.useState(0);
  React.useEffect(() => {
    if(window.innerWidth>=600){
    document.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      //let y=e.clientY;
      let xpos = x / window.innerWidth;
    //  let ypos=y/window.innerHeight;
      //console.log(xpos,ypos);
      if (xpos > 0.75 && x>500) {
        setState(1);
        console.log(state);
        //  return true;
      } else setState(0);
    });}
  });
  return (
    <div>
      <motion.div
        animate={{ x: [0, 20, 0] }}
        transition={{ delay: 0.1 }}
        className=' md:flex md:flex-row-reverse w-full h-full '
        style={{ height: "100vh", fontFamily: "poppins" }}>
                  <div className="md:hidden"><Hamburger toggle={()=>{setopen(!open)}} className="bhm flex md:hidden"/>
        {/* <Sidebar /> */}</div>
{  open?  <div className="absolute">  <Sidebar/></div>  :null
}   
        {state ? (
          <div
            className='absolute'
            style={{
              right: 0,
              display: `${state ? "block" : "none"}`,
              transition: "ease-in-out",
            }}>
            <Sidebar />
          </div>
        ) : null}
        <div className='' style={{ flex: 1, backgroundColor: "#b03338" }}>
          <img
            src={greetings}
            alt=''
            className='w-full mt-10 md:mt-0 md:h-full'
            /* style={{ height: "100vh" }}  */
          />
        </div>
        <div className='md:w-1/3 mt-12 md:mt-32 flex flex-col px-6 justify-center'>
          <p className='text-4xl md:text-5xl' style={{ fontWeight: 800 }}>
            Greeting
            <br />
            cards
          </p>
          <p className='mt-2'>A type layout experiment</p>
          <Link to='/motiongraphics' className='w-full'>
            <img
              src={arrow2}
              alt=''
              className='w-8   h-8'
              style={{ float: "right" }}
            />
          </Link>

          <div className='flex items-center justify-between mt-16 '>
            <p style={{ textDecoration: "underline" }}>View Project</p>
            <Link to='/brands'>
              {" "}
              <img src={arrow} alt='arrow' className='w-8 h-8' />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default GreetingCard;
