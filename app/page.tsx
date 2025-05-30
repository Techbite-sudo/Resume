"use client"

import { useEffect } from "react"
import Head from "next/head"

export default function Resume() {
  useEffect(() => {
    // Optimize for print when page loads
    const printStyles = document.createElement("style")
    printStyles.textContent = `
      @media print {
        * { -webkit-print-color-adjust: exact !important; }
      }
    `
    document.head.appendChild(printStyles)

    // Add print button for easy access
    const printButton = document.createElement("button")
    printButton.textContent = "🖨️ Print/Save as PDF"
    printButton.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      z-index: 1000;
      background: #2e7d63;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 14px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    `
    printButton.onclick = () => {
      // Add a small delay to ensure styles are applied
      setTimeout(() => {
        window.print()
      }, 100)
    }

    // Hide button when printing
    const hideButtonForPrint = document.createElement("style")
    hideButtonForPrint.textContent = `
      @media print {
        button { display: none !important; }
      }
    `
    document.head.appendChild(hideButtonForPrint)

    document.body.appendChild(printButton)

    // Cleanup function
    return () => {
      document.body.removeChild(printButton)
      document.head.removeChild(printStyles)
      document.head.removeChild(hideButtonForPrint)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Boniface Mwema - Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        {/* LEFT SIDEBAR */}
        <div className="sidebar">
          <div className="profile-section">
            <div className="profile-img">👤</div>
            <div className="name">
              BONIFACE
              <br />
              MWEMA
            </div>
            <div className="title">SOFTWARE ENGINEER</div>
          </div>

          <div className="sidebar-section">
            <h3>Details</h3>
            <p>
              Nairobi
              <br />
              Kenya
              <br />
              +254748271218
              <br />
              <a href="mailto:bonfacemwema7@gmail.com">bonfacemwema7@gmail.com</a>
            </p>
          </div>

          <div className="sidebar-section">
            <h3>Links</h3>
            <p>
              <a href="#" target="_blank" rel="noreferrer">
                My Portfolio
              </a>
              <br />
              <a href="#" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <br />
              <a href="#" target="_blank" rel="noreferrer">
                Github
              </a>
            </p>
          </div>

          <div className="sidebar-section">
            <h3>Skills</h3>
            <ul className="skills-list">
              <li>MySQL</li>
              <li>HTML & CSS</li>
              <li>SQL</li>
              <li>Git</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Teamwork</li>
              <li>Next.js</li>
              <li>Collaboration</li>
              <li>Linux</li>
              <li>PostgreSQL</li>
              <li>Golang</li>
              <li>GraphQL APIs</li>
              <li>Rest APIs</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Languages</h3>
            <p>
              English
              <br />
              Kiswahili
            </p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="main-content">
          {/* PROFILE SECTION */}
          <div className="section">
            <h2>Profile</h2>
            <div className="profile-summary">
              <h3>Professional Summary</h3>
              <p>
                Results-driven developer skilled in web and mobile apps. Expert in JavaScript, Next.js, React, Golang,
                graphQL APIs, Restfull APIs, and innovative mobile solutions. Seeking impactful projects and
                collaborative teams.
              </p>
            </div>
          </div>

          {/* EMPLOYMENT HISTORY */}
          <div className="section">
            <h2>Employment History</h2>

            <div className="job-entry">
              <div className="job-header">
                <div className="job-title">
                  <h3>Backend Developer, StatsSpeak Limited Company</h3>
                  <div className="job-company">Nairobi</div>
                </div>
                <div className="job-dates">JUNE 2024 — PRESENT</div>
              </div>
              <div className="job-description">
                <ul>
                  <li>
                    Built a book-sharing platform: Designed and developed the "Readmasters" platform, enabling students
                    from registered schools to access a vast library of books without the need for purchase, fostering a
                    collaborative reading environment.
                  </li>
                  <li>
                    Developed a scalable e-commerce backend: Created a RESTful API as the backend for the Nyumbani
                    Greens e-commerce application, significantly enhancing scalability and reducing latency, improving
                    the user experience and operational efficiency.
                  </li>
                  <li>
                    Led website development for Statspeak: Developed and maintained the Statspeak website, ensuring a
                    seamless user experience, optimized performance, and increased traffic for the company's online
                    presence.
                  </li>
                  <li>
                    Creating an HPV care management system: Currently developing a comprehensive health system to assist
                    HPV patients in receiving timely, appropriate care and managing their health more effectively
                    through advanced tracking and care coordination features.
                  </li>
                </ul>
              </div>
            </div>

            <div className="job-entry">
              <div className="job-header">
                <div className="job-title">
                  <h3>Back-End Developer, TENN Explorations</h3>
                  <div className="job-company">Nairobi</div>
                </div>
                <div className="job-dates">NOVEMBER 2023 — FEBRUARY 2024</div>
              </div>
              <div className="job-description">
                <ul>
                  <li>Developing and maintaining server-side functionalities using Golang and GraphQL.</li>
                  <li>Designing and optimizing databases using PostgreSQL for efficient data storage and retrieval.</li>
                  <li>
                    Collaborating with front-end developers to ensure seamless integration of front-end and back-end
                    components.
                  </li>
                  <li>Implementing security measures to protect sensitive user data.</li>
                </ul>
              </div>
            </div>

            <div className="job-entry">
              <div className="job-header">
                <div className="job-title">
                  <h3>Full-Stack Developer for AYTP LMS System, Adanian Labs (Ngamea Games)</h3>
                  <div className="job-company">Nairobi</div>
                </div>
                <div className="job-dates">OCTOBER 2022 — APRIL 2023</div>
              </div>
              <div className="job-description">
                <ul>
                  <li>Designing and implementing front-end interfaces using React and Next.js.</li>
                  <li>Developing server-side functionalities using Django and GraphQL.</li>
                  <li>
                    Collaborating with a team of developers to ensure seamless integration of front-end and back-end
                    components.
                  </li>
                  <li>
                    Optimizing the performance and scalability of the LMS system through database management and code
                    optimization.
                  </li>
                </ul>
              </div>
            </div>

            <div className="job-entry">
              <div className="job-header">
                <div className="job-title">
                  <h3>Front-end Developer Intern and Network Tester, Kenya National Library Service (KNLS)</h3>
                  <div className="job-company">Nairobi</div>
                </div>
                <div className="job-dates">MAY 2022 — AUGUST 2022</div>
              </div>
              <div className="job-description">
                <ul>
                  <li>
                    Developing and maintaining front-end components of web applications using HTML, CSS, and JavaScript.
                  </li>
                  <li>
                    Collaborating with cross-functional teams to ensure seamless integration of front-end and back-end
                    functionalities.
                  </li>
                  <li>Conducting network testing to ensure optimal performance and reliability of web applications.</li>
                  <li>
                    Identifying and troubleshooting issues related to front-end development and network connectivity.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="section">
            <h2>Education</h2>

            <div className="education-entry">
              <h3>Bachelor of Science in Software Engineering, Multimedia University of Kenya</h3>
              <div className="education-details">APRIL 2020 — APRIL 2024 | Nairobi</div>
              <p>
                Completed Bachelor of Science degree in Software Engineering, with a focus on gaining comprehensive
                knowledge and skills in the field.
              </p>
            </div>

            <div className="education-entry">
              <h3>Certificate in Mobile and Web Software Development, Modcom Institute of Technology</h3>
              <div className="education-details">JANUARY 2020 — JULY 2020 | Nairobi</div>
              <p>
                Acquired specialized training in Mobile and Web Software Development, gaining hands-on experience in
                building responsive and user-friendly applications.
              </p>
            </div>

            <div className="education-entry">
              <h3>Secondary Education Certificate, Kapsabet Boys High School</h3>
              <div className="education-details">FEBRUARY 2016 — NOVEMBER 2019 | Kapsabet</div>
              <p>Completed secondary education with a focus on academic excellence and personal development.</p>
            </div>
          </div>

          {/* REFERENCES */}
          <div className="section">
            <h2>References</h2>
            <div className="references-grid">
              <div className="reference">
                <h4>Stephen Ajulu</h4>
                <p>ICT Officer KNLS</p>
                <p>
                  <a href="mailto:stephen.ajulu@knls.ac.ke">stephen.ajulu@knls.ac.ke</a>
                </p>
                <p>+254740128010</p>
              </div>
              <div className="reference">
                <h4>Jotham Kabasa</h4>
                <p>C.E.O at Abacus</p>
                <p>
                  <a href="mailto:jothamkinyua1@gmail.com">jothamkinyua1@gmail.com</a>
                </p>
                <p>+254-797-678252</p>
              </div>
              <div className="reference">
                <h4>Kelvin Adungosi</h4>
                <p>Statsspeak Limited</p>
                <p>
                  <a href="mailto:Akelvin@statsspeak.co.ke">Akelvin@statsspeak.co.ke</a>
                </p>
                <p>254704321150</p>
              </div>
              <div className="reference">
                <h4>Favour Ruhiu</h4>
                <p>Adanian Labs</p>
                <p>
                  <a href="mailto:favorryo@gmail.com">favorryo@gmail.com</a>
                </p>
                <p>+254-715-061189</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
