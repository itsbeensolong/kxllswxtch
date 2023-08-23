import Logo from "@/components/icons/logo";
import utils from "@/utils/index";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black px-5 py-2 flex items-center justify-between">
      <Logo />
      <ul className="flex gap-5">
        {utils.links.map((lnk) => (
          <li>
            <Link href={lnk.link} className="text-white hover:underline">{lnk.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
