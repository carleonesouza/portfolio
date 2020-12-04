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
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L17.1,192C34.3,192,69,192,103,170.7C137.1,149,171,107,206,122.7C240,139,274,213,309,208C342.9,203,377,117,411,80C445.7,43,480,53,514,74.7C548.6,96,583,128,617,138.7C651.4,149,686,139,720,117.3C754.3,96,789,64,823,90.7C857.1,117,891,203,926,224C960,245,994,203,1029,186.7C1062.9,171,1097,181,1131,192C1165.7,203,1200,213,1234,229.3C1268.6,245,1303,267,1337,245.3C1371.4,224,1406,160,1423,128L1440,96L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path></svg>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"> Blog</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-base">
          Those are some article the I written in Medium platform, check out there all content</p>
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
