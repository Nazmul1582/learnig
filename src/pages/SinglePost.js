import React from "react";
import { Link, useParams } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Post {id}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
        animi expedita quibusdam explicabo sint possimus ad deserunt, vero
        veniam dolore neque consequatur necessitatibus modi eius ratione esse
        aut reprehenderit commodi tempora odio incidunt beatae placeat labore
        similique? Velit minima facilis repellendus quam repudiandae sit rerum
        iure totam ea reprehenderit pariatur eius sed illum eos corporis soluta,
        veritatis perspiciatis omnis non laboriosam, voluptatibus,
      </p>
      <p style={{ marginBottom: "20px" }}>
        nesciunt molestiae quia nostrum! Nobis aliquam suscipit veniam inventore
        aspernatur iusto, itaque libero debitis fugiat iure odit officia maiores
        nemo tempora accusantium totam aperiam! Quasi ex tenetur dicta fuga
        doloribus omnis eum, provident debitis impedit assumenda quibusdam
        minima!
      </p>
      <Link className="btn" to="/posts">
        Back
      </Link>
    </div>
  );
};

export default SinglePost;
