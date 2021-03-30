import React from "react";

const Image = (props) => {
  const { imgSrc } = props;

  const preparedImages = imgSrc.map((image) => {
    return (
      <img src={image.urls.regular} alt="Resim" />
    );
  });

  return <React.Fragment>{preparedImages}</React.Fragment>;
};

export default Image;
