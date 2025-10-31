import { courses } from "../data/courses";

 function CardWithClasses({ schedule }) {
  return (
    <div className="rounded-lg border border-border-light bg-surface-light p-6 dark:border-border-dark dark:bg-surface-dark">
      <h3 className="mb-4 text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
        Opções de Turmas
      </h3>
      <ul className="space-y-2">
        {schedule && schedule.map((item, idx) => (
          <li key={idx} className="text-base text-text-secondary-light dark:text-text-secondary-dark">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardWithClasses;

