import React from "react";
import typeofi from "../../images/typeof.svg";
import { Link } from "react-router-dom";
import Arrow from "../../images/arrow.svg";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";

import Sidebar from "../Sidebar";

function TypeOf() {
  const [state, setState] = React.useState(false);
  const [open, setopen] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth >= 600) {
      document.addEventListener("mousemove", (e) => {
        let x = e.clientX;
        //let y=e.clientY;
        let xpos = x / window.innerWidth;
        //  let ypos=y/window.innerHeight;
        //console.log(xpos,ypos);
        if (xpos > 0.75 && x > 500) {
          setState(1);
          // console.log(state);
          //  return true;
        } else setState(0);
      });
    }
  });

  return (
    <motion.div
      animate={{ x: [0, 20, 0] }}
      transition={{ delay: 0.1 }}
      className=' md:flex md:flex-row-reverse w-full h-full dark:bg-[#111111]'
      style={{ height: "100vh", fontFamily: "poppins" }}>
         <div className="fixed m-2 p-2 dark:text-[#FAFAFA]" style={{left:0,zIndex:100,display:`${!state?"block":"none"}`,transition:"ease-in-out"}}>
       {/* <Link to="/" className="  md:block border-2 rounded-3xl px-2 border-white"> Home</Link> */}
       <Link
          to='/'
          className='  md:inline text-xl border-2 m-4 rounded-3xl transition ease-in-out duration-200 px-2 border-black dark:border-white dark:hover:text-black dark:hover:bg-white hover:bg-black hover:text-white'>
          {" "}
          Home
        </Link>  

       
      </div>
      <div className='md:hidden' style={{marginLeft:"85%"}}>
        <Hamburger
          toggle={() => {
            setopen(!open);
          }}
          toggled={open}
          className='bhm flex md:hidden'
          color="#a79b9b"
        />
        {/* <Sidebar /> */}
      </div>
      {open ? (
        <div className='absolute right-0 '>
          {" "}
          <Sidebar />
        </div>
      ) : null}
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
      <div className=' ' style={{ flex: 1, backgroundColor: "#00be6e" }}>
        <img
          src={typeofi}
          alt=''
          className='w-full mt-10 md:mt-0 md:h-full'
          // style={{ height: "100vh" }}
        />
      </div>
      <div className='md:w-1/3 mt-12 md:mt-32 flex flex-col px-6 justify-center md:pb-16 md:justify-end'>
        <p
          className=' text-4xl md:text-5xl lg:text-6xl dark:text-white'
          style={{ fontWeight: 800 }}>
          Type of <br />
          type
        </p>
        <p className='mt-4 text-xl text-gray-600 dark:text-gray-300 font-light'>
          A type layout Experiment
        </p>
        <div className='py-1'>
          <div className='flex items-center justify-between mt-16 '>
            <Link to='/projects/42'>
              {" "}
              <p
                className='text-xl dark:text-white'
                style={{ textDecoration: "underline" }}>
                View Project
              </p>
            </Link>
            <Link to='/brand1'>
              {" "}
              <img
                src={Arrow}
                alt='arrow'
                className='w-8 h-8 dark:bg-white   rounded-full'
              />
            </Link>{" "}
          </div>{" "}
        </div>
      </div>
    </motion.div>
  );
}

export default TypeOf;
