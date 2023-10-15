import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useUpdateHash(activeSection) {
  const navigate = useNavigate();

  useEffect(() => {
    // Update the hash in the browser based on the active section
    navigate(`#${activeSection}`);
  }, [activeSection, navigate]);
}

export default useUpdateHash;