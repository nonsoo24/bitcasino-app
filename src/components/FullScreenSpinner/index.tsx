import Spinner from "components/Spinner";
import React from "react";

interface IFullScreenSpinner {
    isLoading: boolean;
}

const FullScreenSpinner = ({ isLoading = false }: IFullScreenSpinner) => {
  return (
    <>
      {isLoading && (
        <div className="loading">
            <Spinner isLoading={isLoading} size={60} />
        </div>
      )}
    </>
  );
};

export default FullScreenSpinner;
