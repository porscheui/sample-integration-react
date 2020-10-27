import React from 'react';
import { PorscheDesignSystemMyPrefixComponents } from '../components';

const { PButton, PIcon, PLinkPure } = PorscheDesignSystemMyPrefixComponents;

export const PhnHeaderPage = (): JSX.Element => (
  <>
    <phn-header env="preview" style={{ position: 'absolute', left: 0, right: 0 }} />

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