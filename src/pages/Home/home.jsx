import axios from "axios";
import { useEffect, useState } from "react";
import { TabBox } from "../../components/TabBox/tabbox";
import { apiNoToken } from "../../config/api/apiNoToken";
import { motion } from "framer-motion";
import { Loading } from "../../components/Loading";

export function Home() {
  const [tabs, setTabs] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchTabs() {
      try {
        // const res = await apiNoToken.get("/tab/all-tabs");
        const res = await apiNoToken.get("/tab/all-tabs");

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
      exit={{ opacity: 0 }}
    >
      {!loading && <Loading />}
      <div className="py-6 w-screen flex flex-col items-center gap-6 ">
        {loading &&
          tabs
            .map((e) => {
              return (
                <div key={e._id}>
                  <TabBox tab={e} />
                </div>
              );
            })
            .reverse()}
      </div>
    </motion.div>
  );
}
