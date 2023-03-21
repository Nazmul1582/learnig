import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div>
      <h1>Post Page</h1>
      <ul className="list">
        <li>
          <h2>Post 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            impedit non nam velit natus repellendus!
          </p>
          <Link className="btn" to="/posts/1">
            Read More
          </Link>
        </li>
        <li>
          <h2>Post 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            impedit non nam velit natus repellendus!
          </p>
          <Link className="btn" to="/posts/2">
            Read More
          </Link>
        </li>
        <li>
          <h2>Post 3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            impedit non nam velit natus repellendus!
          </p>
          <Link className="btn" to="/posts/3">
            Read More
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Posts;
