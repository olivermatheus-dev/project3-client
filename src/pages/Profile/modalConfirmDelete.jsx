import { Link } from "react-router-dom";

export function ModalConfirmDelete({ handleDelete, setDeleteModal }) {
  return (
    <div className=" h-screen w-screen flex justify-center items-center absolute inset-0 z-20">
      <div className="fixed inset-0 bg-black/30 w-screen h-screen transition-all z-10" />
      <div className=" w-5/6 sm:w-3/6 flex justify-center items-center absolute  z-20">
        <div
          class="w-5/6 sm:w-3/6 h-64  sm:h-56 rounded-2xl  bg-zinc-100 dark:bg-zinc-800 p-4 shadow-lg sm:p-6 lg:p-8"
          role="alert"
        >
          <div class="flex items-center gap-4">
            <span class="shrink-0 rounded-full bg-red-600 p-2 text-zinc-800 ">
              <svg
                class="h-4 w-4 mr-1"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                  fill-rule="evenodd"
                />
              </svg>
            </span>

            <p class="font-medium sm:text-2xl dark:text-red-600">
              Tem certeza?
            </p>
          </div>

          <p class="mt-4 text-gray-600 dark:text-gray-400">
            Tem certeza que deseja deletar sua conta? Essa ação é irreversível.
          </p>

          <div class="mt-6 sm:flex sm:gap-4">
            <Link
              class="inline-block w-full rounded-lg bg-red-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
              onClick={handleDelete}
            >
              Deletar
            </Link>

            <button
              onClick={() => {
                setDeleteModal((state) => !state);
              }}
              class="mt-2 inline-block w-full rounded-lg bg-gray-50 px-5 py-3 text-center text-sm font-semibold text-gray-500 sm:mt-0 sm:w-auto"
              to="/"
            >
              Não deletar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
