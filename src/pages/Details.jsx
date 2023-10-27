import axios from "axios";
import { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountry } from "../config";
import { Button } from "../components/Button";
import { Info } from "../components/Info";
import { useNavigate, useParams } from "react-router-dom";

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <Button onClick={routeChange}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info push={navigate} {...country} />}
    </div>
  );
};
