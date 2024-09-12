import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
const photos = [
  {
    src: "./1.jpg",
    message:
      "🎂Wishing you a year ahead filled with love, success, and good health. Happy birthday!🎉🥳",
  },
  {
    src: "./10.jpg",
    message:
      "🌞 Another trip around the sun! May this year be your best one yet. 🎈🎁",
  },
  {
    src: "./3.jpg",
    message:
      "🌟 May this year bring you new adventures and unforgettable memories. 🎂🎊",
  },
  {
    src: "./4.jpg",
    message:
      "🥂 You’re not getting older; you’re getting better! Cheers to a fabulous year ahead. 🎂🎉",
  },

  {
    src: "./6.jpg",
    message:
      "😊 May your birthday be as bright and beautiful as your smile. Enjoy every moment! 🎁🎊",
  },
  {
    src: "./7.jpg",
    message:
      "🧘‍♂️They say wisdom comes with age. You must be the exception to the rule. 🎂🎈",
  },
  {
    src: "./8.jpg",
    message:
      "🤣 Happy Birthday! Remember, it’s not about the number of years, it’s about how many people you’ve annoyed in that time. 🎉🎂",
  },
  {
    src: "./5.jpg",
    message:
      "🎈 Another year older and still as immature as ever. Some things never change! 🎂🎁",
  },
  {
    src: "./2.jpg",
    message: "🍰 Wishing you a day filled with love, laughter, and cake! 🎊🎂",
  },
];

const PhotoBox = styled(Box)({
  width: "100%",
  overflowY: "auto",
  maxHeight: "500px",
  marginTop: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  scrollbarWidth: "none", // For Firefox
  "&::-webkit-scrollbar": {
    display: "none", // For Chrome, Safari, and Opera
  },
});

const PhotoContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  opacity: 0,
  transition: "opacity 0.5s ease-in-out",
  "&.visible": {
    opacity: 1,
  },
});

const Photo = styled("img")({
  width: "100%",
  borderRadius: "8px",
});

const Message = styled(Typography)({
  marginTop: "10px",
  fontSize: "1.3rem",
  color: "black",
});

function PhotoCard() {
  const photoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    photoRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      photoRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <PhotoBox id="photo-box">
      {photos.map((photo, index) => (
        <PhotoContainer
          key={index}
          ref={(el) => (photoRefs.current[index] = el)}
        >
          <Photo src={photo.src} alt={`Photo ${index + 1}`} />
          <Message>{photo.message}</Message>
        </PhotoContainer>
      ))}
    </PhotoBox>
  );
}

export default PhotoCard;
