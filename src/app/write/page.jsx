import React from "react";

import dynamic from "next/dynamic";

const WritePage = dynamic(() => import("./write-page"), {
  ssr: false,
});

const page = () => {
  return (
    <div>
      <WritePage />
    </div>
  );
};

export default page;
