"use client";
import Education from "./Education";
import SkillsLottie from "./SkillsLottie";
import Image from "next/image";

const Skills = () => {
  const skills = [
    { title: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { title: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { title: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { title: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { title: "Qt", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg" },
    { title: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { title: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { title: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { title: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { title: "REST", icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/postman.svg" },
    { title: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { title: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { title: "AI", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/AI.svg" },
    { title: "ML", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MachineLearning.svg" },
    { title: "Deep Learning", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/DeepLearning.svg" },
    { title: "OpenAI", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { title: "AWS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { title: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { title: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
    { title: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { title: "NoSQL", icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NoSQL.svg" },
    { title: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { title: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { title: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { title: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { title: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { title: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
    { title: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { title: "Tensorflow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { title: "Pytorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { title: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo.svg" },
  ];

  return (
    <div className="w-full">
      <div className="w-full md:flex py-10 text-white">
        <div className="md:w-1/2 order-2">
          <div className="space-y-5">
            <h1 className="font-bold">What I do?</h1>
            <p>🚀 Enthusiastic Full Stack Software Engineer Exploring the Entire Tech Ecosystem</p>
            <div className="grid grid-cols-4 gap-5">
              {skills.map((skill, idx) => (
                <div
                  className="cursor-pointer text-center bg-[#272a32] rounded-2xl p-3 transition duration-200 hover:shadow-lg hover:shadow-gray-700"
                  key={idx}
                >
                  <Image
                    src={skill.icon}
                    alt={skill.title}
                    width={40}
                    height={40}
                    className="object-contain m-2 mx-auto"
                  />
                  <h6 className="text-[10px]">{skill.title}</h6>
                </div>
              ))}
            </div>
            <p>
              ⚡ Crafting highly interactive and responsive full automation system computer vision client projects for
              surveillance
              <br />⚡ Building Progressive Face Recognition, Vehicle detection Recognition and Classification
              <br />
              <span id="education">
                ⚡ E-commerce websites, International websites and apps design using AWS, Docker, load balancing robust
                Backend support
              </span>
            </p>
          </div>
        </div>
        <div className="md:w-1/2 order-1">
          <SkillsLottie />
        </div>
      </div>
    </div>
  );
};

export default Skills;

