import { Link } from "react-router-dom";

export function TabBox() {
  return (
    <>
      <div class="max-w-2xl px-8 py-3 bg-white rounded-lg shadow-md dark:bg-zinc-800  hover:scale-105 transition duration-300 ease-in-out">
        <div class="flex items-center justify-between">
          <span class="text-sm font-light text-gray-600 dark:text-gray-400">
            Mar 10, 2019
          </span>
          <a
            class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
            tabindex="0"
            role="button"
          >
            Design
          </a>
        </div>

        <div class="mt-1">
          <Link
            href="#"
            class="text-lg font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
            tabindex="0"
            role="link"
          >
            Accessibility tools for designers and developers
          </Link>
          <p class="text-sm mt-2 text-gray-600 dark:text-gray-300 line-clamp-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </p>
        </div>

        <div class="flex items-center justify-between mt-4">
          <a
            href="#"
            class="text-emerald-600 dark:text-emerald-400 hover:underline"
            tabindex="0"
            role="link"
          >
            Read more
          </a>

          <div class="flex items-center">
            <img
              class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
              alt="avatar"
            />
            <a
              class="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
              tabindex="0"
              role="link"
            >
              Khatab wedaa
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
