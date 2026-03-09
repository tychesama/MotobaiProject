import { useState, useEffect } from "react";
import api from "../../api";

export function useFetchData(info) {
  const [data, setData] = useState([]);
  const [refreshData, setRefreshData] = useState(false);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await api.get(`/api/${info}/list/`);
        const filteredData = response.data.filter((item) => !item.is_deleted);
        setData(filteredData);
      } catch (error) {
        if (error.response?.status === 401) {
          window.location.href = '/login';
          return;
        }
        console.error(`Error fetching ${info}s:`, error);
      }
    };

    fetchInfo();
  }, [info, refreshData]);

  const triggerRefresh = () => setRefreshData((prev) => !prev);

  return { data, triggerRefresh };
}