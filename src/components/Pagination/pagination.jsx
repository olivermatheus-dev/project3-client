import { Link, useParams } from "react-router-dom";

export function Pagination() {
  const params = useParams();
  const pagePrev =
    Number(params.page) > 1 ? Number(params.page) - 1 : Number(params.page);

  return (
    <div className="flex flex-col items-center mt-5 pb-8">
      <div className="inline-flex mt-2 xs:mt-0 gap-3">
        <Link to={`/${params.category}/${pagePrev}`}>
          <button className="inline-flex items-center justify-center px-2 py-2 text-sm font-medium text-emerald-600    dark:text-emerald-500  dark:hover:text-white transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </Link>
        <div className=" inline-flex items-center justify-center px-2 py-2 text-sm font-semibold text-emerald-600    dark:text-emerald-500  dark:hover:text-white transition-all">
          {params.page}
        </div>
        <Link to={`/${params.category}/${+params.page + 1}`}>
          <button className="inline-flex items-center justify-center px-2 py-2 text-sm font-medium text-emerald-600    dark:text-emerald-500  dark:hover:text-white transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
