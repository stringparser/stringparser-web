import { keyframes } from 'styled-components';
import { colors, Media, breakpoints } from './theme';

export const composeMixins = (mixins?: string[]) => (
  mixins && mixins.join('\n')
);

type ColorVariation = keyof (typeof colors);

export const color = (v: ColorVariation) => `
  color: ${colors[v]};
`;

export const bgColor = (v: ColorVariation) => `
  background-color: ${colors[v]};
`;

export const bgImage = (v: string) => `
  background: url('${v}') center center no-repeat;
  background-size: contain;
`;

const alignment = {
  center: `
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  `,
  'v-center': `
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  't-center': `
    text-align: center;
  `,
  't-left': `
    text-align: left;
  `,
};

export type Aligns = keyof (typeof alignment);

export const align = (v: Aligns) => alignment[v];

export const height = (v: string) => `
  min-height: ${v};
`;

export const list = () => `

  ${forMedia('phone', `
    & > *:not(:first-child) {
      margin-top: 1.5rem;
    }
  `)}

  ${forMedia('tablet', `
    & > *:not(:first-child) {
      margin-left: 1.5rem;
    }
  `)}
`;

export const gutter = (n: number = 1) => `
  padding: ${1 * n}rem;

  ${forMedia('desktop', `
    padding: ${2 * n}rem;
  `)}
`;

const mqForMedia = (media: Media) => (
  media === 'phone'
    ? `(max-width: ${breakpoints[media]})`
    : `(min-width: ${breakpoints[media]})`
);

export const forMedia = (media: Media, css: string) => `
  @media ${mqForMedia(media)} {
    ${css}
  }
`;

export const boxShadow = (color: string = 'rgba(0,0,0,0.1)') => `
  box-shadow: 0 0 2px 0 ${color};
`;

export const content = (width?: string) => `
  margin: 0 auto;
  max-width: ${width || '960px'};
`;

export const columns = (basis?: string) => `
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & > * {
    flex: 1;
  }

  ${forMedia('tablet', `
    flex-direction: row;

    ${basis && `
      & > * {
        flex-basis: ${basis};
      }
    `}
  `)}
`;

export const pulseAnimation = keyframes`
  from {
    opacity: 0.3;
  }

  to {
    opacity: 1;
  }
`;
