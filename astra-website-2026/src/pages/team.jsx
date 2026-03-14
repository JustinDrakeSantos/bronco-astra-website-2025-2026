import { useState } from "react";
import "../styles/teams.css";
import picture from "../assets/picture-placeholder.png";
import team from "../assets/placeholder-team-picture.png";
import danielle from "../assets/danielle-king-img.png";
import ashton from "../assets/ashton-vogel-img.png";
import alissa from "../assets/alissa-vis.png";
import ben from "../assets/ben-systems.png";
import stephen from "../assets/stephen-uav-design.png";
import waamiq from "../assets/waamiq-gnc.png";
import ryan from "../assets/ryan-obj-rec.png";
import kevin from "../assets/kevin-obs-avo.png";
import bhandari from "../assets/bhandari-advisor.png";
import joshua from "../assets/joshua-estrada-software-mentor.png";
import max from "../assets/max-software-mentor.png";

function CardFront({ image, name, role, showHint = false }) {
  return (
    <div className="flip-card__face flip-card__front">
      <img className="flip-card__img" src={image} alt={name} />
      <div className="flip-card__front-caption">
        <h3>{name}</h3>
        <p>{role}</p>

        {showHint && (
          <div className="flip-card__hint-front">
            <span>Learn More</span>
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              aria-hidden="true"
              className="chevron-icon"
            >
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

function FlipCard({ image, name, role, backText }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      className="flip-card"
      onClick={() => setFlipped((v) => !v)}
      aria-pressed={flipped}
      aria-label={`Flip card for ${name}`}
    >
      <div className={`flip-card-inner ${flipped ? "is-flipped" : ""}`}>
        {/* FRONT */}
        <CardFront image={image} name={name} role={role} showHint />
        {/* BACK */}
        <div className="flip-card__face flip-card__back">
          <h3>{name}</h3>
          <p className="flip-card__role">{role}</p>
          <p className="flip-card__text">{backText}</p>
          {Array.isArray(backText) ? (
            backText.map((paragraph, index) => (
              <p key={index} className="flip-card__text">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="flip-card__text">{backText}</p>
          )}
          <div className="flip-card__hint-back">
            <span>Flip Back</span>
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              aria-hidden="true"
              className="chevron-icon chevron-back"
            >
              <path
                d="M15 6l-6 6 6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
}

function MemberCard({ image, name, role }) {
  return (
    <div className="profile-card" aria-label={`${name}, ${role}`}>
      <div className="profile-card-inner">
        <CardFront image={image} name={name} role={role} />
      </div>
    </div>
  );
}

function Team() {
  return (
    <>
      <div className="team-page--shell">
        <div className="team-page--grid">
            <aside className="sidenav-container" aria-label="On This Page">
          <h2>On This Page</h2>
          <ul>
            <li>
              <a href="#leads">Project Leads</a>
            </li>
            <li>
              <a href="#uav">UAV Design</a>
            </li>
            <li>
              <a href="#payload">Payload</a>
            </li>
            <li>
              <a href="#gnc">GNC</a>
            </li>
            <li>
              <a href="#obj-rec">Object Recognition</a>
            </li>
            <li>
              <a href="#obs-avo">Obstacle Avoidance</a>
            </li>
            <li>
              <a href="#sys">Systems</a>
            </li>
            <li>
              <a href="#advisors">Advisors</a>
            </li>
            <li>
              <a href="#sponsors">Sponsors</a>
            </li>
          </ul>
            </aside>
            <div className="team-content">
          <div className="team-page__header">
            <h1>Meet the Minds</h1>
            <img src={team} alt="Team Picture" id="team-picture" />
          </div>
          <div className="project-leads-container" id="leads">
            <h2 className="project-leads-container__title">Project Leads</h2>
            <div className="project-leads-cards">
              <FlipCard
                image={ashton}
                name="Ashton Vogel"
                role="Electrical & Software Lead"
                backText={[
                  "Ashton began his journey on the team as a member of both the Electrical Integration and Autonomous Navigation subteams before being promoted to lead. He is a senior Electrical Engineering major with hands-on experience in amplifier design, embedded systems, and circuit-level troubleshooting. His background has made him a key contributor to integrating the drone’s complex electrical systems.",

                  "As the Electrical Integration Lead, Ashton oversees the drone’s wiring, power distribution, and component connectivity, ensuring all hardware functions reliably and efficiently. He also collaborates closely with the Autonomous Navigation team, focusing on the configuration and optimization of the Pixhawk and Ardupilot systems for smooth autonomous operation. Ashton’s dual role enables him to support critical communication between flight control and onboard electronics.",

                  "In his free time, Ashton enjoys weightlifting, video games, and studying the Bible. He is motivated by the team’s growth and technical achievements, and is excited to see the project come to life at competition in Maryland.",
                ]}
              />
              <FlipCard
                image={danielle}
                name="Danielle King"
                role="Structural & Systems Lead"
                backText={[
                  "Danielle is a third-year Aerospace Engineering student with a focus on Systems Engineering. Her passion for organization and efficiency made her a natural fit to lead the Systems team, where she manages tasks that support the project across all subteams. Her role includes scheduling, documentation, risk analysis, trade studies, and facilitating communication between leads to ensure a streamlined and cohesive workflow.",

                  "As Systems Lead, Danielle helps maintain project alignment by tracking milestones and deliverables, while also guiding cross-team integration to prevent delays and misunderstandings. Her efforts keep the team grounded, ensuring that technical progress matches the overall mission timeline.",

                  "In her free time, Danielle enjoys traveling, baking, exploring new foods, and playing video games. She’s excited to apply the hands-on experience from this project to her upcoming internship at Northrop Grumman and is proud to see the drone come together for the competition in Maryland.",
                ]}
              />
            </div>
          </div>
          <div className="UAV-Design-container" id="uav">
            <h2 className="uav-design--title">
              Unmanned Aerial Vehicle Design <br /> UAVD
            </h2>
            <section className="UAVD-lead">
              <FlipCard
                image={stephen}
                name="Stephen Posner"
                role="UAV Design Lead"
                backText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
              <FlipCard
                image={alissa}
                name="Alissa Everman"
                role="Vehicle Integration Systems Lead"
                backText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </section>
            <section className="UAVD-members">
              <MemberCard
                image={picture}
                name="Neithen Navarro"
                role="UAV Design Member"
              />
              <MemberCard
                image={picture}
                name="Ian Coffman"
                role="UAV Design Member"
              />
              <MemberCard
                image={picture}
                name="Sarah Pu"
                role="UAV Design Member"
              />
              <MemberCard
                image={picture}
                name="Jacob Alatorre"
                role="UAV Design Member"
              />
              <MemberCard
                image={picture}
                name="Sullivan Barber"
                role="UAV Design Member"
              />
              <MemberCard
                image={picture}
                name="Kenneth Su"
                role="UAV Design Member"
              />
              <MemberCard
                image={picture}
                name="Jack Najarian"
                role="UAV Design Member"
              />
            </section>
          </div>
          <div className="payload-container" id="payload">
            <h2 className="payload--title">Payload</h2>
            <section className="payload-lead">
              <FlipCard
                image={picture}
                name="Robbie Adriano"
                role="Payload Lead"
                backText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
              <FlipCard
                image={alissa}
                name="Alissa Everman"
                role="Vehicle Integration Systems Lead"
                backText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </section>
            <section className="payload-members">
                <MemberCard image={picture} name="Harrison Chung" role="Payload Member" />
                <MemberCard image={picture} name="Alex Silyaev" role="Payload Member" />
                <MemberCard image={picture} name="Jose A. Mora" role="Payload Member" />
                <MemberCard image={picture} name="Aiden Sanchez" role="Payload Member" />
            </section>
          </div>
          <div className="GNC-container" id="gnc">
            <h2 className="gnc--title">
              Guidance, Navigation, and Control <br /> GNC
            </h2>
            <section className="gnc-lead">
              <FlipCard
                image={waamiq}
                name="Waamiq Sharrar"
                role="GNC Lead"
                backText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </section>
            <section className="gnc-members">
                <MemberCard image={picture} name="John Fernandez" role="GNC Member" />
                <MemberCard image={picture} name="Isaac Gutierrez" role="GNC Member" />
                <MemberCard image={picture} name="Nathaniel Santella" role="GNC Member" />
                <MemberCard image={picture} name="Max Fine" role="GNC Member" />
                <MemberCard image={picture} name="Andrew A" role="GNC Member" />
                <MemberCard image={picture} name="Michael Kaydanik" role="GNC Member" />
                <MemberCard image={picture} name="Francisco Pulido" role="GNC Member" />
                <MemberCard image={picture} name="Stephen Liu" role="GNC Member" />
                <MemberCard image={picture} name="Francis Saspa" role="GNC Member" />
                
            </section>
          </div>
          <div className="object-recognition-container" id="obj-rec">
            <h2 className="object-recognition--title">Object Recognition</h2>
            <section className="obj-rec-lead">
              <FlipCard
                image={ryan}
                name="Ryan Tran"
                role="Object Recognition Lead"
                backText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </section>
            <section className="obj-rec-members">
                <MemberCard image={picture} name="Michael Castillo" role="Object Recognition - Machine Learning/ Integration" />
                <MemberCard image={picture} name="Len Sakimukai" role="Object Recognition - Mapping/ Integration" />
                <MemberCard image={picture} name="Areg Hovumyan" role="Object Recognition - Machine Learning/ Integration" />
                <MemberCard image={picture} name="Justin Drake Santos" role="Object Recognition - Mapping/ Website Developer" />
                <MemberCard image={picture} name="Dat Nguyen" role="Object Recognition - Machine Learning/ Integration" />
                <MemberCard image={picture} name="Jimmy Nguyen" role="Object Recognition - Machine Learning / Integration" />

            </section>
          </div>
          <div className="obstacle-avoidance-container" id="obs-avo">
            <h2 className="obstacle-avoidance--title">Obstacle Avoidance</h2>
            <section className="obs-avo-lead">
              <FlipCard
                image={kevin}
                name="Kevin Kopcinski"
                role="Obstacle Avoidance Lead"
                backText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </section>
            <section className="obs-avo-members">
                <MemberCard image={picture} name="Rachel Martinez" role="Obstacle Avoidance" />
                <MemberCard image={picture} name="Pawel Chowdhury" role="Obstacle Avoidance" />
                <MemberCard image={picture} name="Hope Gomez" role="Obstacle Avoidance/ Web Developer" />
            </section>
          </div>
          <div className="systems-container" id="sys">
            <h2 className="systems--title">Systems</h2>
            <section className="systems-lead">
              <FlipCard
                image={ben}
                name="Thien Nam Anh Vu"
                role="Systems Lead"
                backText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </section>
            <section className="systems-members">
                <MemberCard image={picture} name="Allison Hongo" role="Systems Member" />
                <MemberCard image={picture} name="Michelle Ramirez" role="Systems Member" />
                <MemberCard image={picture} name="Mia Zavala" role="Systems Member" />
                <MemberCard image={picture} name="Matthew Martinez" role="Systems Member" />
            </section>
          </div>
          <div className="advisors-container" id="advisors">
            <h2 className="advisors--title">Advisors</h2>
            <div className="advisors">
                <FlipCard 
                    image = { bhandari }
                    name = "Dr. Subodh Bhandari"
                    role = "Project Advisor"
                    backText = "Dr. Subodh Bhandari is a Professor and Chair of the Aerospace Engineering Department at Cal Poly Pomona. He specializes in autonomous flight control, obstacle avoidance, GPS-denied navigation, and multi-vehicle coordination. His research has been funded by the National Science Foundation and other organizations, and he has led projects in UAV control systems, navigation, and search-and-rescue applications. As the project advisor for the Cal Poly Pomona SUAS (Small Unmanned Aircraft Systems) team, Dr. Bhandari provides expert guidance on UAV design, autonomous systems, and control technologies, helping to drive the team’s progress in developing cutting-edge drone systems for competitions and research projects."
                />
            </div>
            <div className="mentors">
                <FlipCard
                    image = { joshua }
                    name = "Joshua Estrada"
                    role = "Software Mentor"
                    backText = {[
                        "Joshua joined the Object Recognition team in 2023 and was promoted to lead the following year. A third-year Computer Science major, he has experience in computer vision, autonomous systems, and robotics frameworks like ROS. His technical skills have been essential in rebuilding the object recognition pipeline from the ground up.",

                        "As the Object Recognition Lead, Joshua oversees the integration of object detection, object tracking, and image mapping on the NVIDIA Jetson. His team is responsible for training and deploying machine learning models (such as YOLO), coordinating GPS tagging, and ensuring communication with the Pixhawk to enable real-time target localization. He plays a vital role in connecting perception to action within the autonomous flight system.",

                        "Outside of engineering, Joshua enjoys weightlifting, swimming, board games, and movies. He is motivated by the opportunity to gain real-world, industry-relevant experience and is proud of his team’s growth. He looks forward to seeing their work in action at the competition in Maryland."
                    ]}
                />
                <FlipCard
                    image = { max }
                    name = "Max Gross"
                    role = "Software Mentor"
                    backText = {[
                        "Max has been part of the team for over a year and stepped into a lead role this season. A third-year Computer Engineering student, he brings experience from internships and personal projects, including working at Astranis on PCB and circuit design, and conducting radiation testing at Lawrence Berkeley National Laboratory. He also leads a project building a smartphone from scratch, showcasing his strong technical foundation.",

                        "As the Obstacle Avoidance Lead, Max is responsible for ensuring the drone can detect and respond to obstacles during flight. He integrates sensors, refines detection algorithms, and tests response systems both in simulation and in real-world conditions. His work is crucial to the drone’s autonomy and overall mission success, especially in dynamic environments.",

                        "Outside of the lab, Max enjoys surfing and competitive gaming, having earned a national title in Team Fortress 2. He's motivated by the interdisciplinary nature of the project and excited to see the team's collective effort come together on competition day."
                    ]}
                />
            </div>
          </div>
          <div className="sponsors-container" id="sponsors">
            <h2 className="sponsors--title">Sponsors</h2>
            <img src={picture} />
          </div>
            </div>
        </div>
      </div>
      
    </>
  );
}

export default Team;
