import "../globals.css";

export default function AppsLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <main>
        {children}
    </main>
  );
}
