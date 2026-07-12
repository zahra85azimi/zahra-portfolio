import { useState } from "react";

function usePortfolio() {
  const [showAll, setShowAll] = useState(false);

  const toggleProjects = () => {
    setShowAll((prev) => !prev);
  };

  return {
    showAll,
    toggleProjects,
  };
}

export default usePortfolio;
