export function Modal({ children, setIsOpen }) {
  return (
    <>
      <div className="z-50 fixed bg-zinc-900/70  flex justify-center items-center  top-0 right-0 bottom-0 left-0 h-screen">
        <div className=" w-5/6  md:w-6/12 h-5/6 bg-zinc-100 dark:bg-zinc-800 rounded-md shadow-2xl ">
          <span className="flex justify-end pt-2 pr-2">
            <div
              onClick={() => {
                setIsOpen((isOpen) => {
                  !isOpen;
                });
              }}
              className="w-7 h-7 dark:hover:bg-white/40 hover:bg-black/40 rounded-sm flex items-center justify-center transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 dark:text-white/80 text-black/80 hover:text-black dark:hover:text-white transition"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </span>

          {children}
        </div>
      </div>
    </>
  );
}
