import { useEffect, useState } from "react";
import alt from "../../../assets/user.png";
import PropTypes from "prop-types";
const Images = ({ img, ...props }) => {
   const [myImg, setMyImg] = useState(null);
   useEffect(() => {
      setMyImg(img);
   }, [img]);
   return <img src={myImg !== null ? myImg : alt} {...props} />;
};

export default Images;

Images.propTypes = {
   img: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
};
