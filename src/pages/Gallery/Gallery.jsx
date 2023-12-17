import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { collection, getDocs, query } from "firebase/firestore";

import { useEffect, useState } from "react";
import { db } from "../../firebase.config";
import "./gallery.scss";

const Gallery = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Get reference
        const imagesRef = collection(db, "scrapbook");

        // Create a query
        const q = query(imagesRef);

        // Execute query
        const querySnap = await getDocs(q);

        const images = [];

        querySnap.forEach((doc) => {
          return images.push({
            id: doc.id,
            img: doc.data().img,
            title: doc.data().title,
          });
        });

        setImages(images);
        setLoading(false);
      } catch (error) {
        console.error("Could not fetch images");
      }
    };

    fetchImages();
  }, []);

  return (
    <Box sx={{ width: "100%", height: "100%", overflowY: "scroll" }}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ImageList variant="masonry" cols={3} gap={8}>
          {images.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Box>
  );
};

export default Gallery;
