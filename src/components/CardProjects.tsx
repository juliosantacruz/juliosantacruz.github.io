import React from "react";
import "../styles/CardProjects.scss";

const CardProjects = ({ data }: any) => {


  return (
    <article className="CardProjects">
      <div className="CardImage">
        <img src={data.imgProject.src} alt="" />
      </div>

      <div className="CardContent">
        <h3>{data.title}</h3>
        <ul>
          {data.stack.map((element: any) => {
            return <li key={element.name}><img className="iconTech" src={element.icon} alt="" /> {element.name} </li>;
          })}
        </ul>
      </div>

      <div className="CardFooter">
        <p>{data.language}</p>

        <a href={data.url} target="_blank">{data.btnLabel}</a>
      </div>
    </article>
  );
};

export default CardProjects;
