import aboutMeOne from "../assets/aboutMeImg/aboutme_1.png";
import aboutMeTwo from "../assets/aboutMeImg/aboutme_2.png";
import aboutMeThree from "../assets/aboutMeImg/aboutme_3.png";
const AboutPage = () => {
  return (
    <div className="p-5 max-w-full overflow-auto">
      <h1 className="text-3xl font-bold mb-10 text-center">About Me</h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center lg:gap-50 items-center mb-20">
        <div className=" bg-cyan-50 rounded-md p-4 md:w-1/2 shadow-md">
          <h2 className="text-xl font-semibold font-serif mb-4">
            Aspiring Software Engineer | ML Research Enthusiast
          </h2>
          <p className="text-justify pl-3">
            Hi, I’m an upcoming Computer Science & Engineering graduate with a
            strong foundation in modern web development and data intelligence.
            As a developer entering the tech industry, I pride myself on being
            an autonomous learner who bridges the gap between clean code and
            smart algorithms. <br /> <br />
            While I am a fresher to corporate engineering, I am not a fresher to
            building software. I have spent my university years treating my
            personal projects as production applications—focusing on strict
            type-safety, clean backend logic, and scalable architectures. My
            goal is to bring this blend of technical curiosity and engineering
            discipline to a fast-paced development team.
          </p>
        </div>
        <div className="p-1 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500">
          <img
            src={aboutMeOne}
            alt="AImage"
            className="h-74 w-74 object-cover rounded-full"
          />
        </div>
      </div>

      <hr className="text-xl pb-20" />
      <div className="flex flex-col md:flex-row justify-center lg:gap-50 items-center gap-8 mb-20">
        <div className="p-1 rounded-4xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500">
          <img
            src={aboutMeTwo}
            alt="AImage"
            className="h-130 w-74  object-cover rounded-4xl"
          />
        </div>
        <ul className=" bg-cyan-50 rounded-md p-4 md:w-1/2 text-justify gap-4 shadow-md">
          <h2 className="text-3xl font-serif pb-4 text-center">
            My Journey & Foundations
          </h2>
          <li className="pb-5">
            <b className="pb-5">*Self-Driven Full-Stack Practice </b>
            <p className="px-5">
              I didn't want my coding skills to be limited to classroom theory.
              I chose to independently master a modern, industry-standard
              Enterprise TypeScript Stack (Next.js, NestJS, and Tailwind CSS).
              Through hands-on practice, I learned how to handle real-world
              challenges like secure JWT user authentication, building RESTful
              APIs, and implementing third-party cloud integrations like
              Cloudinary.
            </p>
          </li>
          <li className="pb-5">
            <b className="pb-5">*Academic Research & Publication </b>
            <p className="px-5">
              My curiosity about how data works led me to explore Natural
              Language Processing (NLP) and Large Language Models. Under faculty
              mentorship, I spent months diving into transformer models like
              BERT and ALBERT. This rigorous academic effort resulted in my
              first major milestone: a peer-reviewed research paper titled{" "}
              <a
                href="https://scholar.google.com/citations?user=KDrh8bcAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                <i>
                  "Enhanced Personality Trait Prediction Using Hybrid Feature
                  Selection Method"
                </i>
              </a>
              , published by Springer.
            </p>
          </li>
          <li className="pb-5">
            <b className="pb-5">*Building Intelligent Solutions </b>
            <p className="px-5">
              I love taking what I learn in research and building practical
              tools with it. For example, I engineered a hybrid classification
              engine from scratch—seamlessly chaining together Regex parsing,
              machine learning models (Scikit-Learn), and LLM APIs to
              intelligently process and categorize data in real time.
            </p>
          </li>
        </ul>
      </div>
      <hr className="mb-20" />

      <div className="flex flex-col md:flex-row gap-8 justify-center lg:gap-50 items-center mb-20">
        <ul className=" bg-cyan-50 rounded-md p-4 md:w-1/2 text-justify shadow-md">
          <h2 className="text-3xl font-serif pb-4 text-center">
            Technical Skillset
          </h2>
          <li className="pb-5">
            <b className="pb-5">*Full-Stack Development </b>
            <p className="px-5">
              Building responsive frontends and structured backends using React,
              Next.js, and NestJS. Designing clean database schemas (MongoDB,
              PostgreSQL) and writing modular, maintainable TypeScript code.
            </p>
          </li>
          <li className="pb-5">
            <b className="pb-5">*Machine Learning & AI Foundations </b>
            <p className="px-5">
              Preprocessing datasets, evaluating model performance, and working
              with deep learning architectures. Comfortable writing data
              pipelines in Python using Scikit-Learn and Hugging Face
              Transformers.
            </p>
          </li>
          <li className="pb-5">
            <b className="pb-5">*DevOps & Tools </b>
            <p className="px-5">
              Containerizing microservices using Docker to ensure consistent
              environments across development and deployment. Actively
              practicing deployment workflows on AWS and version control using
              Git/GitHub.
            </p>
          </li>
        </ul>
        <div className="p-1 rounded-3xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500">
          <img
            src={aboutMeThree}
            alt="AImage"
            className="h-100 w-74 object-cover rounded-3xl"
          />
        </div>
      </div>
      <hr className="mb-20" />
      <div className="flex flex-col gap-8 justify-center items-center w-full mb-10">
        <ul className=" bg-cyan-50 rounded-md p-4 text-justify shadow-md w-3/4 mb-5">
          <h2 className="text-3xl font-serif pb-4 text-center">
            Education & Academic Milestones
          </h2>
          <li className="pb-5">
            <b className="pb-5">*B.Tech in Computer Science & Engineering </b>
            <p className="px-5">
              Vignan's University | Graduating 2026 <br />
              Core coursework: Data Structures & Algorithms, Database Management
              Systems, Systems Design, and Machine Learning.
            </p>
          </li>
          <li className="pb-5">
            <b className="pb-5">*Published Author (Springer, 2026) </b>
            <p className="px-5">
              Co-authored and successfully published an advanced NLP research
              paper on hybrid feature selection methods.
            </p>
          </li>
          <li className="pb-5">
            <b className="pb-5">*International Communication </b>
            <p className="px-5">
              Achieved a band score of 143 in the PET academic exam,
              demonstrating strong professional communication and readiness for
              global team environments.
            </p>
          </li>
        </ul>
        <div className="bg-cyan-50 rounded-md p-4 text-justify shadow-md w-3/4">
          <h2 className="font-serif mb-3 text-2xl">Ready to Contribute</h2>
          <p>
            I am actively looking for an entry-level role as a Software
            Engineer, Full-Stack Developer, or Associate AI Engineer. I am eager
            to contribute to a team, learn from senior engineers, and write code
            that makes an impact.
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border rounded-lg"
          >
            View CV
          </a>

          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            download
            className="px-4 py-2 bg-black text-white rounded-lg"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
