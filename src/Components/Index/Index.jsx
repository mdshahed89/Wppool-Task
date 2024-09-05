import React from "react";
import Left from "./Left";
import Right from "./Right";

function Index() {
  return (
    <section  id="index" className=" index max-w-[1300px] mx-auto flex gap-5 px-3 md:flex-row flex-col  ">
      <div className=" w-full md:w-[20%] ">
        <Left />
      </div>
      <div className=" w-full md:w-[80%] ">
        <Right />
      </div>
    </section>
  );
}

export default Index;
