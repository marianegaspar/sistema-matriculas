import { courses } from "../data/courses";

function CardWithBullet({ title, bulletPoints }) {
    return(
        <div className="space-y-8 md:col-span-2">  
            <div className="rounded-lg border border-border-light bg-surface-light p-6 dark:border-border-dark dark:bg-surface-dark">
                <h3 className="mb-4 text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
                    {title}
                </h3>
                <ul className="space-y-3 font-medium text-text-primary-light dark:text-text-primary-dark">
                    {bulletPoints.map((point) => (                        
                        <li className="flex items-start gap-3" key={point.title}>                            
                                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <svg
                                        className="size-6"
                                        fill="currentColor"
                                        viewBox="0 0 256 256"
                                        xmlns="http://www.w3.org/2000/svg"
                                        dangerouslySetInnerHTML={{ __html: point.icon }}
                                    />
                                </div>
                            <div>
                                <div className="font-semibold">{point.title}</div>
                                <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                                    {point.subtitle}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CardWithBullet;