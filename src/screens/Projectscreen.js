import React from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';

const Projectscreen = () => {
    return(
        <div id='projects'>
            <div>
                <h1 class='container mb-3 text-center text-5xl font-bold text-white mt-12'>Projects</h1>
                <h1 class='container text-center text-xl font-bold text-white'>Here are my Recent works...</h1>
                    <div class='mt-12 text-center grid grid-cols-3 gap-14 mr-12'>
                        <div>
                            <ProjectCard
                                title="MS Hope"
                                description="MB Shop is an Decoration Based Ecommerce Platform built with MERN and it contains some great features like :- Different screen for admins, Authorization using Json Web Token, File Uploader Option, Search Bar etc"
                            />
                        </div>
                        <div>
                            <ProjectCard
                                title="PortFolio"
                                description="Personal Website built using ReactJS and Tailwind CSS.It is divided into 4 sections i.e. Project Section, Achievement Section,Skills Section,About Section"
                            />
                        </div>
                        <div>
                            <ProjectCard
                                title="E-Shortener"
                                description="E-Shortener is simple and easy to use.It is a react based url shortener hosted on Firebase with which we can shorten a large url to a short using tinyurl API. "
                            />
                        </div>
                        <div>
                            <ProjectCard
                                title="Burger Builder"
                                description="Burger Builder is a home delivery burger website built using MERN and hosted on Firebase.It enables food customization with beautiful graphics."
                            />
                        </div>
                        <div>
                            <ProjectCard
                                title="Bloggery"
                                description="It is blogging website built using HTML,CSS,NodeJS for backend and Hosted using MongoDB. It has some features like create, delete, modify articles."
                            />
                        </div>
                        <div>
                            <ProjectCard
                                title="Chit Chat"
                                description="Workspace to share resources and hangout with friends. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                            />
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Projectscreen;
