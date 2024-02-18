import React from "react";

const ArtF = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Introducing Our Latest Arts
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-white max-w-md  h-[auto] rounded-lg shadow-lg p-4">
            <div className="relative overflow-hidden">
              <img
                className="object-cover w-full h-[50vh]"
                src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJ0fGVufDB8fDB8fHww"
                alt="Product"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                  Click to view
                </button>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-4">
              Product Name
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ante justo. Integer euismod libero id mauris malesuada tincidunt.
            </p>
            <div className="flex items-center justify-between mt-4"></div>
          </div>
          <div className="bg-white max-w-md  rounded-lg shadow-lg p-4">
            <div className="relative overflow-hidden">
              <img
                className="object-cover w-full h-[50vh]"
                src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fHww"
                alt="Product"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                  Click to view
                </button>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-4">
              Product Name
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ante justo. Integer euismod libero id mauris malesuada tincidunt.
            </p>
            <div className="flex items-center justify-between mt-4"></div>
          </div>
          <div className="bg-white max-w-md  rounded-lg shadow-lg p-4">
            <div className="relative overflow-hidden">
              <img
                className="object-cover w-full h-[50vh]"
                src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFydHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Product"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                  Click to view
                </button>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-4">
              Product Name
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ante justo. Integer euismod libero id mauris malesuada tincidunt.
            </p>
            <div className="flex items-center justify-between mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtF;
