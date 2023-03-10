import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { apiNoToken } from "../../config/api/apiNoToken";
import { dateConverter } from "../../config/functions/dateConverter";
import { TabComment } from "./tabComment.jsx";
import { Loading } from "../../components/Loading";
import { TabUpdate } from "./tabUpdate";
import { Modal } from "../../components/Modal/modal";
import { ButtonLike } from "./buttonLike";
import { api } from "../../config/api/api";

export function TabDetails() {
  const [tab, setTab] = useState();
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState([]);
  const [updatePage, setUpdatePage] = useState(false);
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({ role: "USER" });

  let userId;
  let userComplete;
  if (localStorage.getItem("loggedInUser")) {
    userId = JSON.parse(localStorage.getItem("loggedInUser") || '""').user._id;
    userComplete = JSON.parse(localStorage.getItem("loggedInUser") || '""');
  }

  //adicionando visualização
  useEffect(() => {
    async function updateViews() {
      try {
        const response = await apiNoToken.get(`/tab/views/${params.tabId}`);
        console.log("visualização adicionada");
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    updateViews();
  }, []);

  useEffect(() => {
    async function fetchTab() {
      try {
        const response = await apiNoToken.get(`/tab/details/${params.tabId}`);
        setTab(response.data);
        setComment(response.data.commentsId);
        // console.log(response.data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTab();

    async function fetchUser() {
      try {
        const response = await api.get(
          `/user/profile/${userComplete.user.username}`
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, [updatePage]);

  return (
    <>
      {loading && (
        <div className="w-full flex justify-center">
          <div className="h-full w-full sm:w-[700px] md:w-[850px] lg:w-[1200px]">
            <main className="container w-5/6 dark:bg-zinc-600 bg-gray-50 my-5 shadow-xl">
              <div className="flex justify-between   py-5 px-2 ">
                <article className="mx-auto w-full">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className=" not-format sm:pl-10">
                      <address className="flex items-center not-italic ">
                        <div className=" inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                          <div className="">
                            <Link to={`/profile/${tab.authorId.username}/user`}>
                              <img
                                src={tab.authorId.img}
                                className="rounded-full w-16 h-16 hover:scale-105 transition-all duration-200 cursor-pointer"
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }}
                              />
                              <p className="text-xl font-bold text-gray-900 dark:text-white">
                                {tab.authorId.name}
                              </p>
                            </Link>
                            <p className="text-base font-light text-gray-500 dark:text-gray-400">
                              <time>{dateConverter(tab.createdAt)}</time>
                            </p>

                            {userId === tab.authorId._id ||
                            user.role === "ADMIN" ? (
                              <div className="mt-5">
                                <Link
                                  className="rounded-sm shadow-xl bg-emerald-500 py-2 px-3"
                                  onClick={setIsOpen}
                                >
                                  Editar
                                </Link>
                                {isOpen && (
                                  <Modal setIsOpen={setIsOpen}>
                                    <TabUpdate
                                      updatePage={updatePage}
                                      setUpdatePage={setUpdatePage}
                                      setIsOpen={setIsOpen}
                                    />
                                  </Modal>
                                )}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </address>
                    </div>
                    <div className="w-[3px] h-[200px] hidden sm:block bg-emerald-600 dark:bg-zinc-200 rounded-xl mx-4"></div>
                    <div>
                      <h1 className="mb-1 text-3xl font-semibold leading-tight text-gray-900 lg:mb-2 lg:text-4xl dark:text-emerald-500">
                        {tab.title}
                      </h1>
                      <div className="flex gap-2 items-center justify-center rounded-md shadow-md w-20 h-8">
                        <p className="text-base px-3 font-semibold w-4">
                          {tab.likesUserId.length}
                        </p>
                        <ButtonLike
                          user={userId}
                          setUpdatePage={setUpdatePage}
                          userLikes={tab.likesUserId}
                        />
                      </div>
                      <div
                        className="tabs-content pb-6 dark:text-zinc-50 text-zinc-800"
                        dangerouslySetInnerHTML={{ __html: tab.content }}
                      />
                    </div>
                  </div>
                </article>
              </div>
            </main>
            <div className="h-full w-full sm:w-[700px] md:w-[850px] lg:w-[1200px]">
              <TabComment comments={comment} setUpdatePage={setUpdatePage} />
            </div>
          </div>
        </div>
      )}
      <style>
        {`
          .tabs-content h1 {
            font-size: 2em;
          }
          .tabs-content h2 {
            font-size: 1.5em
          }
          .tabs-content  ul {
            list-style-type: disc
          }
          .tabs-content ol{
          list-style-type: decimal
          }
        `}
      </style>
      {!loading && <Loading />}
    </>
  );
}
