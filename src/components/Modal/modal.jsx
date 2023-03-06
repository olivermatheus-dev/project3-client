export function Modal({ children, setIsOpen }) {
  return (
    <>
      <div className="z-50 fixed bg-zinc-900/70  flex justify-center items-center  top-0 right-0 bottom-0 left-0 h-screen">
        <div className=" w-5/6  md:w-6/12 h-5/6 bg-zinc-100 dark:bg-zinc-800 rounded-md shadow-2xl ">
          <button
            className="text-white"
            onClick={() => {
              setIsOpen((isOpen) => {
                !isOpen;
              });
            }}
          >
            X
          </button>
          {children}
        </div>
      </div>
    </>
  );
}
