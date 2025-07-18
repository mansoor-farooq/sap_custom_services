import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const dumyatanpt = [
    {
      id: 1001,
      name: "Admin",
      email: "admin@gmail.com",
      password: "Admin@123"
    },
    {
      id: 1002,
      name: "Mansoor",
      email: "mansoorturk757@gmail.com",
      password: "Mansoor@123"
    }
  ];

  const userData = JSON.parse(localStorage.getItem('User_Data'));

  const isValidUser = dumyatanpt.some(user =>
    userData && userData.id === user.id && userData.email === user.email
  );

  const isAuth = isLoggedIn && isValidUser;

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
