import React from 'react';
import {Composition, Still} from 'remotion';
import {INTRO_SECONDS, Intro, Intro2K, Logo, defaultIntroProps} from './Intro';
import './theme';

export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="Intro" component={Intro} width={1920} height={1080} fps={30} durationInFrames={INTRO_SECONDS * 30} defaultProps={defaultIntroProps} />
    <Composition id="Intro2K" component={Intro2K} width={2560} height={1440} fps={30} durationInFrames={INTRO_SECONDS * 30} defaultProps={defaultIntroProps} />
    <Composition id="Intro2K60" component={Intro2K} width={2560} height={1440} fps={60} durationInFrames={INTRO_SECONDS * 60} defaultProps={defaultIntroProps} />
    <Still id="Logo" component={Logo} width={1000} height={1000} />
  </>
);
