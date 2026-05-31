import gitIcon from '../assets/socialMediaIcon/github-logo.webp';
import emailIcon from '../assets/socialMediaIcon/gmail-logo.webp';
import instagramIcon from '../assets/socialMediaIcon/instagram-logo.avif';
import linkedinIcon from '../assets/socialMediaIcon/linkedin-logo.png'
const Footer = () => {
  return (
    <footer className="min-w-full bg-[#8f9088] p-5 font-serif flex flex-col md:flex-row gap-5 justify-between">
      <div>
        <span className="relative -top-1 ">©</span>
        <span className="text-xl">2026 </span>
        <span className="font-semibold">Dinesh Gupta | Developer</span>
      </div>
      <div className="flex flex-row">
        <img src={emailIcon} alt="Email" className="h-5 mt-1" />
        <a
          href="mailto:987dineshgupta@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1"
        >
          987dineshgupta@gmail.com
        </a>
      </div>
      <div className="flex flex-row">
        <img src={gitIcon} alt="GitHub" className="h-6 mt-1" />
        <a
          href="https://github.com/987Learner108"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1"
        >
          GitHub
        </a>
      </div>
      <div className="flex flex-row">
        <img src={linkedinIcon} alt="LinkedIn" className="h-6" />
        <a
          href="https://www.linkedin.com/in/dinesh-gupta-5372a9268?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <div className="flex flex-row">
        <img src={instagramIcon} alt="Instagram" className="h-5 mt-1" />
        <a
          href="https://www.instagram.com/987dineshgupta?igsh=NDM4b2Rod3JzcG96"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};
export default Footer;
