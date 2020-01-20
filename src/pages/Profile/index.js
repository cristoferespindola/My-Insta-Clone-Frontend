import React from "react";

import GlobalStyles from "../../styles/global";

import Header from "../../components/Headers";
import UserProfile from "../../components/UserProfile";

export default function Profile() {
  return (
    <>
      <Header />
      <UserProfile />
      <GlobalStyles />
    </>
  );
}
