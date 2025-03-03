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

    if (!name) {
      navigate('/division/rajshahi');
      return;
    }

    // Decode the URL parameter
    const decodedName = decodeURIComponent(name);
    if (!districtData[decodedName.toLowerCase()]) {
      navigate('/division/rajshahi');
    }
  }, [name, navigate]);

  if (!name) {
    return null;
  }

  // Decode the URL parameter
  const decodedName = decodeURIComponent(name);
  if (!districtData[decodedName.toLowerCase()]) {
    return null;
  }

  return (
    <DistrictTemplate 
      name={decodedName} 
      divisionName="Rajshahi"
      data={districtData[decodedName.toLowerCase()]} 
    />
  );
};

export default DistrictPage; 