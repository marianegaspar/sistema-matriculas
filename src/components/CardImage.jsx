import { courses } from "../data/courses";

function CardImage(title, description) {
  return (
    <div className="space-y-8 md:col-span-2">
        <div class="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-sm transition-all hover:shadow-lg dark:hover:border-gray-700 overflow-hidden">
<img class="h-48 w-full object-cover" data-alt="Team working on a project in a modern office." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwZ5HNkvWx7yH2eAtvsBmjX14P4EoqkKyqisG2z1R2vZL1RD8Hlzy8ESohAgFh6apnHZ-JfakyU--c_d1jN5SfnwaaOdP1TmqVhR_LpprODilT-_Yi5rNKUQdyHFa7oWsHmdQ-UGYfgRgmtr8DA1V11v94JRaipKI-20bTNjJMjFQk_H0bXl0-KpONjovlXZWLeG0YyTtqomIjM9JIOwpSpnAx5SMWER5UAAFQTaz_zzj12gxlef4dBT0udp6Mv5qLpntMPVX_3BM"/>
      <div className="rounded-lg border border-border-light bg-surface-light p-6 dark:border-border-dark dark:bg-surface-dark">
        <h3 className="mb-4 text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
          {title}
        </h3>
        <p className="text-base text-text-secondary-light dark:text-text-secondary-dark">
          {description}
        </p>
      </div>
    </div>
     </div>
  );
}

export default CardImage;