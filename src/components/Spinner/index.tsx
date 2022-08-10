import React from 'react';
import { ClipLoader } from 'react-spinners';

interface ISpinner {
    isLoading: boolean;
    color?: string;
    size?: number;
};

const Spinner = ({ isLoading = false, color="#fff", size=20 }: ISpinner): JSX.Element => {
  return (
    <>
    {isLoading && (
        <ClipLoader color={color} loading={isLoading} size={size} />
    )}
    </>
  )
};

export default Spinner;