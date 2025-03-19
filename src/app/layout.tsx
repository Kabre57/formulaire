// src/app/layout.tsx
import './styles/globals.css'; // Assurez-vous que ce chemin est correct

export const metadata = {
  title: 'Progitek - Gestion des Plannings',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fr">
      <body className="bg-light dark:bg-dark text-gray-800 dark:text-gray-200">
        {children}
      </body>
    </html>
  );
};

export default Layout;