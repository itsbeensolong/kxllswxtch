import utils from "@/utils/index";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex">
      <ul className="flex justify-center items-center gap-4 mx-4 my-6 flex-wrap">
        {utils.links.map((lnk) => (
          <li key={lnk.id}>
            <Link href={lnk.link} className="text-white hover:underline">{lnk.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
