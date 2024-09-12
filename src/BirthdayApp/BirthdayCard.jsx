import { Typography } from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";

function BirthdayCard() {
  return (
    <div>
      <CakeIcon
        sx={{
          fontSize: 100,
          color: "#f8bbd0",
          animation: "spin 3s linear infinite",
          "@keyframes spin": {
            from: { transform: "rotate(0deg)" },
            to: { transform: "rotate(360deg)" },
          },
        }}
      />
      <Typography variant="h3" component="h1" gutterBottom>
        🎊 Happy Birthday🎊 ✨ NAME✨
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        May your day be filled with joy, laughter, and all the things that make
        you smile
      </Typography>
      <Typography variant="h4">👇Scroll to Smile😁</Typography>
    </div>
  );
}

export default BirthdayCard;
