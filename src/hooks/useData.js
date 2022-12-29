import axios from "axios";
import React, { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://pim-messageprocessor.azurewebsites.net/api/GetPIMAuditData")
      .then((res) => setData(res));
  });
  console.log("data", data);
  return data;
};

export default useData;
