import "../globals.css";

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <main>
        {children}
    </main>
  );
}
