import { Github, Linkedin, Mail, FileText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header>
      <h1 className="text-3xl font-bold mb-2">Eric Nie</h1>
      <div className="flex items-center gap-4 mb-6">
        <p className="text-secondary">ECE @ Waterloo</p>
        <ThemeToggle />
      </div>
      
      <nav className="flex flex-col gap-3 mt-6">
        <div className="flex items-center">
          <a
            href="mailto:eric.nie@uwaterloo.ca"
            className="text-secondary hover:text-primary transition-colors duration-200 flex items-center gap-2"
          >
            <Mail size={18} strokeWidth={1.5} />
            <span>eric.nie@uwaterloo.ca</span>
          </a>
        </div>
        <div className="flex items-center">
          <a
            href="https://github.com/ericoletsgo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors duration-200 flex items-center gap-2"
          >
            <Github size={18} strokeWidth={1.5} />
            <span>ericoletsgo</span>
          </a>
        </div>
        <div className="flex items-center">
          <a
            href="https://linkedin.com/in/eric-nie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors duration-200 flex items-center gap-2"
          >
            <Linkedin size={18} strokeWidth={1.5} />
            <span>eric-nie</span>
          </a>
        </div>
        <div className="flex items-center">
          <a
            href="https://drive.google.com/file/d/1DXTLRpDqLJsTSWBpYgVMTsp_LL38e3Z5/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors duration-200 flex items-center gap-2"
          >
            <FileText size={18} strokeWidth={1.5} />
            <span>Resume</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

