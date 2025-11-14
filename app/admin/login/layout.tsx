// Login page doesn't need authentication check
// This layout ensures the login page renders without the admin layout wrapper
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: '100vh', width: '100%' }}>
      {children}
    </div>
  );
}

