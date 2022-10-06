import { TabPanelUnstyled } from "@mui/base";
import { Tabs, Theme, useMediaQuery } from "@mui/material";
import { useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";
import TeamProfile from "../components/TeamProfile";
import TextTab from "../components/TextTab";
import { useQuery } from "../utils";
import brett from "../images/brett_headshot_2.jpg";
import jared from "../images/jared1.jpg";
import carly from "../images/carly_headshot.jpg";
import Footer from "../components/Footer";
import background from "../images/FBL13-NotreDame.jpg";

const TABS = ["mission", "team"];
export default function AboutPage() {
  let [tabQuery, setTabQuery] = useQuery("tab");
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <div>
      <NavBar />

      <div
        id="wrapper"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "contain",
        }}
      >
        <header id="header">
          <div className="logo">About Us</div>
        </header>

        <nav id="nav">
          <ul className="links">
            <li
              className={
                tabQuery === "mission" ||
                !tabQuery ||
                TABS.indexOf(tabQuery) === -1
                  ? "active"
                  : undefined
              }
            >
              <div
                onClick={() => {
                  setTabQuery("mission");
                }}
              >
                Our Mission
              </div>
            </li>
            <li className={tabQuery === "team" ? "active" : undefined}>
              <div
                onClick={() => {
                  setTabQuery("team");
                }}
              >
                Our Team
              </div>
            </li>
          </ul>
        </nav>

        {(tabQuery === "mission" ||
          !tabQuery ||
          TABS.indexOf(tabQuery) === -1 ||
          isSmallScreen) && (
          <div style={{ marginBottom: 60 }}>
            <TextTab
              title="Our Mission"
              subtitle="Sack the Stigma is a joint partnership between Soho Youth Club and Valiant, focused on destigmatizing mental health and increasing healthcare opportunities amongst students, recently graduated young adults, and student-athletes. We hope to continue to eradicate the stigma surrounding mental health by raising awareness and funds to assist those who cannot afford therapeutic care."
              body="Sack the Stigma will continuously create clothing collections that will be sold online and in-store at all M Den locations. All proceeds from the collections will be used to help those receive access to better care. Proceeds from licensed University of Michigan products will be donated to the University of Michigan Student-Athlete Health & Welfare Athletic Counseling services and initiatives. Proceeds from non-licensed products will be donated to BLND Health, a private practice who uses a person-centered approach to therapy. Funds allocated to BLND Health will be utilized within their Low-Cost Therapy Program which allows students and recently graduated students to receive care that they otherwise would not be able to afford. Through this campaign, we hope to kickstart conversations surrounding mental health and well-being as we prepare to Sack the Stigma through normalizing conversations about mental health and providing specific means to provide care."
            />
          </div>
        )}
        {(tabQuery === "team" || isSmallScreen) && (
          <div style={{ marginBottom: 60 }}>
            <TextTab
              title="Our Team"
              body={
                <section
                  className="posts"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "80px",
                  }}
                >
                  <TeamProfile
                    name="Brett Gray"
                    blurb="Brett is the founder of both Soho Youth Club and Wagyu Solutions and is currently a senior in the Ross School of Business at the University of Michigan. Brett works tirelessly through Soho Youth Club to provide local youth with experience-driven career and educational opportunities. He releases various merchandise collections, and uses profits to fund initiatives focused on introducing underprivileged youth to unique career paths and learning experiences. Brett also places an emphasis on raising awareness of mental health issues in hopes of creating a more supportive, sustainable, and successful future. "
                    img={brett}
                  />

                  <TeamProfile
                    name="Jared Wangler"
                    blurb="Jared Wangler is a former University of Michigan football player, and the founder of Valiant Management Group. Jared played fullback for the Wolverines from 2014 to 2018 and was a four time Academic All Big Ten player. Jared studied psychology and entrepreneurship in his time at Michigan and always had a passion to pursue business opportunities that would align with his love and deep respect for college athletics. As a former student-athlete himself, Jared aspires to empower the current generation of athletes to speak up and seek help when it comes to their personal mental health battles.."
                    img={jared}
                  />
                  <TeamProfile
                    name="Carly Silverstein "
                    blurb="Carly Silverstein is a Masters in Social Work (MSW '23) Student at the University of Michigan with a focus on mental health and performance for student athletes. Carly is also working towards her Certified Mental Performance Consultant Certification (CMPC). Her clinical field placement is with BLND Health and she has worked with both Michigan and Georgia Football Recruiting Programs. Carly previously attended the University of Georgia where she received her Bachelors in Psychology and Minors in Sport Management and Human Development and Family Sciences. Mental Health is incredibly important to her, and she is passionate about breaking the stigma associated with people seeking help as she lost two classmates to suicide and knows many who have struggled with mental illness. "
                    img={carly}
                  />
                </section>
              }
            />
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}
