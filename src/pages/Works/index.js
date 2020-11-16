import React, {useEffect, useState } from "react";
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import GitHubApi  from '../../utils/GitHubApi'
import Item from '../../components/Item'
import "./styles.css";

const Works = () => {
  const [repositorios, setRepositorios] = useState([])
  useEffect(() => {
      axios
      .get(GitHubApi.baseUrl+'/users/carleonesouza/repos')
      .then((res) =>{
          setRepositorios(res.data);
      });
  },[]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 900 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1,
    }
  };
  return (
    <section className="px-8 " id="page-work">
      <div className="text-2xl sm:text-3xl text-center xl:mt-20 pb-6 md:m-4">
        Freelance Web Developer based in Nova Lima, Minas Gerais-Brazil.
        <br /> Front-End and Back-End experience.
      </div>

      <Carousel swipeable={false}
                    draggable={false}
                    responsive={responsive}              
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    keyBoardControl={true}
                    customTransition="transform 100ms ease-in"
                    transitionDuration={300}
                    containerClass="carousel-container"             
                    itemClass="carousel-item">
                      
                      {   repositorios.map(item => <Item key={item.id} item={item}/>) }          


                    </Carousel>
                    

  
    </section>
  );
};

export default Works;
