import React from "react";
import ExternalLink from "./ExternalLink";
import FontAwesome from "./FontAwesome/Icon";
import Stack from "./FontAwesome/Stack";

const Content: React.VFC<{}> = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl">natsuneko.cat</h1>
      <p className="text-xl md:text-3xl my-4">Web Engineer @ Tokyo</p>
      <p className="text-xl md:text-3xl my-4">Es un gat!</p>
      <div className="my-16">
        <ExternalLink href="https://github.com/mika-f" className="mx-4">
          <FontAwesome
            className="text-4xl md:text-6xl"
            fa="brands"
            icon="github"
          />
        </ExternalLink>
        <ExternalLink href="https://twitter.com/6jz" className="mx-2">
          <FontAwesome
            className="text-4xl md:text-6xl"
            fa="brands"
            icon="twitter-square"
          />
        </ExternalLink>
        <ExternalLink href="https://natsuneko.blog/" className="mx-3">
          <FontAwesome
            className="text-4xl md:text-6xl"
            fa="solid"
            icon="square-rss"
          />
        </ExternalLink>
      </div>
    </div>
  );
};

export default Content;
