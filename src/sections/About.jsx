import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
      const grid2Container = useRef();
  return (
    <section 
     id="about"
    className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hey, I'm Khushi Jain </p>
            <p className="subtext">
                              Motivated and detail-oriented software developer with a strong
                foundation in Software Engineering, Data Structures and
                Algorithms, Operating Systems, and Networking. Proficient in
                Java, C#, C, .NET Framework. I can learn new software and
                technologies quickly and also have the ability to work in teams
                by providing valuable support.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
     <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CERTIFICATIONS.
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="NSS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="CCNA-CISCO"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Digital Marketing"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Cybersecurity by Cisco"
              containerRef={grid2Container}
            />
              <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="ML Onramp by MathWorks"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="MATLAB"
              containerRef={grid2Container}
            />
            {/* <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            /> */}
          </div>
        </div>
        {/* Grid 3 */}
          <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext"></p>
            <p className="subtext">
              I'm based in Jaipur, and open to work worldwide.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
           <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
     <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext">
              I have my specilization in Java, C, C++, and C#, using frameworks like ASP.NET, Spring Boot,NetBeans and tools such as Visual Studio and Git to develop robust and scalable software solutions.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
          </div>
      </div>
    </section>
  );
};

export default About;
