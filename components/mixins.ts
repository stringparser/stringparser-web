import { colors, forMedia } from './theme';

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
  background-size: cover;
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
};

export type Aligns = keyof (typeof alignment);

export const align = (v: Aligns) => alignment[v];

export const height = (v: string) => `height: ${v};`;

export const list = () => `
  & > * {
    margin-top: 1rem;
    margin-left: 1rem;
  }
`;

export const gutter = (n: number = 1) => `
  padding: ${1 * n}rem ${1.5 * n}rem;

  ${forMedia('desktop', `
    padding: ${2 * n}rem ${4 * n}rem;
  `)}
`;

export const columns = (num?: number) => `
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > * {
    flex: 1;
  }

  ${forMedia('tablet', `
    flex-direction: row;

    ${num && `
      & > * {
        flex-basis: ${100 / num}%;
      }
    `}
  `)}
`;
