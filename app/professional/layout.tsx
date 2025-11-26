import "./professional.css";

export default function ProfessionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="professional-version">{children}</div>;
}
