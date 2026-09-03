export type HalophyteResult = Readonly<{
  id: string;
  index: number;
  name: string;
  imagePath: string;
  downloadFilename: string;
}>;

const RESULT_DEFINITIONS = [
  ["1472", "칠면초"],
  ["2085", "갯잔디"],
  ["2639", "지채"],
  ["3157", "퉁퉁마디"],
  ["3841", "순비기나무"],
  ["4268", "해홍나물"],
  ["5013", "갯질경"],
  ["5576", "갈대"]
] as const;

export const HALOPHYTES: readonly HalophyteResult[] = RESULT_DEFINITIONS.map(
  ([id, name], resultIndex) => ({
    id,
    index: resultIndex + 1,
    name,
    imagePath: `/results/${id}.png`,
    downloadFilename: `halophytes-mbti-${id}.png`,
  }),
);

export const HALOPHYTE_IDS = HALOPHYTES.map(({ id }) => id);

const HALOPHYTE_BY_ID = new Map(
  HALOPHYTES.map((halophyte) => [halophyte.id, halophyte]),
);

export function getHalophyteById(id: string): HalophyteResult | undefined {
  return HALOPHYTE_BY_ID.get(id);
}
