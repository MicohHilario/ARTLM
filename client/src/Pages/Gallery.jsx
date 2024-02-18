import React from "react";

const Gallery = () => {
  return (
    <div class="bg-white dark:bg-gray-800 h-[auto]  py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div class="flex items-center gap-12">
            <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
              Gallery
            </h2>

            <p class="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni
              laudantium sapiente iusto autem quisquam numquam earum accusantium
              reiciendis! Sit aspernatur aut omnis illo facere odio distinctio
              expedita vel veritatis!
            </p>
          </div>

          <a
            href="#"
            class="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
          >
            More
          </a>
        </div>

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {/* <!-- image - start --> */}
          <a
            href="#"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1664438942574-e56510dc5ce5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              loading="lazy"
              alt="Photo by Minh Pham"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Riptide
            </span>
          </a>
          {/* <!-- image - end --> */}
          {/* <!-- image - start --> */}
          <a
            href="#"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1585644198827-193583b91c36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              loading="lazy"
              alt="Photo by Magicle"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Child
            </span>
          </a>
          {/* <!-- image - end --> */}
          {/* <!-- image - start --> */}
          <a
            href="#"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1611612902179-6981272bbd84?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Roots
            </span>
          </a>
          {/* <!-- image - end --> */}
          {/* <!-- image - start --> */}
          <a
            href="#"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1549277513-f1b32fe1f8f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Drawn
            </span>
          </a>
          <a
            href="#"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1569091791842-7cfb64e04797?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              loading="lazy"
              alt="Photo by Minh Pham"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Coal
            </span>
          </a>
          {/* <!-- image - end --> */}
          {/* <!-- image - start --> */}
          <a
            href="#"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1570744389406-f9dcdcb67ba8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
              loading="lazy"
              alt="Photo by Magicle"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Rosue
            </span>
          </a>
          {/* <!-- image - end --> */}
          {/* <!-- image - start --> */}
          <a
            href="#"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1581345628965-064148e704a5?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Rosee
            </span>
          </a>
          {/* <!-- image - end --> */}
          {/* <!-- image - start --> */}
          <a
            href="#"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1582201942988-13e60e4556ee?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Lent
            </span>
          </a>{" "}
          <a
            href="#"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1582202142946-b19b9dc9f811?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
              loading="lazy"
              alt="Photo by Minh Pham"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Mood
            </span>
          </a>
          {/* <!-- image - end --> */}
          {/* <!-- image - start --> */}
          <a
            href="#"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1582201943021-e8e5cb6dedc2?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              loading="lazy"
              alt="Photo by Magicle"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Ratch
            </span>
          </a>
          {/* <!-- image - end --> */}
          {/* <!-- image - start --> */}
          <a
            href="#"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1580193090099-5f31cf4e7202?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Seal
            </span>
          </a>
          {/* <!-- image - end --> */}
          {/* <!-- image - start --> */}
          <a
            href="#"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1581343109298-4a103c86d940?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Project
            </span>
          </a>
          {/* <!-- image - end --> */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
