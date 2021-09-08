import React from "react";

const ProjectCard = (props) => {
  return (
    <div class='hover:bg-skills font-medium hover:text-gray-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 p-2 hover:shadow-xl text-white'>
      <a href="#projects">
        <h3 class='text-2xl mb-6 font-semibold hover:text-yellow-900'>{props.title}</h3>
        <p class=" mt-10">{props.description}</p>
        <div href="#">
          <div>
              <button class=' mt-10  border p-2 rounded border-gray-500 hover:border-white  hover:text-white hover:bg-gray-800 font-medium'>View Project</button>
          </div>
        </div>
      </a>
    </div>
  );
}
export default ProjectCard;
