import axios from "axios";
import React, { useEffect, useState } from "react";

const GetImage = () => {
  const [Images, setImages] = useState([]);
  const [selectedImg, setSelectedImg] = useState("");

  const getData = async () => {
    const url =
      "https://pixabay.com/api/?key=26364314-9f896cfb87ae9a0d9340d39b5&image_type=all&per_page=9&q=flower";
    const response = await axios.get(url);
    console.log(response.data);
    setImages(response.data.hits);
    setSelectedImg(response.data.hits[0].webformatURL);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="imgContainer">
        <div className="selectedcontainer">
          <img src={selectedImg} alt="Selected" className="selected" />
        </div>
        <div className="imagecontainer">
          {Images.map((img, index) => (
            <img
              key={index}
              src={img.webformatURL}
              alt="tantuni"
              onClick={() => setSelectedImg(img.webformatURL)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GetImage;
