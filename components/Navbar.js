import utils from "@/utils/index";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex">
      <ul className="flex justify-center items-center gap-4 mx-4 my-6 flex-wrap">
        {utils.links.map((lnk) => (
          <li key={lnk.id}>
            <Link href={lnk.link} className="text-white hover:underline">
              {lnk.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-4 items-center">
        {utils.media.map((md) => (
          <Link href={md.url} className="text-white">
            <Image src={md.image} alt={md.name} className="w-auto h-7"/>
          </Link>
        ))}
      </div>
    </nav>
  );
}
