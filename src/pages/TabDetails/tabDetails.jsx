import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiNoToken } from "../../config/api/apiNoToken";

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
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTab();
  }, []);

  return <>{loading && <p>{tab.title}</p>}</>;
}
