"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="wrap nav-row">
        <Link href="/" className="brand">
          <span className="name">
            VISION<span className="x">XAI</span>
          </span>
          <small>— MIND TO MEDIA —</small>
        </Link>
        <nav className="links">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Link href="/contact" className="btn nav-cta">
            Let&apos;s Connect →
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="menu-toggle"
                aria-label="Toggle menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="brand">
                  VISION<span className="x">XAI</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mobile-nav-links">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={pathname === link.href ? "active" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <SheetFooter>
                <Link
                  href="/contact"
                  className="btn btn-primary"
                  onClick={() => setOpen(false)}
                >
                  Let&apos;s Connect →
                </Link>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
