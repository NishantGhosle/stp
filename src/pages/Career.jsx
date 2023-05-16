import React from "react";

function Career() {
  return (
    <>
      <div className="px-4 py-20 md:px-8 lg:px-16 xl:px-32">
        <div>
          <h1 className="text-3xl font-bold mb-4">Current Openings</h1>
          <h2 className="text-xl font-bold mb-4">We are looking for</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white shadow-md rounded-md p-4">
              <h2 className="text-xl font-bold mb-2">React developer</h2>
            </div>
            <div className="bg-white shadow-md rounded-md p-4">
              <h2 className="text-xl font-bold mb-2">UI/UX Designer</h2>
            </div>
            <div className="bg-white shadow-md rounded-md p-4">
              <h2 className="text-xl font-bold mb-2">Node Developer</h2>
            </div>
            <div className="bg-white shadow-md rounded-md p-4">
              <h2 className="text-xl font-bold mb-2">MERN Developer</h2>
            </div>
          </div>
        </div>
        <p className="text-xl mt-10">
          Send your resume at <b>productionssoftech@gmail.com</b>
        </p>
      </div>
    </>
  );
}

export default Career;
