import React, {useEffect, useState } from "react";
import axios from 'axios';

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
  return (
    <section className="px-8 " id="page-work">
      <div className="text-2xl sm:text-3xl text-center xl:mt-20 pb-6 md:m-4">
        Freelance Web Developer based in Nova Lima, Minas Gerais-Brazil.
        <br /> Front-End and Back-End experience.
      </div>

      <div className="gap-4 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 ">      
        {
           repositorios.map(item => <Item key={item.id} item={item}/>)
        }
      </div>
    </section>
  );
};

export default Works;
