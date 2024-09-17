const Weather = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right,#ff6e7f, #bfe9ff)",
        width: "100vw",
        padding: "10px",
        boxSizing: "border-box",
        overflowX: "hidden",
        "@media (max-width: 960px)": {
          width: "90vw",
        },
        "@media (max-width: 600px)": {
          width: "80vw",
        },
        "@media (max-width: 400px)": {
          width: "70vw",
        },
      }}
    ></div>
  );
};

export default Weather;
