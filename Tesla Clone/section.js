import React from "react";

function section(props) {
  return (
    <div className="bcimg" style = {{backgroundImage: `url('tesla images/${props.backgroundImage}')`}} >
      <section className="Content">
        <section className="UpperContent">
          <h1>{props.model}</h1>
          <p>
            <a href="">{props.text}</a>
          </p>
        </section>
        <section className="LowerContent">
          <a href="">{props.btnLeft}</a>
          {props.btnRight && <a href="">{props.btnRight}</a>}
          <div className="arrow">
            {props.arrow && <img src="tesla images/down-arrow.svg" />}
          </div>
        </section>
      </section>
    </div>
  );
}

export default section;
