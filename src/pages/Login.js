import React from "react";
import MyButton from "../components/actions/MyButton";
import MyInput from "../components/actions/MyInput";
import Video from "../images/video.mp4";
import overlay from "../images/over_3.png";
const Login = () => {
  return (
    <div className="p-8 w-full max-h-screen  flex justify-between  gap-4">
      {/* Left section (Sign Up Form) */}
      <div className="w-[35vw] p-8 flex flex-col gap-4">
        <div className="mb-20">
          <h1 className="font-robson text-[80px] text-center font-semibold leading-4">
            SHAN FABRICS
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="font-robson text-[40px] font-semibold leading-2">
            SIGN UP ACCOUNT
          </h2>
          <p className="font-fedroka  font-semibold">
            ENTER YOUR INFORMATION TO CONTINUE
          </p>
        </div>
        <div className="flex gap-2 justify-center">
          <div className="px-6 bg-[#dddddd] py-2 rounded-md">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
            >
              <title>google_line</title>
              <g
                id="\\\\u9875\\\\u9762-1"
                stroke="none"
                strokewidth="{1}"
                fill="none"
                fillrule="evenodd"
              >
                <g id="Logo" transform="translate(-192.000000, -96.000000)">
                  <g
                    id="google_line"
                    transform="translate(192.000000, 96.000000)"
                  >
                    <path
                      d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                      id="MingCute"
                      fillrule="nonzero"
                    ></path>
                    <path
                      d="M12,5 C8.13401,5 5,8.13401 5,12 C5,15.866 8.13401,19 12,19 C15.5265,19 18.4439,16.3923 18.9291,13 L13,13 C12.4477,13 12,12.5523 12,12 C12,11.4477 12.4477,11 13,11 L20,11 C20.5523,11 21,11.4477 21,12 C21,16.9706 16.9706,21 12,21 C7.02944,21 3,16.9706 3,12 C3,7.02944 7.02944,3 12,3 C14.4761,3 16.7202,4.00122 18.3464,5.61854 C18.738,6.008 18.7397,6.64116 18.3503,7.03275 C17.9608,7.42434 17.3277,7.42608 16.9361,7.03662 C15.6693,5.77681 13.9264,5 12,5 Z"
                      id="\\\\u8DEF\\\\u5F84"
                      fill="#000000"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className="px-6 bg-[#dddddd] py-2 rounded-md">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillrule="evenodd"
                cliprule="evenodd"
                d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H12V13H11C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11H12V9.5C12 7.567 13.567 6 15.5 6H16.1C16.6523 6 17.1 6.44772 17.1 7C17.1 7.55228 16.6523 8 16.1 8H15.5C14.6716 8 14 8.67157 14 9.5V11H16.1C16.6523 11 17.1 11.4477 17.1 12C17.1 12.5523 16.6523 13 16.1 13H14V20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6Z"
                fill="#000000"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <hr className="flex-1 bg-black h-[2px]" />
          <p className="mx-3 font-fredoka font-medium">OR</p>
          <hr className="flex-1 bg-black h-[2px]" />
        </div>
        <div className="flex flex-col gap-4">
          <MyInput title={"FULL NAME"} type={"text"} />
          <MyInput title={"EMAIL ADDRESS"} type={"email"} />
          <MyInput title={"PASSWORD"} type={"password"} />
          <MyButton title={"Sign up"} styles={"bg-black text-white py-4 rounded-md font-robson text-[28px] tracking-wider"}/>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <p className="font-fredoka text-gray-600 uppercase cursor-default">
            Already have and account ?
          </p>
          <a className="font-fredoka text-gray-600 uppercase font-bold cursor-pointer">Log in</a>
        </div>
      </div>

      {/* Right section (Video) */}
      <div className="w-[63vw] h-[94vh]  relative overflow-hidden">
        <video
          className="absolute top-0 left-0 rounded-3xl w-full h-full object-cover z-10"
          autoPlay
          muted
          loop
        >
          <source src={Video} type="video/mp4" />
        </video>
        <div>
          <img
            src={overlay}
            className="w-full h-full absolute top-[0px] left-[0px] right-0 bottom-0 z-20"
          />
        </div>
        {/*{" "}
        <div className="absolute top-[-70px] left-[-175px]  z-20">
          <div className="bg-transparent border-[8px] border-white w-[350px] h-[350px] relative overflow-hidden"></div>
          <div className="bg-transparent border-[8px] border-white w-[350px] h-[350px] relative overflow-hidden"></div>
          <div className="bg-transparent border-[8px] border-white w-[350px] h-[350px] relative overflow-hidden"></div>
          <div className="bg-transparent border-[8px] border-white w-[350px] h-[350px] relative overflow-hidden"></div>
        </div>
        <div className="absolute top-[-70px] left-[175px] z-20">
          <div className="bg-transparent border-[8px] border-white w-[350px] h-[350px] relative overflow-hidden"></div>
          <div className="bg-transparent border-[8px] border-white w-[350px] h-[350px] relative overflow-hidden"></div>
          <div className="bg-transparent border-[8px] border-white w-[350px] h-[350px] relative overflow-hidden"></div>
          <div className="bg-transparent border-[8px] border-white w-[350px] h-[350px] relative overflow-hidden"></div>
        </div>
        <div className="absolute top-[-70px] left-[525px] z-20">
          <div className="bg-transparent border-[8px] rounded-3xl border-white w-[350px] h-[350px]"></div>
          <div className="bg-transparent border-[8px] rounded-3xl border-white w-[350px] h-[350px]"></div>
          <div className="bg-transparent border-[8px] rounded-3xl border-white w-[350px] h-[350px]"></div>
          <div className="bg-transparent border-[8px] rounded-3xl border-white w-[350px] h-[350px]"></div>
        </div>
        <div className="absolute top-[-70px] left-[875px] z-20">
          <div className="bg-transparent border-[8px] rounded-3xl border-white w-[350px] h-[350px]"></div>
          <div className="bg-transparent border-[8px] rounded-3xl border-white w-[350px] h-[350px]"></div>
          <div className="bg-transparent border-[8px] rounded-3xl border-white w-[350px] h-[350px]"></div>
          <div className="bg-transparent border-[8px] rounded-3xl border-white w-[350px] h-[350px]"></div>
        </div>
        */}
      </div>
    </div>
  );
};

export default Login;
