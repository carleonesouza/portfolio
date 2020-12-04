import React, { useEffect, useState } from "react";
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import GitHubApi from '../../utils/GitHubApi'
import Item from '../../components/Item'
import "./styles.css";

const Works = () => {
  const [repositorios, setRepositorios] = useState([])
  useEffect(() => {
    axios
      .get(GitHubApi.baseUrl + '/users/carleonesouza/repos')
      .then((res) => {
        setRepositorios(res.data);
      });
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <section  id="page-work">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path fill="#0099ff" fill-opacity="1" d="M0,192L0,192L102.9,192L102.9,64L205.7,64L205.7,288L308.6,288L308.6,32L411.4,32L411.4,64L514.3,64L514.3,160L617.1,160L617.1,128L720,128L720,32L822.9,32L822.9,288L925.7,288L925.7,160L1028.6,160L1028.6,192L1131.4,192L1131.4,224L1234.3,224L1234.3,288L1337.1,288L1337.1,96L1440,96L1440,0L1337.1,0L1337.1,0L1234.3,0L1234.3,0L1131.4,0L1131.4,0L1028.6,0L1028.6,0L925.7,0L925.7,0L822.9,0L822.9,0L720,0L720,0L617.1,0L617.1,0L514.3,0L514.3,0L411.4,0L411.4,0L308.6,0L308.6,0L205.7,0L205.7,0L102.9,0L102.9,0L0,0L0,0Z"></path></svg>
      
      <div className="text-2xl sm:text-3xl text-center xl:mt-20 pb-6 md:m-4">
        Freelance Web Developer based in Nova Lima, Minas Gerais-Brazil.
        <br /> Front-End and Back-End experience.
      </div>
     

        <div className="flex justify-center">      
          <div className="w-5/6">
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

              {repositorios.map(item => <Item key={item.id} item={item} />)}


            </Carousel>          
          </div>
        </div>  
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#0099ff" fill-opacity="1" d="M0,32L48,53.3C96,75,192,117,288,149.3C384,181,480,203,576,181.3C672,160,768,96,864,90.7C960,85,1056,139,1152,138.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </section>
  );
};

export default Works;
