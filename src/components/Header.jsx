import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-background-light dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-10 border-b border-background-dark/10 dark:border-background-light/10">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo e nome */}
        <div className="flex items-center gap-4">
          <div className="text-primary size-8">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            EduConnect
          </h2>
        </div>

        {/* Navegação */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            <li>
              <Link
                to="/"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
              >
                Cursos
              </Link>
            </li>
            <li>
              <Link
                to="/grades"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
              >
                Notas
              </Link>
            </li>
            <li>
              <Link
                to="/schedule"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
              >
                Horários
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
              >
                Recursos
              </Link>
            </li>
          </ul>
        </nav>

        {/* Ícone e perfil */}
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center rounded-full size-10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
            <span className="material-symbols-outlined text-blue-500">
              notifications_active
            </span>
          </button>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBaUTXj0HKQ9A4R20Ae3SaksAI6jcDjIhyJx-HfuZvTqCki_MDYAFMNswBPbOLji4s2Ht29O2jwzGhQOMR-nTZAYzYPiLrVcJOYMxDUElp-a5jhQXb1-lFAzddcTuMBVeIJHCIBPQbB-OZ7kh5a8klVebQZT0x0PycAJQXbrCYnZroDCasweil8GeYPgELfYtKLSNIvDookmmeAXlfpDE1C0DQYxQ0HJM4V_ikswmqrzf2Ku7Na-5lx7fYLgYCvGTZoSktOrXb4aj4')",
            }}
          ></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
