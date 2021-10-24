import axios from "axios";
import React, { useEffect, useState } from "react";
import HorsesCard from "../../components/commonComponent/HorsesCard";

function Buterin() {
  const [genZ1, setGenZ1] = useState([]);
  const [genZ2, setGenZ2] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://apix.zedranks.com/api/v1/listings?type=genesis&genotype=Z8&bloodline=buterin"
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
        "https://apix.zedranks.com/api/v1/listings?type=genesis&genotype=Z9&bloodline=buterin"
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
        title="Genesis Z7"
        horseData={genZ1.filter((val, index, array) => {
          return index < 7;
        })}
        style={{ marginBottom: "2rem" }}
      />
      <HorsesCard
        title="Genesis Z8"
        horseData={genZ2.filter((val, index, array) => {
          return index < 7;
        })}
      />
    </div>
  );
}

export default Buterin;
