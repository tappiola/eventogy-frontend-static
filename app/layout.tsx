import ActiveLink from "./ui/ActiveLink";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import Header from "./ui/Header";

export const metadata = {
  title: "Eventogy - Events",
  description: "",
};

const MENU_CONFIG = [
  { href: "/", label: "Events", icon: "pi-calendar" },
  {
    href: "/templates",
    label: "Templates",
    icon: "pi-clone",
  },
  { href: "/archive", label: "Archive", icon: "pi-database" },
];

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 bg-gray-300">
        <header>
          <Header />
          <h1 className="px-7 py-3 m-0 bg-gray-100">Event Hub</h1>
        </header>
        <main>
          <ul className="flex pt-3 px-7 gap-3">
            {MENU_CONFIG.map(({ href, label, icon }, i) => (
              <li key={i} className="list-none px-1 h-full">
                <ActiveLink href={href} icon={icon}>
                  {label}
                </ActiveLink>
              </li>
            ))}
          </ul>
          {children}
        </main>
      </body>
    </html>
  );
}
