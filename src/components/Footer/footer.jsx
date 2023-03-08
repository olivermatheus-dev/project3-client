import { Link } from "react-router-dom";
import logo from "../../assets/images/logotipo/logo.svg";

export function Footer() {
  return (
    <>
      <footer aria-label="Site Footer" className="bg-white dark:bg-zinc-800">
        <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center text-emerald-600 dark:text-emerald-300 sm:justify-start">
                <div className="flex md:items-center gap-4">
                  <Link to="/" className="hidden sm:block text-emerald-600">
                    <img src={logo} />
                  </Link>

                  <Link to="/" className="flex">
                    <h1 className="text-2xl font-medium text-emerald-500 transition hover:text-gray-500/75 dark:text-emerald-400 dark:hover:text-emerald-300">
                      Ceos
                    </h1>
                    <h1 className="text-2xl font-medium text-zinc-700 transition hover:text-gray-500/75 dark:text-gray-200 dark:hover:text-emerald-300">
                      Tab
                    </h1>
                  </Link>
                </div>
              </div>

              <p className="font-medium  mt-6 max-w-md text-center italic leading-relaxed text-gray-500 dark:text-gray-400 sm:max-w-xs sm:text-left">
                "Lembre-se que as pessoas podem tirar tudo de você, menos o seu
                conhecimento."
              </p>
              <p className="font-medium mt-2 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400 sm:max-w-xs sm:text-left">
                Albert Einstein
              </p>

              <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                <li className="flex gap-1">
                  <div
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-emerald-500 transition hover:text-emerald-500/75 dark:text-emerald-500 dark:hover:text-emerald-500/75"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>

                  <p className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
                    Front-end
                  </p>
                  <p className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
                    Back-end
                  </p>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  Danilo Shinzato
                </p>

                <nav aria-label="Footer About Nav" className="mt-8">
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="sr-only">GitHub</span>
                      <svg
                        className="h-6 w-6 text-emerald-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                        href="https://github.com/dtshinzato"
                      >
                        Github
                      </a>
                    </li>

                    <li className="flex items-center gap-2">
                      <span className="sr-only">Linkedin</span>
                      <svg
                        className="h-5 w-5 text-emerald-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                      </svg>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                        href="https://www.linkedin.com/in/danilo-shinzato-webdeveloper-react-javascript-html-css/"
                      >
                        Likedind
                      </a>
                    </li>

                    <li>
                      <p className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
                        daniloshinzato@gmail.com
                      </p>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  Oliver Matheus
                </p>

                <nav aria-label="Footer Services Nav" className="mt-8">
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="sr-only">GitHub</span>
                      <svg
                        className="h-6 w-6 text-emerald-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                        href="https://github.com/olivermatheus-dev"
                      >
                        Github
                      </a>
                    </li>

                    <li className="flex items-center gap-2">
                      <span className="sr-only">Linkedin</span>
                      <svg
                        className="h-5 w-5 text-emerald-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                      </svg>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                        href="https://www.linkedin.com/in/oliver-matheus/"
                      >
                        Likedind
                      </a>
                    </li>
                    <li>
                      <p className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
                        riseumpro@gmail.com
                      </p>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  Pedro Henrique
                </p>

                <nav aria-label="Footer Helpful Nav" className="mt-8">
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="sr-only">GitHub</span>
                      <svg
                        className="h-6 w-6 text-emerald-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                        href="https://github.com/Per00"
                      >
                        Github
                      </a>
                    </li>

                    <li className="flex items-center gap-2">
                      <span className="sr-only">Linkedin</span>
                      <svg
                        className="h-5 w-5 text-emerald-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                      </svg>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                        href="https://www.linkedin.com/in/pedro-henrique-guimaraes-barbosa-772b65168/"
                      >
                        Likedind
                      </a>
                    </li>
                    <li>
                      <p className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
                        pedrohgbarbosa@hotmail.com
                      </p>
                      {/* <a
                        className="group flex justify-center gap-1.5 sm:justify-start"
                        href="/"
                      >
                        <span className="text-gray-700 transition group-hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
                          Live Chat
                        </span>

                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                        </span>
                      </a> */}
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  Project Info
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="https://github.com/olivermatheus-dev/project3-client"
                    >
                      <svg
                        className="h-6 w-6 text-zinc-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="text-gray-700 dark:text-gray-300">
                        Front-end
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="https://github.com/olivermatheus-dev/project3-server"
                    >
                      <svg
                        className="h-6 w-6 text-zinc-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="text-gray-700 dark:text-gray-300">
                        Back-end
                      </span>
                    </a>
                  </li>

                  <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 text-gray-900 dark:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <address className="-mt-0.5 not-italic text-gray-700 dark:text-gray-300">
                      Brasil, Ironhack SP
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-6 dark:border-gray-800">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="block sm:inline">All rights reserved.</span>

                <a
                  className="inline-block text-emerald-600 underline transition hover:text-emerald-600/75 dark:text-emerald-500 dark:hover:text-emerald-500/75"
                  href="/"
                >
                  Terms & Conditions
                </a>

                <span>&middot;</span>

                <a
                  className="inline-block text-emerald-600 underline transition hover:text-emerald-600/75 dark:text-emerald-500 dark:hover:text-emerald-500/75"
                  href="/"
                >
                  Privacy Policy
                </a>
              </p>

              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:order-first sm:mt-0">
                &copy; 2023 Ceos Tab
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
