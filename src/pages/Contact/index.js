import React from "react";

import "./styles.css";

const Contact = () => {
  return (
    <div className="font-mono bg-gray-400">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 form-side"></div>
            <div className="w-full lg:w-7/12 bg-white p-5 ">
              <h3 className="pt-4 text-2xl text-center">Contact me</h3>
              <form
                id="contact-me"
                className="w-full mx-auto max-w-3xl p-8 text-gray-700 ">
                <div className="flex flex-wrap mb-6">
                  <div className="relative w-full appearance-none label-floating">
                    <input
                      className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                      id="name"
                      type="text"
                      placeholder="Your name"
                      required/>
                    <label
                      
                      className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">
                      Your name
                    </label>
                  </div>
                </div>

                <div className="flex flex-wrap mb-6">
                  <div className="relative w-full appearance-none label-floating">
                    <input
                      className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                      id="name"
                      type="text"
                      placeholder="Your email"
                      required/>
                    <label
                      
                      className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">
                      Your email
                    </label>
                  </div>
                </div>

                <div className="flex flex-wrap mb-6">
                  <div className="relative w-full appearance-none label-floating">
                    <textarea
                      className="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                      id="message"
                      type="text"
                      placeholder="Message..."></textarea>
                    <label
                      
                      className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">
                      Message...
                    </label>
                  </div>
                </div>

                <div className="">
                  <button
                    className="w-full shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
