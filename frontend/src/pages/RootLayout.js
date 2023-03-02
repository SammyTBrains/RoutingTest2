import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading"; //Checks if something is loaidng on this current route

  return (
    <>
      <MainNavigation />
      <main>{isLoading ? "Loading..." : <Outlet />}</main>
    </>
  );
};

export default RootLayout;
