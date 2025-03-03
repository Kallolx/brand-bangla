import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import DistrictTemplate from '@/components/templates/DistrictTemplate';
import { districtData } from '@/data/districts';

const DistrictPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Scroll to top when component mounts or when district changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    if (!name || !districtData[name.toLowerCase()]) {
      navigate('/division/mymensingh');
    }
  }, [name, navigate]);

  if (!name || !districtData[name.toLowerCase()]) {
    return null;
  }

  return (
    <DistrictTemplate 
      name={name} 
      divisionName="Mymensingh"
      data={districtData[name.toLowerCase()]} 
    />
  );
};

export default DistrictPage; 