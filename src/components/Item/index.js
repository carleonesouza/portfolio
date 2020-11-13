import React from 'react';
import { FiLogIn } from "react-icons/fi";


const Item =({item}) => {
  
    return(
        <div className="bg-white container sm:mb-6">
          <img
            src={item.owner.avatar_url}
            alt="Avatar"
            className="image rounded"
          />
          <div className="overlay content">
            <div className="text-center custom">
              <h3 className="font-mono ext-lg text-blue-400 uppercase mb-4">{ item.name }</h3>
              <p className="text-sm text-center px-5 py-5"> {item.description} </p>
            </div>

            <div className="text-center">
              <a href={item.html_url} target="_blank" rel="noreferrer">
                <span>
                  <FiLogIn />
                </span>
                <strong>View</strong>
              </a>
            </div>
          </div>
        </div>
    );
}

export default Item;