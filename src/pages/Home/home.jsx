import { useContext, useEffect, useState } from "react";
import { TabBox } from "../../components/TabBox/tabbox";
import { apiNoToken } from "../../config/api/apiNoToken";
import { motion, useViewportScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Loading } from "../../components/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { SearchBar } from "../../components/Navbar/searchbar.jsx";
import { AuthContext } from "../../config/context/authContext";
import { useUserInfo } from "../../config/context/userInfoHook";
import { api } from "../../config/api/api";

// import backgroundImage from "../../assets/images/Background/background.svg";

function AnimatedTabBox({ tab }) {
  const [ref, inView] = useInView();
  const boxVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.2 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={boxVariants}
        style={{ opacity: 0 }}
      >
        <TabBox tab={tab}>
          <motion.div variants={contentVariants}>{tab.content}</motion.div>
        </TabBox>
      </motion.div>
    </div>
  );
}

export function Home() {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const { userInfo, setUserInfo } = useUserInfo();
  const navigate = useNavigate();

  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    async function fetchUser() {
      try {
        if (loggedInUser) {
          const response = await api.get(
            `/user/profile/${loggedInUser.user.username}`
          );
          setUser(response.data);
          setUserInfo(response.data);
        }
      } catch (err) {
        console.log(err);
        navigate("/erro");
      }
    }

    fetchUser();
  }, []);

  const [tabs, setTabs] = useState("");
  const [loading, setLoading] = useState(false);
  const params = useParams();
  useEffect(() => {
    async function fetchTabs() {
      try {
        const res = await apiNoToken.get(`/tab/home/`);

        setTabs(res.data);
        setLoading(!loading);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTabs();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {!loading && <Loading />}
      <div className="w-full pl-5  ">
        <SearchBar />
      </div>

      <div className="py-6 w-full flex flex-col items-center gap-6 ">
        {loading &&
          tabs.map((e) => <AnimatedTabBox key={e._id} tab={e} />).reverse()}
      </div>
    </motion.div>
  );
}
