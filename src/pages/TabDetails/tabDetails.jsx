import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { apiNoToken } from "../../config/api/apiNoToken";
import { dateConverter } from "../../config/functions/dateConverter";

export function TabDetails() {
  const [tab, setTab] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function fetchTab() {
      try {
        const response = await apiNoToken.get(`/tab/details/${params.tabId}`);
        setTab(response.data);
        setLoading(!loading);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTab();
  }, []);

  let userId;
  if (localStorage.getItem("loggedInUser")) {
    userId = JSON.parse(localStorage.getItem("loggedInUser") || '""').user._id;
  }

  return (
    <>
      {loading && (
        <>
          <div className="h-screen">
            <main className="container w-5/6 dark:bg-zinc-600 bg-gray-50 my-5 shadow-xl">
              <div className="flex justify-between   py-5 px-2 ">
                <article className="mx-auto w-full">
                  <header className="mb-4 lg:mb-6 not-format">
                    <address className="flex items-center mb-6 not-italic ">
                      <div className=" inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                        <div>
                          <p className="text-xl font-bold text-gray-900 dark:text-white">
                            {tab.authorId.name}
                          </p>
                          <p className="text-base font-light text-gray-500 dark:text-gray-400">
                            <time>{dateConverter(tab.createdAt)}</time>
                          </p>
                        </div>
                      </div>
                    </address>
                    <h1 className="mb-1 text-3xl font-semibold leading-tight text-gray-900 lg:mb-2 lg:text-4xl dark:text-emerald-500">
                      {tab.title}
                    </h1>
                  </header>
                  <p
                    className="pb-6 text-zinc-50"
                    dangerouslySetInnerHTML={{ __html: tab.content }}
                  />
                  {userId === tab.authorId._id && (
                    <Link className="rounded-sm shadow-xl bg-emerald-500 py-2 px-3">
                      Editar
                    </Link>
                  )}
                </article>
              </div>
            </main>
          </div>
        </>
      )}
      {!loading && <h1>Carregando </h1>}
    </>
  );
}
