import React from "react";
import dynamic from "next/dynamic";

const GlBackground = dynamic(() => import("./GlBackground"), { ssr: false });

const Background: React.VFC<{}> = () => {
  return <GlBackground />;
};

export default Background;
