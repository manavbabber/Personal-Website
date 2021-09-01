import React from "react";

const ProjectCard = (props) => {
  return (
    <div class='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 p-2 hover:shadow-xl hover:text-white'>
      <a href="#projects">
        <h3 class='text-2xl mb-6 text-black font-semibold hover:text-yellow-900'>{props.title}</h3>
        <p class="text-gray-700 mt-10">{props.description}</p>
        <div href="#">
          <div>
              <button class=' mt-10 text-black border p-2 rounded border-black hover:border-white  hover:text-white hover:bg-gray-700 font-medium'>View Project</button>
          </div>
        </div>
      </a>
    </div>
  );
}
export default ProjectCard;