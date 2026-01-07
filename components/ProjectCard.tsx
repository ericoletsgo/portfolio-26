import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  status?: "in-progress";
  stack: string[];
  description: string;
  sourceUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export default function ProjectCard({
  title,
  status,
  stack,
  description,
  sourceUrl,
  demoUrl,
  imageUrl,
  imageAlt,
}: ProjectCardProps) {
  return (
    <article className="border border-muted/30 rounded-lg p-4 hover:border-muted/50 transition-colors duration-200">
      {status === "in-progress" && (
        <span className="inline-block text-xs px-2 py-0.5 bg-muted/10 rounded mb-3">
          In progress
        </span>
      )}

      <h3 className="text-lg font-medium text-primary mb-2">{title}</h3>

      {imageUrl && (
        <div className="mb-3 rounded-lg overflow-hidden w-3/4 mx-auto aspect-[4/3]">
          <Image
            src={imageUrl}
            alt={imageAlt || title}
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-3">
        {stack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 bg-muted/10 text-secondary rounded border border-muted/30"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-secondary text-sm mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex gap-3">
        {sourceUrl && (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-secondary hover:text-primary transition-colors duration-200"
          >
            <Github size={14} strokeWidth={1.5} />
            <span>Source</span>
          </a>
        )}
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-secondary hover:text-primary transition-colors duration-200"
          >
            <ExternalLink size={14} strokeWidth={1.5} />
            <span>Demo</span>
          </a>
        )}
      </div>
    </article>
  );
}

