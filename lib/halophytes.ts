export type HalophyteResult = Readonly<{
  id: string;
  index: number;
  name: string;
  imagePath: string;
  downloadFilename: string;
}>;

const RESULT_DEFINITIONS = [
  ["1472", "퉁퉁마디"],
  ["2085", "갯질경"],
  ["2639", "갯개미취"],
  ["3157", "나문재"],
  ["3841", "갯잔디"],
  ["4268", "칠면초"],
  ["5013", "사데풀"],
  ["5576", "해홍나물"],
  ["6194", "천일사초"],
  ["6742", "골풀"],
  ["7086", "갯능쟁이"],
  ["7521", "갯메꽃"],
  ["8195", "해당화"],
  ["8463", "모새달"],
  ["8937", "갯방풍"],
  ["9214", "갯씀바귀"],
  ["9568", "갯까치수염"],
  ["9840", "번행초"],
] as const;

export const HALOPHYTES: readonly HalophyteResult[] = RESULT_DEFINITIONS.map(
  ([id, name], resultIndex) => ({
    id,
    index: resultIndex + 1,
    name,
    imagePath: `/results/${id}.webp`,
    downloadFilename: `halophytes-mbti-${id}.webp`,
  }),
);

export const HALOPHYTE_IDS = HALOPHYTES.map(({ id }) => id);

const HALOPHYTE_BY_ID = new Map(
  HALOPHYTES.map((halophyte) => [halophyte.id, halophyte]),
);

export function getHalophyteById(id: string): HalophyteResult | undefined {
  return HALOPHYTE_BY_ID.get(id);
}
