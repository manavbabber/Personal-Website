import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { DiLinux,DiJavascript1,DiReact,DiNodejs,DiMongodb,DiPython,DiHtml5,DiBootstrap} from "react-icons/di";
import { SiJupyter,SiVisualstudio,SiPostman,SiFirebase,SiRedux,SiMysql,SiTailwindcss,SiCss3 } from "react-icons/si";
import '../index.css';
import GitHubCalendar from 'react-github-calendar';
const Skillscreen = () => {
  return (
  <div id='skills' class=''>
    <div>
      <h1 class='flex text-white hover:shadow-sm mb-10 justify-center text-4xl font-bold mt-14'><span style={{marginTop:'7%'}}>Skillset</span></h1>
      <div class='container ml-20 grid sm:grid-cols-3 md:grid-cols-6 gap-2' >
        <div>
          <DiJavascript1 class=' bg-skills tech-icons'/>
        </div>
        <div>
          <DiReact class='bg-skills tech-icons'/>
        </div>
        <div>
          <DiNodejs class='bg-skills tech-icons'/>
        </div>
        <div>
          <DiMongodb class='bg-skills tech-icons'/>
        </div>
        <div>
          <CgCPlusPlus class='bg-skills tech-icons'/>
        </div>
        <div>
          <DiPython class='bg-skills tech-icons'/>
        </div>
        <div>
          <DiHtml5 class='bg-skills tech-icons'/>
        </div>
        <div>
          <DiBootstrap class='bg-skills tech-icons'/>
        </div>
        <div>
          <SiRedux class='bg-skills tech-icons'/>
        </div>
        <div>
          <SiMysql class='bg-skills tech-icons'/>
        </div>
        <div>
          <SiTailwindcss class='bg-skills tech-icons'/>
        </div>
        <div>
          <SiCss3 class='bg-skills tech-icons'/>
        </div>
      </div>
    </div>
    <div>
    <h1 class='flex hover:shadow-sm mt-14 mb-10 text-white justify-center text-4xl font-bold'>Tools Using</h1>
    <div class='container ml-20 items-center grid sm:grid-cols-3 md:grid-cols-5 gap-2' >
      <div>
        <DiLinux class='bg-skills tech-icons'/>
      </div>
      <div>
        <SiVisualstudio class='bg-skills tech-icons'/>
      </div>
      <div>
        <SiPostman class='bg-skills tech-icons'/>
      </div>
      <div>
        <SiFirebase class='bg-skills tech-icons'/>
      </div>
      <div>
        <SiJupyter class='bg-skills tech-icons'/>
      </div>
    </div>
  </div>
  <div class='border-b-2 mb-12 mt-12'></div>
    <div class='ml-4 text-white container flex justify-center'>
      <GitHubCalendar username="manavbabber"/>
    </div>
  </div>
  );
}

export default Skillscreen;
