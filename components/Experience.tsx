export default function Experience() {
  return (
    <section className="mb-16 mt-12">
      <h2 className="text-xl uppercase tracking-wider text-secondary mb-6">
        Experience
      </h2>

      <div className="space-y-6">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
            <div className="flex items-center gap-3">
              <span className="text-primary font-medium">Software Engineering Intern @ Bank of Canada</span>
            </div>
            <span className="text-muted text-sm">Sep 2025 – Dec 2025</span>
          </div>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
            <span className="text-primary font-medium">Software Engineering Intern @ Monologix Inc.</span>
            <span className="text-muted text-sm">Jan 2025 – Apr 2025</span>
          </div>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
            <span className="text-primary font-medium">Machine Learning Engineering Fellow @ AI Camp</span>
            <span className="text-muted text-sm">Jul 2023 – Aug 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
}

