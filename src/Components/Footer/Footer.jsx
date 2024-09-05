import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className=" mt-[3rem] max-w-[1300px] mx-auto py-14 bg-[#E6E6E6] px-[3%] flex sm:flex-row flex-col gap-4 ">
      <div className=" flex-1 flex flex-col justify-between ">
        <h3 className=" max-w-[20rem] text-[1.3rem] leading-7 ">
          Experience remarkable WordPress products with a new level of power,
          beauty, and human-centered designs.
        </h3>
        <div>
          <p className=" text-xs mb-2 text-[#9FA0A1] ">
            ©2024 Terms of Use Privacy Policy
          </p>
          <p className=" text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaera{" "}
          </p>
        </div>
      </div>
      <div className=" flex-1 ">
        <div className=" flex justify-around ">
          <div className=" flex flex-col gap-2 ">
            <h4 className=" font-bold ">Jump to</h4>
            <h4 className=" text-[#115CD9] ">About Us</h4>
            <h4 className=" text-[#115CD9] ">Portfolio</h4>
            <h4 className=" text-[#115CD9] ">News</h4>
            <h4 className=" text-[#115CD9] ">Stories</h4>
            <h4 className=" text-[#115CD9] ">Jobs</h4>
          </div>
          <div className=" flex flex-col gap-5 ">
            <div className=" flex flex-col gap-2 pb-7 border-b border-[#9FA0A1] ">
              <h4>Cambridge</h4>
              <h4>70728 Yost Burg, </h4>
              <h4>North Magdaleneview, </h4>
              <h4>UT 97952-2814</h4>
            </div>
            <div className=" flex flex-col gap-2 pb-7 border-b border-[#9FA0A1] ">
              <h4>London</h4>
              <h4>Suite 292 903 Stehr Streets,</h4>
              <h4>Langworthtown, SC 94577-9465</h4>
            </div>
            <div className=" flex flex-col gap-2 pb-7 border-b border-[#9FA0A1] ">
              <h4>San Francisco</h4>
              <h4>19837 Gilberto Lodge, </h4>
              <h4>Lake Kendallville, </h4>
              <h4>Colorado - 97392, Bhutan</h4>
            </div>
            <div className=" flex gap-3 text-[#9FA0A1] text-[1.4rem] ">
              <FaLinkedin />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
