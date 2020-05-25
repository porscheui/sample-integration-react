import React from "react";
import {
  PButton,
  PIcon,
  PLinkPure,
} from "@porsche-design-system/components-react";

export const PageWithPhnHeader = () => (
  <>
    <phn-header style={{ position: 'absolute', left: 0, right: 0 }} />

    <div style={{ paddingTop: 150 }}>
      <div>
        <PButton>Some PButton</PButton>
      </div>
      <div>
        <PLinkPure>Some PLinkPure</PLinkPure>
      </div>
      <div>
        <PIcon name="configurate" />
        <PIcon name="compare" />
        <PIcon name="search" />
      </div>
    </div>
  </>
);
