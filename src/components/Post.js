import React from "react";

function Post(props){
  const title = "Worst Day";
  return (
    <React.Fragment>
      <h2>{props.title}</h2>
      <p>{props.submission}</p>
      <hr/>
    </React.Fragment>
  );
}

export default Ticket;