function Card({ title, description }) {
  return (
    <div className="space-y-8 md:col-span-2">
      <div className="rounded-lg border border-border-light bg-surface-light p-6 dark:border-border-dark dark:bg-surface-dark">
        <h3 className="mb-4 text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
          {title}
        </h3>
        <p className="text-base text-text-secondary-light dark:text-text-secondary-dark">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
