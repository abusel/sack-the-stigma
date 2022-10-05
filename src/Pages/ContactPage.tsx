import { ThemeContext } from "@emotion/react";
import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function ContactPage() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  return (
    <div
      id="wrapper"
      style={{
        backgroundImage: `url("https://gray-wndu-prod.cdn.arcpublishing.com/resizer/GmmPopE4KjZbpsE5VJo1Jl1bKAU=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/IWWPZLTKHRDTVN3TDIBDOTDDCM.jpg")`,
      }}
    >
      <NavBar />
      <header id="header">
        <div className="logo">Get Involved</div>
      </header>
      <footer id="footer" style={{ marginBottom: 60 }}>
        <section>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetch(
                "https://sheet.best/api/sheets/88790b60-f222-4a49-ac55-4c0205217574",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    Name: name,
                    Email: email,
                    Message: message,
                  }),
                }
              ).then((res) => {
                console.log(res);
              });
            }}
          >
            <div className="fields">
              <div
                className="field"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label style={{ marginRight: "auto", marginLeft: "30px" }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="field">
                <label style={{ marginRight: "auto", marginLeft: "30px" }}>
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="field">
                <label style={{ marginRight: "auto", marginLeft: "30px" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={3}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form>
        </section>
      </footer>
      <Footer />
    </div>
  );
  {
    /* 
  <div id="copyright">
    <ul>
      <li>&copy; Untitled</li>
      <li>
        Design: <a href="https://html5up.net">HTML5 UP</a>
      </li>
    </ul>
  </div> */
  }
}
