export default function FamilyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {children}
    </div>
  );
}
