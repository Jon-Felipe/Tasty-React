import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const { user } = useSelector((state: RootState) => state.user);

  if (!user?.token) {
    return <Navigate to='/' replace />;
  }

  return children;
};

export default ProtectedRoute;
