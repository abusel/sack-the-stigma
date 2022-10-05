import { Button } from "@mui/material";
import syc from "../images/soho youth logo.png";
import valiant from "../images/valiant-yellow.png";
export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#00274C",
        width: "100%",
        marginTop: "40px",
        padding: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          gap: "60px",
        }}
      >
        <a
          style={{
            backgroundColor: "white",
            height: "40px",
            width: "40px",
            borderRadius: "4px",
          }}
          target="_blank"
          rel="noreferrer"
          href={"https://www.sohoyouthclub.com/"}
        >
          <img
            src={syc}
            style={{ height: "100%", width: "100%" }}
            alt="Soho Youth Club logo"
          />
        </a>
        <a
          style={{
            backgroundColor: "white",
            height: "40px",
            width: "40px",
            borderRadius: "4px",
          }}
          target="_blank"
          rel="noreferrer"
          href="https://valiantuofm.com/"
        >
          <img
            src={valiant}
            style={{ height: "100%", width: "100%" }}
            alt="Valiant logo"
          />
        </a>
      </div>
      <div id="copyright" style={{ marginBottom: "40px", marginTop: "30px" }}>
        <ul>
          <li>&copy; Sack The Stigma</li>
          <li>Soho Youth Club</li>
          <li>Valiant</li>
        </ul>
      </div>
    </div>
  );
}
