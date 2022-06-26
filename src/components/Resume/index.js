import React from "react";

function Resume() {
  return (
    <main class="container p-4 p-sm-5">
      <section class="resume-section" id="about">
        <div class="resume-section-content">
          <h1 class="mb-2">
            Manny
            <span class="color-red">Garcia</span>
          </h1>
          <p class="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
        </div>
      </section>
      <hr class="m-0" />
      <section class="resume-section" id="experience">
        <div class="resume-section-content">
          <h2 class="mb-5">Experience</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">General Merchandise Associate</h3>
              <div class="subheading mb-3">Target</div>
              <p>
                Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple
                touchpoints for offshoring.
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="color-red">September 2020 - Present</span>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">Assistant Manager</h3>
              <div class="subheading mb-3">Church's Chicken</div>
              <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            </div>
            <div class="flex-shrink-0">
              <span class="color-red">June 2016 - February 2021</span>
            </div>
          </div>
        </div>
      </section>
      <hr class="m-0" />
      <section class="resume-section" id="education">
        <div class="resume-section-content">
          <h2 class="mb-5">Education</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">Michigan State University Coding Bootcamp</h3>
              {/* <p>GPA: 3.2</p> */}
            </div>
            <div class="flex-shrink-0">
              <span class="color-red">January 2022 - July 2022</span>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between">
            <div class="flex-grow-1">
              <h3 class="mb-0">Harlingen High School</h3>
              <p>GPA: 3.5</p>
            </div>
            <div class="flex-shrink-0">
              <span class="color-red">August 2002 - May 2006</span>
            </div>
          </div>
        </div>
      </section>
      <hr class="m-0" />
      <section class="resume-section" id="skills">
        <div class="resume-section-content">
          <h2 class="mb-5">Programming Languages & Tools</h2>
          <ul class="list-inline dev-icons display-6">
            <li class="list-inline-item">
              <i class="fab fa-html5"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-css3-alt"></i>
            </li>

            <li class="list-inline-item">
              <i class="fab fa-react"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-node"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-npm"></i>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Resume;
