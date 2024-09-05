import { useState } from 'react';

export default function Select({fShow}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(fShow)
    // array of options 
    const options = ['Apple', 'banana', 'chips'];

    return (
        <div className=' relative w-60 '>
          {/* dropdown - btn */}
            <div onClick={() => setIsOpen(!isOpen)} className="mx-auto flex  relative items-center justify-between rounded-full z-50 bg-[#2042B6] text-[#fff] px-6 py-1 border">
                <h1 className="font-medium text-[#fff]">{selectedValue}</h1>
                <svg className={`${isOpen ? '-rotate-180' : 'rotate-0'} duration-300`} width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 10L12 15L17 10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}</g></svg>
            </div>
            {/* dropdown - options  */}
            <div className={`${isOpen ? 'absolute top-0 opacity-100' : 'hidden opacity-0'} bg-[#2042B6] top-5 z-20 mx-auto my-4 w-60 rounded-b-xl py-4 border duration-300`}>
                {options?.map((option, idx) => (
                    <div key={idx} onClick={(e) => { setSelectedValue(e.target.textContent); setIsOpen(false);}} className="px-6 py-2 text-[#fff] hover:text-[#686868] hover:bg-gray-100">
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
}

