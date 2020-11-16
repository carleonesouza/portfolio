import React, { useEffect, useState } from 'react';
import {DiReact} from 'react-icons/di'


const Post = ({post}) => {
    const [description, setDescription] = useState('');
    useEffect(() => {
      let part_one = post.description.split('</figure>');
      let part_two = part_one[1].split('<p>');
      part_one = part_two[1].split('<em>');
      part_two = part_one[1].split('</em>');
      setDescription(part_two[0]);
    }, [post]);
    return (

        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
            <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{backgroundImage: "url(" + post.thumbnail + ")"}}></div>

            <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
              
              <div className="header-content inline-flex ">
                <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                  <div className="h-2 w-2 rounded-full " ><DiReact/></div>
                </div>
                <div className="category-title flex-1 text-sm">React</div>
              </div>
              <div className="title-post font-bold">{post.title}</div>

              <div className="summary-post text-base text-justify"> {description}. 
                  <a className="bg-blue-100 w-8/12 sm:w-auto md:w-full lg:w-32 xl:w-5/4 text-blue-500 mt-4 block rounded p-2 text-sm" href={post.guid} target="_blank" rel="noreferrer"><span className="">Read more...</span></a>
              </div>
             
            </div>
          </div>

    );
}

export default Post;