import React from "react";

import './styles.css'


const Blog = () => {
       
  return (
 <section className="blog text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"> Blog</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-base">
            J'aime bien partager mes connaissances et des recherche intéressantes, pour le faire j'ai mis en place un blog personnel.
						Nous abordons plusieurs sujets intéressants et je donne quelques astuces et conseils aux jeunes développeurs pour mieux s'en sortir.          </p>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
            <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center first"></div>

            <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
              
              <div className="header-content inline-flex ">
                <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                  <div className="h-2 w-2 rounded-full m-1 bg-purple-500 " ></div>
                </div>
                <div className="category-title flex-1 text-sm"> PHP</div>
              </div>
              <div className="title-post font-medium">Mon titre</div>

              <div className="summary-post text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure. 
                <button className="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm "><span className="">Lire plus</span></button>
              </div>
             
            </div>
          </div>

          <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
            <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center second"></div>

            <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
              
              <div className="header-content inline-flex ">
                <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-yellow-100">
                  <div className="h-2 w-2 rounded-full m-1 bg-yellow-500 " ></div>
                </div>
                <div className="category-title flex-1 text-sm"> JS</div>
              </div>
              <div className="title-post font-medium">Mon titre</div>

              <div className="summary-post text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure. 
                <button className="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm"><span className="">Lire plus</span></button>
              </div>
             
            </div>
          </div>

          <div className="p-4  md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
            <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center thirt"></div>

            <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
              
              <div className="header-content inline-flex ">
                <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-green-100">
                  <div className="h-2 w-2 rounded-full m-1 bg-green-500 " ></div>
                </div>
                <div className="category-title flex-1 text-sm"> Vue</div>
              </div>
              <div className="title-post font-medium">Mon titre</div>

              <div className="summary-post text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure. 
                <button className="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm"><span className="">Lire plus</span></button>
              </div>
             
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};


export default Blog;