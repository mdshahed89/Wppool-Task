import React from "react";
import Td from "./Td";

function Table() {
  return (
    <div className="overflow-x-auto ">
      <table className="w-full shadow-md  border mx-auto border-gray-100  my-6">
        <thead>
          <tr className="bg-[#fff] text-[#000]">
            <th className="py-3 px-6 text-center border-b whitespace-nowrap ">
              Company
            </th>
            <th className="py-3 px-6 text-center border-b whitespace-nowrap ">
              Ticker
            </th>
            <th className="py-3 px-6 text-center border-b whitespace-nowrap ">
              Vertical
            </th>
            <th className="py-3 px-6  border-b text-center whitespace-nowrap ">
              Price
            </th>
            <th className="py-3 px-6  border-b text-center whitespace-nowrap ">
              Market Cap ($B)
            </th>
            <th className="py-3 px-6  border-b text-center whitespace-nowrap ">
              Revenue Growth
            </th>
            <th className="py-3 px-6  border-b text-center whitespace-nowrap ">
              Gross Margin
            </th>
            <th className="py-3 px-6  border-b text-center whitespace-nowrap ">
              EV/Revenue
            </th>
            <th className="py-3 px-6  border-b text-center whitespace-nowrap ">
              YTD Performance
            </th>
          </tr>
        </thead>
        <tbody className=" max-h-[5rem] overflow-y-scroll  ">
          <Td
            com="Adyen"
            tic="AFRM"
            ver="Payments"
            price="$17.15"
            mar="$50.5"
            rev="49.0%"
            gross="15.8%"
            ev="6.3"
            ytd="24.3%"
          />
          <Td
            com="Adyen"
            tic="AFRM"
            ver="Payments"
            price="$17.15"
            mar="$50.5"
            rev="49.0%"
            gross="15.8%"
            ev="6.3"
            ytd="24.3%"
          />
          <Td
            com="Adyen"
            tic="AFRM"
            ver="Payments"
            price="$17.15"
            mar="$50.5"
            rev="49.0%"
            gross="15.8%"
            ev="6.3"
            ytd="24.3%"
          />
          <Td
            com="Adyen"
            tic="AFRM"
            ver="Payments"
            price="$17.15"
            mar="$50.5"
            rev="49.0%"
            gross="15.8%"
            ev="6.3"
            ytd="24.3%"
          />
          <Td
            com="Adyen"
            tic="AFRM"
            ver="Payments"
            price="$17.15"
            mar="$50.5"
            rev="49.0%"
            gross="15.8%"
            ev="6.3"
            ytd="24.3%"
          />
          <Td
            com="Adyen"
            tic="AFRM"
            ver="Payments"
            price="$17.15"
            mar="$50.5"
            rev="49.0%"
            gross="15.8%"
            ev="6.3"
            ytd="24.3%"
          />
          <Td
            com="Adyen"
            tic="AFRM"
            ver="Payments"
            price="$17.15"
            mar="$50.5"
            rev="49.0%"
            gross="15.8%"
            ev="6.3"
            ytd="24.3%"
          />
          <Td
            com="Adyen"
            tic="AFRM"
            ver="Payments"
            price="$17.15"
            mar="$50.5"
            rev="49.0%"
            gross="15.8%"
            ev="6.3"
            ytd="24.3%"
          />
          <Td
            com="Adyen"
            tic="AFRM"
            ver="Payments"
            price="$17.15"
            mar="$50.5"
            rev="49.0%"
            gross="15.8%"
            ev="6.3"
            ytd="24.3%"
          />
          <Td
            com="Adyen"
            tic="AFRM"
            ver="Payments"
            price="$17.15"
            mar="$50.5"
            rev="49.0%"
            gross="15.8%"
            ev="6.3"
            ytd="24.3%"
          />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
