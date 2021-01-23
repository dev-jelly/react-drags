export const JustBox = ({ val }) => {
  const style = {
    background: "#eeee00",
    border: "1px solid black",
    width: 360,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return <div style={style}>{val}</div>;
};
