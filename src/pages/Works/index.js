import React from 'react';


const Works = () => {
    return(       
        <section className="px-3">
            <div className="text-4xl sm:text-5xl text-center my-10">What type of food do you like?</div>

            <div className="grid md:grid-cols-3 gap-8 m-5 max-w-5xl m-auto">
                <div className="bg-white">
                <img src="https://via.placeholder.com/150" alt="" className="w-full h-48 sm:h-56 object-cover" />

                <div className="px-10 py-6 mb-10 text-center">
                    <div className="text-2xl font-bold text-purple-500 mb-4">MALAY</div>
                    <span className="text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate tempore eligendi magnam distinctio molestias. Incidunt at consequuntur consequatur 
                    officiis repudiandae! Culpa cum vel tenetur itaque eius provident voluptatum similique impedit?
                    </span>
                </div>

                <button className="w-full text-lg h-16 text-white font-extrabold bg-purple-500">VIEW RECIPES</button>
                </div>

                <div className="bg-white">
                <img src="https://via.placeholder.com/150" alt="" className="w-full h-48 sm:h-56 object-cover" />
                <div className="px-10 py-6 mb-10 text-center">
                    <div className="text-2xl font-bold text-green-500 mb-4">CHINESE</div>
                    <span className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate tempore eligendi magnam distinctio molestias. Incidunt 
                    at consequuntur consequatur officiis repudiandae! Culpa cum vel tenetur itaque eius provident voluptatum similique impedit?</span>
                </div>
                <button className="w-full text-lg h-16 text-white font-extrabold bg-green-500">VIEW RECIPES</button>
                </div>

                <div className="bg-white">
                <img src="https://via.placeholder.com/150" alt="" className="w-full h-48 sm:h-56 object-cover" />
                <div className="px-10 py-6 mb-10 text-center">
                    <div className="text-2xl font-bold text-blue-500 mb-4">INDIAN</div>

                    <span className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate tempore eligendi magnam distinctio molestias. Incidunt
                    at consequuntur consequatur officiis repudiandae! Culpa cum vel tenetur itaque eius provident voluptatum similique impedit?</span>
                </div>

                <button className="w-full text-lg h-16 text-white font-extrabold bg-blue-500">VIEW RECIPES</button>
                </div>
            </div>
            </section>
    );
}

export default Works;