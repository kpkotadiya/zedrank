import axios from "axios";
import React, { useEffect, useState } from "react";
import HorsesCard from "../../components/commonComponent/HorsesCard";

function Finney() {
  const [genZ1, setGenZ1] = useState([]);
  const [genZ2, setGenZ2] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://apix.zedranks.com/api/v1/listings?type=genesis&genotype=Z5&bloodline=finney"
      )
      .then((response) => {
        if (response.data.length !== 0) {
          setGenZ1(response.data);
        }
      })
      .catch((err) => {
        setGenZ1([]);
      });

    axios
      .get(
        "https://apix.zedranks.com/api/v1/listings?type=genesis&genotype=Z6&bloodline=finney"
      )
      .then((response) => {
        if (response.data !== 0) {
          setGenZ2(response.data);
        }
      })
      .catch((err) => {
        setGenZ2([]);
      });
  }, []);
  return (
    <div>
      <HorsesCard
        title="Genesis Z5"
        horseData={genZ1.filter((val, index, array) => {
          return index < 7;
        })}
        style={{ marginBottom: "2rem" }}
      />
      <HorsesCard
        title="Genesis Z6"
        horseData={genZ2.filter((val, index, array) => {
          return index < 7;
        })}
      />
    </div>
  );
}

export default Finney;
