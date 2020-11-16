import React, {useEffect, useState } from "react";
import axios from 'axios';

import MediumApi from '../../utils/MediumApi'
import './styles.css'

import Post from '../../components/Post'

const Blog = () => {
  const [posts, setPots] = useState([])
  useEffect(() => {
      axios
      .get(MediumApi.baseUrl)
      .then((res) =>{
          setPots(res.data.items);
      });
  },[]);
       
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
          {
            posts.map(post => <Post key={post.pubDate} post={post}/>)
          }          

        </div>
      </div>
    </section>
  );
};


export default Blog;
