import React from "react";
import Mathewspic from "../images/profilepic2.jpg";
import c1 from "../images/clients/c1.svg";
import c2 from "../images/clients/c2.svg";
import c3 from "../images/clients/newlogoc.png";
import c4 from "../images/clients/c4.svg";
import c6 from "../images/clients/c6.svg";
import c5 from "../images/clients/c5.svg";
import tools from "../images/tools2.svg";
import "../App.css";
import Sidebar from "./Sidebar";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

function About() {
  // const params = useParams();
  const [open, setopen] = React.useState(false);
  const [state, setState] = React.useState(false);
  //const [open,setopen]=React.useState(false)
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
        //  return tru;
      } else setState(0);
    });
  }

  return (
    <div className='dark:bg-[#111111]'>
      <div
        className=' md:hidden dark:bg-[#111111] flex flex-row items-center justify-between'
        style={{ marginLeft: "0%" }}>
        <Link
          to='/'
          style={{ fontSize: "20" }}
          className=' dark:text-white md:inline text-2xl border-2 m-4 rounded-3xl transition ease-in-out duration-200 px-2 border-black dark:border-white dark:hover:text-black dark:hover:bg-white hover:bg-black hover:text-white'>
          {" "}
          Home
        </Link>
        <Hamburger
          toggle={() => {
            setopen(!open);
          }}
          toggled={open}
          color='#a79b9b'
          className='bhm flex md:hidden'
        />
      </div>
      {open ? (
        <div className='absolute right-0 bg-red400'>
          {" "}
          <Sidebar />
        </div>
      ) : null}
      <div
        className='p-8 md:p-16  w-full dark:bg-[#111111]'
        style={{ fontFamily: "Poppins" }}>
        <Link
          to='/'
          style={{ fontSize: "20" }}
          className=' hidden md:inline text-xl border-2 my-4 rounded-3xl transition ease-in-out duration-200 px-2 border-black dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-white hover:bg-black hover:text-white'>
          {" "}
          Home
        </Link>
        {/* <div
          className='relative '
          style={{
            right: "10px",
            top: 0,
            zIndex: 100,
            display: `${state ? "block" : "none"}`,
            transition: "ease-in-out",
          }}>
          <Sidebar />
        </div> */}
        {state ? (
          <div
            className='fixed  z-1 top-0 h-full w-fit'
            style={{
              right: 0,
              zIndex: 1,
              top: 0,
              display: `${state ? "block" : "none"}`,
              transition: "ease-in-out",
            }}>
            <Sidebar />
          </div>
        ) : null}

        {/* </div>  <div className="absolute " style={{left:0,top:0,zIndex:100,display:`${state?"block":"none"}`,transition:"ease-in-out"}}>
        <Sidebar />
      </div> */}
        <section className='md:flex md:flex-row-reverse w-11/12 m-auto md:w-full '>
          <img
            alt='maths'
            src={Mathewspic}
            className=' md:w-2/5 object-contain'
          />
          <div style={{ fontFamily: "poppins" }} className=' mt-10'>
            <p className='text-6xl font-normal dark:text-[#fafafa]'>
              I'm <br />{" "}
              <span
                className='text-6xl dark:text-[#fafafa]'
                style={{ fontWeight: "800" }}>
                Mathew George
              </span>
            </p>
            <p className='text-2xl   font-light  mt-4 dark:text-[#fafafa] font'>
              Co-founder of{" "}
              <a href='https://www.mages.studio/'>
                {" "}
                <span style={{ color: "#CA06C2" }}>Mages Studio Pvt. Ltd.</span>
              </a>{" "}
            </p>
            <p className='mt-12  md:w-4/6 dark:text-[#fafafa]'>
              An engineer turned designer trying to bridge the gap between
              branding and interface design with 4 years of experience in
              digital design.
            </p>
          </div>
        </section>
        <section className='pt-12 '>
          <p
            className=' text-4xl md:text-5xl dark:text-[#fafafa]'
            style={{ fontWeight: "700", fontFamily: "poppins" }}>
            So far so Good
          </p>
          <div className='flex flex-row flex-wrap md:flex-row justify-between items-center mt-16'>
            <img
              src={c1}
              alt=''
              className='p-3 w-28 clientlogo md:w-36 object-contain '
            />
            <img
              src={c2}
              alt=''
              className='p-3 w-28 clientlogo md:w-36  object-contain  '
            />
            <img
              src={c3}
              alt=''
              className='p-3 w-28 clientlogo md:w-36  object-contain h-14 '
            />
            <img
              src={c4}
              alt=''
              className='p-3 w-28 clientlogo md:w-36  object-contain h-14 '
            />
            <img
              src={c5}
              alt=''
              className='p-3 w-28 clientlogo md:w-36  object-contain h-1/12 '
            />
            <img
              src={c6}
              alt=''
              className='p-3 w-28 clientlogo md:w-36  object-contain h-1/12 '
            />
          </div>
          <p
            className='mt-8 dark:text-[#fafafa]'
            style={{ fontFamily: "poppins" }}>
            many more...
          </p>
        </section>
        <section className='pt-16 md:flex w-full justify-between'>
          <div className='md:w-1/2 w-full md:mt-12'>
            <p
              className='text-5xl dark:text-[#fafafa]'
              style={{ fontWeight: "700", fontFamily: "poppins" }}>
              Get in touch
            </p>

            <div className=' flex flex-col  mt-10 dark:text-[#999999]'>
              <form
                action='https://formsubmit.co/ma2grg@gmail.com'
                method='POST'
                className='flex flex-col  mt-10 dark:text-[#999999]'>
                <>
                  <label for='name'>Name</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    required
                    className='p-2 dark:bg-[#111111] border-[#000000] dark:border-[#FAFAFA] border-2 border-r-0 border-l-0 border-t-0'
                    style={{
                      outlineWidth: 0,
                      // border: "1px solid black",
                      // borderColor: "black",
                      // borderRightWidth: "0px",
                      // borderLeftWidth: "0px",
                      // borderTopWidth: "0px",
                    }}
                  />
                </>
                <>
                  <label className='py-2' for='email'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    className='p-2 dark:bg-[#111111] border-[#000000] dark:border-[#FAFAFA] border-2 border-r-0 border-l-0 border-t-0'
                    style={{
                      outlineWidth: 0,
                      // border: "1px solid ",
                      // borderColor: "black",
                      // borderRightWidth: "0px",
                      // borderLeftWidth: "0px",
                      // borderTopWidth: "0px",
                    }}
                  />
                </>
                <>
                  <label for='Message' className='pt-2'>
                    Message
                  </label>
                  <input
                    type='textarea'
                    id='Message'
                    rows='3'
                    cols='15'
                    className='p-2   dark:bg-[#111111] border-[#000000] dark:border-[#FAFAFA] border-2 border-r-0 border-l-0 border-t-0'
                    style={{
                      outlineWidth: 0,
                      columns: "20",

                      // border: "1px solid ",
                      // borderColor: "black",
                      // borderRightWidth: "0px",
                      // borderLeftWidth: "0px",
                      // borderTopWidth: "0px",
                    }}
                  />
                </>
                <>
                  <input
                    type='submit'
                    name='submit'
                    className='bgwhite mt-8 cursor-pointer text-black border-2 rounded-full  border-black dark:border-white dark:bg-wite  transition duration-300 ease-in-out hover:bg-black dark:hover:text-black dark:hover:bg-white hover:text-white  dark:text-white dark:hover:bgblack dark:hover:text-wite md:w-1/4 p-2 my-4'></input>
                </>
                <input
                  type='hidden'
                  name='_next'
                  value='https://www.ma2grg.com/'
                />
              </form>
            </div>
          </div>
          <div>
            <div className=' md:mt-12'>
              <p
                className='text-5xl dark:text-[#fafafa]  my-12 md:my-0'
                style={{ fontWeight: "700", fontFamily: "poppins" }}>
                Hands on
              </p>
              <img
                alt=''
                src={tools}
                className='w-2/3 m-auto md:m-1  mt-4 md:mt-10 h-full items-center'
              />
            </div>
          </div>
        </section>

        <footer className=' flex flex-col md:flex-row justify-evenly items-center md:w-2/3 m-auto mt-36'>
          <a href='https://www.linkedin.com/in/ma2grg/'>
            <p className='social dark:text-[#fafafa]'>LinkedIn</p>
          </a>{" "}
          <a href='https://www.instagram.com/ma2.grg/'>
            <p className='social dark:text-[#fafafa]'>Instagram</p>
          </a>{" "}
          <a href='mailto:hello@ma2grg.com'>
            <p className='social dark:text-[#fafafa]'>Email</p>
          </a>{" "}
          <a href='https://dribbble.com/ma2grg'>
            <p className='social dark:text-[#fafafa]'>Dribbble</p>
          </a>{" "}
          <a href='https://www.behance.net/ma2grg'>
            <p className='social dark:text-[#fafafa]'>Behance</p>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default About;
