import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return <div>{user ? <Outlet /> : null}</div>;
};

export default ProtectPage;
