import { NextRequest } from "next/server";
import { z } from "zod";

const schema = z.object({
  role: z.string().min(1),
  fullName: z.string().min(3),
  phone: z.string().regex(/\(\d{2}\)\s?\d{5}-\d{4}/),
  email: z.string().email(),
  energyType: z.string().min(1),
  state: z.string().length(2),
  city: z.string().min(1),
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = schema.safeParse(json);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({
          message: "Falha de validação",
          issues: parsed.error.issues,
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Stub de integração externa (URL fake):
    const UPSTREAM_URL = "https://api.exemplo.com/partners";
    // Aqui manteríamos o forward real no futuro. Por ora, apenas simula delay.
    await new Promise((r) => setTimeout(r, 300));

    return new Response(
      JSON.stringify({ ok: true, forwardedTo: UPSTREAM_URL }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (e: unknown) {
    const errorMessage = e instanceof Error ? e.message : "Erro interno";
    return new Response(JSON.stringify({ message: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
