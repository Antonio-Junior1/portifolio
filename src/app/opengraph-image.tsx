import { ImageResponse } from "next/og";

export const alt = "Antônio Junior | Desenvolvedor Full Stack";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f8fafc",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          border: "12px solid #e2e8f0",
        }}
      >
        {/* Top Badge Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "#eff6ff",
              border: "2px solid #bfdbfe",
              borderRadius: "9999px",
              padding: "10px 24px",
              color: "#1d4ed8",
              fontSize: "22px",
              fontWeight: 700,
            }}
          >
            <span>FIAP • Engenharia de Software & ADS</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#ecfdf5",
              border: "2px solid #a7f3d0",
              borderRadius: "9999px",
              padding: "10px 24px",
              color: "#047857",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            <span>● Disponível para Estágio & Dev Jr.</span>
          </div>
        </div>

        {/* Center Main Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            Antônio Junior
          </div>
          <div
            style={{
              fontSize: "46px",
              fontWeight: 800,
              color: "#2563eb",
              letterSpacing: "-0.02em",
            }}
          >
            Desenvolvedor Full Stack
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#475569",
              maxWidth: "920px",
              lineHeight: 1.4,
              marginTop: "8px",
            }}
          >
            Aplicações Web, Mobile, APIs Corporativas (.NET 8 & Java Spring Boot) e Inteligência Artificial em Python.
          </div>
        </div>

        {/* Bottom Stack Pills & GitHub */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "2px solid #e2e8f0",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            {["React", "Next.js", "TypeScript", "Node.js", ".NET 8", "Java / Spring", "Python IA"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    backgroundColor: "#ffffff",
                    border: "2px solid #cbd5e1",
                    borderRadius: "14px",
                    padding: "8px 18px",
                    fontSize: "19px",
                    fontWeight: 700,
                    color: "#1e293b",
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>

          <div
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#2563eb",
            }}
          >
            github.com/Antonio-Junior1
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
