import { useEffect } from "react";
import { api } from "../../config/api/api";
import { TabBox } from "../../components/TabBox/tabbox";

export function Home() {
  useEffect(() => {
    async function fetchTabs() {
      try {
        const res = await api.get("/tab/all-tabs");
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTabs();
  }, []);

  return (
    <div className="h-full">
      <div className="py-6 w-screen flex flex-col items-center gap-6 ">
        <TabBox />
        <TabBox />
        <TabBox />
        <TabBox />
        <TabBox />
        <TabBox />
        <TabBox />
      </div>
    </div>
  );
}
