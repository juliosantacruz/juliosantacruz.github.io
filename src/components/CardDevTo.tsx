import React  from "react";
import "../styles/CardDevTo.scss";

const CardProjects = ({ data }: any) => {
  return (
    <article className="CardDevTo">
      <div className="CardImage">
        <img src={data.cover_image} alt="" />
      </div>

      <div className="CardContent">
        <h3>{data.title}</h3>
        <ul>
          {data.tag_list.map((element: any, index:number) => {
            return <li key={`${index}-${element.id}`} className="tag"> {element} </li>;
          })}
        </ul>
      </div>

      <div className="CardFooter">
        <p>{data.published_at}</p>
        <a href={data.url} target="_blank">🔅 Read Post</a>
      </div>
    </article>
  );
};

export default CardProjects;
