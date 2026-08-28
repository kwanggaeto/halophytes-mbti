import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DownloadButton } from "@/components/download-button";
import { HALOPHYTE_IDS, getHalophyteById } from "@/lib/halophytes";

type ResultPageProps = Readonly<{
  params: Promise<{ id: string }>;
}>;

export const dynamicParams = false;

export function generateStaticParams() {
  return HALOPHYTE_IDS.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: ResultPageProps): Promise<Metadata> {
  const { id } = await params;
  const halophyte = getHalophyteById(id);

  if (!halophyte) {
    return { title: "잘못된 접근" };
  }

  return {
    title: `${halophyte.name} 결과`,
    description: `${halophyte.name} 결과 이미지를 확인하고 다운로드합니다.`,
  };
}

export default async function ResultPage({ params }: ResultPageProps) {
  const { id } = await params;
  const halophyte = getHalophyteById(id);

  if (!halophyte) {
    notFound();
  }

  return (
    <main className="result-page">
      <section className="image-stage" aria-label={`${halophyte.name} 결과 이미지`}>
        <img
          className="result-image"
          src={halophyte.imagePath}
          alt={`${halophyte.name} 염생식물 일러스트`}
          width={1122}
          height={1402}
          fetchPriority="high"
        />
      </section>
      <DownloadButton
        imagePath={halophyte.imagePath}
        filename={halophyte.downloadFilename}
      />
    </main>
  );
}
