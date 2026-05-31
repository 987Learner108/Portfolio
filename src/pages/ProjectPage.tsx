const ProjectPage = () => {
  return (
    <div className="min-h-[calc[100vh-135px] p-5 flex flex-col justify-center items-center gap-y-8">
      <h2 className="text-2xl font-bold font-serif ">Projects</h2>
      <p className="bg-cyan-50 p-3 px-8 text-justify xl:mx-50 rounded-md shadow-md my-8 font-semibold text-lg font-serif">
        <b>--</b>The following projects demonstrate my experience in full-stack
        development and machine learning. Each project focuses on solving
        practical problems while strengthening my understanding of scalable
        application design, backend systems, and data-driven development
      </p>
      <div className="lg:w-2/3 flex flex-col bg-cyan-50 rounded-md shadow-md p-5">
        <h2 className="font-serif text-xl font-semibold mb-3">
          📋{" "}
          <a
            href="http://digital-complaint-feedback-portal-7.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-cyan-800 hover:text-cyan-600"
          >
            Digital Complaint & Feedback Management System
          </a>
        </h2>
        <p className="pl-10 px-5 mb-3 font-semibold text-md">
          A structured platform designed for users to submit complaints and
          feedback, with administrative control for resolution tracking.
        </p>
        <ul className="pl-18 gap-3 md:w-6/7">
          <li>
            <b>*Tech Stack: </b>React, Node.js, Express, MongoDB
          </li>
          <li>
            <b>*Key Features: </b>
            Role-based access (User/Admin), complaint submission, status
            tracking, admin dashboard
          </li>
          <li>
            <b>*Description: </b>
            Built a full-stack system that streamlines complaint registration
            and resolution workflow. Admins can manage and update complaint
            statuses, improving transparency and organization.
          </li>
          <li>
            <b>*Learning Outcome: </b>
            Learning Outcome: Strengthened skills in REST API design, CRUD
            operations, and dashboard-based application development.
          </li>
        </ul>
      </div>

      <div className="lg:w-2/3 flex flex-col bg-cyan-50 rounded-md shadow-md p-5">
        <h2 className="font-serif text-xl font-semibold mb-3">
          🚗{" "}
          <a href="http://car-price-prediction-1-1er4.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          className="underline text-cyan-800 hover:text-cyan-600">
            Car Price Prediction System
          </a>
        </h2>
        <p className="pl-10 px-5 mb-3 font-semibold text-md">
          A machine learning-based application that predicts vehicle prices
          based on input features.
        </p>
        <ul className="pl-18 gap-3 md:w-6/7">
          <li>
            <b>*Tech Stack: </b>Python, Pandas, NumPy, Scikit-learn
          </li>
          <li>
            <b>*Key Features: </b>
            Data preprocessing, feature selection, regression modeling,
            prediction interface
          </li>
          <li>
            <b>*Description: </b>
            Designed and trained a regression model to estimate car prices using
            historical data. Performed data cleaning and feature engineering to
            improve model accuracy.
          </li>
          <li>
            <b>*Learning Outcome: </b>
            Developed understanding of the complete ML pipeline including data
            preparation, model training, and evaluation.
          </li>
        </ul>
      </div>

      <div className="lg:w-2/3 flex flex-col bg-cyan-50 rounded-md shadow-md p-5">
        <h2 className="font-serif text-xl font-semibold mb-3">
          💬 Real-Time Chat Application
        </h2>
        <p className="pl-10 px-5 mb-3 font-semibold text-md">
          A full-stack real-time messaging platform that enables seamless
          communication between users.
        </p>
        <ul className="pl-18 gap-3 md:w-6/7">
          <li>
            <b>*Tech Stack: </b>MERN Stack, Socket.io
          </li>
          <li>
            <b>*Key Features: </b>
            Real-time messaging, user authentication, online/offline presence
            detection, responsive UI
          </li>
          <li>
            <b>*Description: </b>
            Developed a scalable chat system using WebSockets to enable instant
            communication between users. Implemented authentication and user
            state management to ensure secure and reliable messaging.
          </li>
          <li>
            <b>*Learning Outcome: </b>
            Gained practical experience in real-time data flow, event-driven
            architecture, and client-server synchronization.
          </li>
        </ul>
      </div>

      <div className="lg:w-2/3 flex flex-col bg-cyan-50 rounded-md shadow-md p-5">
        <h2 className="font-serif text-xl font-semibold mb-3">
          📝 Automated Exam Paper Generator
        </h2>
        <p className="pl-10 px-5 mb-3 font-semibold text-md">
          A system that automates the generation of exam papers from a
          structured question bank.
        </p>
        <ul className="pl-18 gap-3 md:w-6/7">
          <li>
            <b>*Tech Stack: </b>React, Node.js, Express, MongoDB
          </li>
          <li>
            <b>*Key Features: </b>
            Question bank management, dynamic paper generation, subject and
            difficulty-level filtering
          </li>
          <li>
            <b>*Description: </b>
            Created a backend-driven system that generates randomized exam
            papers based on predefined rules and constraints, reducing manual
            effort in exam preparation.
          </li>
          <li>
            <b>*Learning Outcome: </b>
            Improved problem-solving in backend logic design and dynamic data
            handling.
          </li>
        </ul>
      </div>

      <div className="lg:w-2/3 flex flex-col bg-cyan-50 rounded-md shadow-md p-5">
        <h2 className="font-serif text-xl font-semibold mb-3">
          🚀 Overall Summary
        </h2>
        <p className="pl-10 px-5 mb-3 font-semibold text-md">
          Through these projects, I have developed hands-on experience in:
        </p>
        <ul className="pl-18 gap-3 md:w-6/7">
          <li>
            <b>*</b>Full-stack web development using MERN stack
          </li>
          <li>
            <b>*</b>
            Real-time application development using Socket.io
          </li>
          <li>
            <b>*</b>
            RESTful API design and backend architecture
          </li>
          <li>
            <b>*</b>
            Machine learning fundamentals and predictive modeling
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ProjectPage;
