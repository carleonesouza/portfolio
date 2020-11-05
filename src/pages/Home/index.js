import React, { useEffect } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./styles.css";
import Header from "../../components/Header";

const Home = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div id="page-home">
      <div className="home">
        <Header />
        <div className="content">
          <main>
            <h1>Seu marketplace de coleta de resíduos</h1>
            <p>
              Ajudamos pessoas a encontrarem pontos de coleta de forma
              eficiênte.
            </p>
            <Link to="/create-point" data-aos="fade-right">
              <span>
                <FiLogIn />
              </span>
              <strong>Cadastre um ponto de coleta</strong>
            </Link>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
