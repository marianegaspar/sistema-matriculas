import CardImage from "../components/CardImage";

function CoursesAvailable() {
    return(
        <main className="course-info mt-24">    
        <div class="flex flex-col gap-3 text-center">
            <h1 class="text-4xl font-black leading-tight tracking-[-0.033em] text-[#111418] dark:text-white">Descubra seu Próximo Curso</h1>
            <p class="text-base font-normal leading-normal text-[#617589] dark:text-gray-400">Com base em seu histórico acadêmico e interesses, selecionamos estas recomendações especialmente para você.</p>
        </div>
//filtros//
            <div class="flex items-center justify-center gap-2 sm:gap-3 p-3 overflow-x-auto">
    <button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary pl-4 pr-4 text-white hover:bg-primary/90 transition-colors">
    <p class="text-sm font-medium leading-normal">Todos</p>
    </button>
    <button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 pl-4 pr-4 text-[#111418] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
    <p class="text-sm font-medium leading-normal">Exatas</p>
    </button>
    <button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 pl-4 pr-4 text-[#111418] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
    <p class="text-sm font-medium leading-normal">Humanas</p>
    </button>
    <button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 pl-4 pr-4 text-[#111418] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
    <p class="text-sm font-medium leading-normal">Saúde</p>
    </button>
    <button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 pl-4 pr-4 text-[#111418] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
    <p class="text-sm font-medium leading-normal">Tecnologia</p>
    </button>
    </div>
    </main>
    );
}

export default CoursesAvailable;