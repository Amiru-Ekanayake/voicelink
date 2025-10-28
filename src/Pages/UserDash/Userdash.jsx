import React from "react";
import Dashheader from "./Dashheader";
import Dashcards from "./Dashcards";
import Dashnavi from "./Dashnavi";
import Dashfeed from "./Dashfeed";

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Dashheader />
      <div className="hidden md:block">
      <Dashcards />
      </div>
      <Dashfeed />

    </div>
  );
}
