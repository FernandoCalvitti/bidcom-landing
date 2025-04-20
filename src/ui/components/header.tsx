"use client";

import { Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from "./drawer";
import { paths } from "@/routes/paths";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState, useEffect } from "react";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  // Cerrar el drawer cuando cambia la ruta
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  return (
    <header className="h-[70px] w-full">
      <div className="mx-auto flex h-full max-w-[1600px] items-center justify-end px-4 py-0 sm:px-10">
        <Drawer
          direction="right"
          open={isDrawerOpen}
          onOpenChange={setIsDrawerOpen}
        >
          <DrawerTrigger className="cursor-pointer">
            <Menu className="h-6 w-6" />
          </DrawerTrigger>
          <DrawerContent className="bg-white">
            <VisuallyHidden>
              <DialogTitle />
            </VisuallyHidden>
            <DrawerHeader>
              <nav className="mt-4">
                <ul className="space-y-4">
                  {paths.map((path) => (
                    <li key={path.path}>
                      <Link
                        href={path.path}
                        className={cn(
                          "transition-colors hover:text-blue-500",
                          pathname === path.path && "text-blue-500",
                        )}
                      >
                        {path.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
