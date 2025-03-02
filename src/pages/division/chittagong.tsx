import DivisionTemplate from "@/components/templates/DivisionTemplate";
import { divisionData } from "@/data/divisions";
import { useEffect } from "react";

const ChittagongPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return <DivisionTemplate data={divisionData.chittagong} />;
};

export default ChittagongPage; 