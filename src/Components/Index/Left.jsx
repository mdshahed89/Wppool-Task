import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";



export default function Left() {
  const [isOpen, setIsOpen] = useState(null);
  const [isActive, setIsActive] = useState(null);

  const dataArr = [{title: 'The Index',
    subMenu: [{key: 'profile-1', title: 'The Index Tab Two'}, {key: 'profile-2', title: 'The Index Tab Three'}, {key: 'profile-3', title: 'The Index Tab Four'}, {key: 'profile-4', title: 'The Index Tab Five'}, ],}];
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))
    
  };
  const handleToggle = (idx) => {
    setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))

};

    return (
        <div className={` overflow-hidden rounded-lg bg-[#EFF3F6] h-full px-2 py-2 `}>
            {dataArr?.map((data, idx) => {
                const { key, title, subMenu, svg } = data;
                return (
                    <div key={title}>
                        <div onClick={() => handleToggle(idx)} className="relative flex cursor-pointer items-center justify-between gap-2 rounded-md bg-[#2042B6] p-4">
                            {svg}
                            <h5 className="font-medium text-white">{title}</h5>
                            <span className="rounded-full p-2 text-[#fff] ">
                            {/* <svg className="ml-8 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg"> */}
                            {
                                isOpen === idx ? <FaMinus className=" rotate-180 transition duration-300 " /> : <FaPlus className=" rotate-180 transition duration-300 " />
                            }
                                {/* <FaPlus className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                                <FaPlus className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} /> */}
                            {/* </svg> */}
                        </span>
                            {/* <span className="absolute -bottom-[7px] left-4 h-0 w-0 -rotate-45 border-b-[15px] border-r-[15px] border-b-zinc-600 border-r-transparent"></span> */}
                        </div>
                        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isActive === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden *:cursor-pointer pt-3 ">
                                {subMenu?.map((sub) => (
                                    <div
                                        key={sub.title}
                                        className="w-full py-3 pl-4 pr-4 text-sm text-[#647888] transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-200 hover:text-zinc-600 flex justify-between "
                                    >
                                        <h3>{sub.title}</h3>
                                        <span className="rounded-full p-2">
                                            <FaPlus className=" text-[#000] " />
                                            
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}