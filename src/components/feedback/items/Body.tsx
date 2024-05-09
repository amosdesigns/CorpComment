import {type BodyProps } from "../../../lib/types";

const Body = ({company, text}: BodyProps) => {
  return (
    <div>
      <p>{company}</p>
      <p>{text}</p>
    </div>
  );
}

export default Body;