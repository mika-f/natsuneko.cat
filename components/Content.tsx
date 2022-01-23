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
        <span className="-mt-3 align-top font-px">
          <ExternalLink href="https://twitter.com/6jz" className="mx-2">
            <Stack x="lg">
              <FontAwesome fa="solid" icon="circle" />
              <FontAwesome className="fa-inverse" fa="brands" icon="twitter" />
            </Stack>
          </ExternalLink>
          <ExternalLink
            href="https://patreon.com/natsuneko_vrc"
            className="mx-4"
          >
            <Stack x="lg">
              <FontAwesome fa="solid" icon="circle" />
              <FontAwesome className="fa-inverse" fa="brands" icon="patreon" />
            </Stack>
          </ExternalLink>
          <ExternalLink href="https://blog.mochizuki.moe" className="mx-3">
            <Stack x="lg">
              <FontAwesome fa="solid" icon="circle" />
              <FontAwesome className="fa-inverse" fa="solid" icon="blog" />
            </Stack>
          </ExternalLink>
        </span>
      </div>
    </div>
  );
};

export default Content;
