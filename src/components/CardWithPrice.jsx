import { courses } from "../data/courses";

function CardWithPrice({priceItem }) {
    return (
        <div className="space-y-8 md:col-span-1">
            <div className="rounded-lg border border-border-light bg-surface-light p-6 dark:border-border-dark dark:bg-surface-dark">
                <h3 className="mb-4 text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
                    Investimento
                </h3>
                <div className="mb-4 flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark">
                        R$ {priceItem}
                    </span>
                    <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                        / semestre
                    </span>
                </div>
                <p className="mb-6 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    Pagamento único para acesso completo ao curso e materiais.
                </p>
                <button className="flex w-full items-center justify-center rounded-lg border border-primary px-6 py-3 text-base font-bold text-primary shadow-sm transition-colors hover:bg-primary/10">
                    <span>Mais informações</span>
                </button>
            </div>
        </div>
    );
}

export default CardWithPrice;