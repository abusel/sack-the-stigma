import { Theme, useMediaQuery } from "@mui/material";

export default function TeamProfile(props: {
  name: string;
  blurb: string;
  img: string;
}) {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <div
      style={{
        display: "flex",
        alignItems: "initial",
        gap: isSmallScreen ? 0 : "100px",
        flexDirection: isSmallScreen ? "column" : "row",
      }}
    >
      <header>
        <img
          style={{
            height: "250px",
            width: "200px",
            objectFit: "cover",
          }}
          src={props.img}
          alt={props.name}
        />
        <h2>
          <div>{props.name}</div>
        </h2>
      </header>
      <p>{props.blurb}</p>
    </div>
  );
}
