import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="flexBetween max-container padding-container py-2">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={120} height={29} className="scale-150" />
        </Link>

        <ul className="hidden h-full gap-6 lg:flex lg:pt-2">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-600 font-bold flexCenter cursor-pointer pb-1.5 transition-all hover:text-orange-500  duration-300 ease-in-out z-0 hover:blur-0 hover:scale-105"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden ">
          <Button
            type="button"
            title="Contact"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>

        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </div>
    </nav>
  )
}

export default Navbar