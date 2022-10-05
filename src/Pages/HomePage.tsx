import { Theme, Typography, useMediaQuery } from "@mui/material";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../css/main.css";
export default function HomePage() {
  return (
    <div
      id="wrapper"
      className="fade-in"
      style={{
        backgroundImage: `url("https://gray-wndu-prod.cdn.arcpublishing.com/resizer/GmmPopE4KjZbpsE5VJo1Jl1bKAU=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/IWWPZLTKHRDTVN3TDIBDOTDDCM.jpg")`,
      }}
    >
      <NavBar />
      <div id="intro">
        <h1>
          Sack the
          <br />
          Stigma
        </h1>
        <p>
          A movement dedicated to helping athletes seek help for mental
          struggles
        </p>
        <ul className="actions">
          <li>
            <a
              href="#header"
              className="button icon solid solo fa-arrow-down scrolly"
            >
              Continue
            </a>
          </li>
        </ul>
      </div>

      {/* <!-- Header --> */}
      <header id="header">
        <a href="index.html" className="logo">
          Massively
        </a>
      </header>

      {/* <!-- Main --> */}
      <div id="main">
        {/* <!-- Featured Post --> */}
        <article className="post featured">
          <header className="major">
            <h2>
              <a href="#">
                What is Sack the Stigma?
                <br />
              </a>
            </h2>
            <p>
              Sack the Stigma is a joint partnership between Soho Youth Club and
              Valiant, focused on destigmatizing mental health and increasing
              healthcare opportunities amongst students, recently graduated
              young adults, and student-athletes. We continuously put out
              different collections of Sack the Stigma merchandise, and proceeds
              are used to benefit those who cannot afford adequate therapy. Our
              current collection is now available for purchase{" "}
              <a
                href={"https://www.sohoyouthclub.com"}
                target={"_blank"}
                rel="noreferrer"
              >
                HERE
              </a>
              .
            </p>
          </header>
          <a href="#" className="image main">
            <img src="images/pic01.jpg" alt="" />
          </a>
          <ul className="actions special">
            <li>
              <a href="/about" className="button large">
                Learn More
              </a>
            </li>
          </ul>
        </article>
      </div>
      <footer id="footer">
        <section
          style={{
            marginTop: 50,
            marginBottom: 50,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="video-responsive" style={{ display: "flex" }}>
            <iframe
              // width={isSmallScreen ? "95%" : 853}
              // height={isSmallScreen ? "70%" : 480}
              style={{
                marginBottom: 26,
                width: "100%",
                aspectRatio: "16 / 9",
              }}
              src={`https://www.youtube.com/embed/BHduKByQrTE`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </section>
      </footer>
      <Footer />
    </div>
  );
}
