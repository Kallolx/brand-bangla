import DivisionTemplate from "@/components/templates/DivisionTemplate";
import { divisionData } from "@/data/divisions";
import { useEffect } from "react";

const DhakaPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return <DivisionTemplate data={divisionData.dhaka} />;
};

export default DhakaPage; 