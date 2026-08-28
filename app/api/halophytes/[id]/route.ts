import { HALOPHYTE_IDS, getHalophyteById } from "@/lib/halophytes";

type ApiRouteContext = Readonly<{
  params: Promise<{ id: string }>;
}>;

export const dynamic = "force-static";

export function generateStaticParams() {
  return HALOPHYTE_IDS.map((id) => ({ id }));
}

export async function GET(_request: Request, { params }: ApiRouteContext) {
  const { id } = await params;
  const halophyte = getHalophyteById(id);

  if (!halophyte) {
    return Response.json(
      { error: "INVALID_HALOPHYTE_ID" },
      { status: 404 },
    );
  }

  return Response.json({
    id: halophyte.id,
    index: halophyte.index,
    name: halophyte.name,
    pageUrl: `/${halophyte.id}/`,
    imageUrl: halophyte.imagePath,
    downloadUrl: halophyte.imagePath,
  });
}
