import { courses } from "../data/courses";

function CardWithList({ title, listItems }) {
  return (
    <div className="space-y-8 md:col-span-2">
      <div className="rounded-lg border border-border-light bg-surface-light p-6 dark:border-border-dark dark:bg-surface-dark">
        <h3 className="mb-4 text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
          {title}
        </h3>
        <ul className="space-y-3 text-base text-text-secondary-light dark:text-text-secondary-dark">
          {listItems.map((item) => (
            <li className="flex items-start gap-3" key={item}>
              <svg
                className="mt-1 size-5 shrink-0 text-primary"
                fill="currentColor"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardWithList;
