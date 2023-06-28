import { useState, useEffect } from "react";

const FavouriteColor = () => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <>
      <h1>My favourite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
    </>
  );
};

export default FavouriteColor;
