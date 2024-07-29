"use client";

import { Logo } from "@/public/icons/logo";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  CheckSquare,
  Goal,
  Menu,
  Rocket,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ThemeModeToggle } from "./theme-mode-toggle";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useState } from "react";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex place-content-between h-14 max-w-screen-2xl items-center">
        <div className="flex ">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="fill-foreground h-6 w-auto" />
          </Link>
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              {/* <NavigationMenuItem>
                <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <NavigationButtonMobile
                      icon={Filter}
                      title="Filters & Preferences"
                      description="Sorting and matching results."
                    />
                    <NavigationButtonMobile
                      icon={Map}
                      title="Map"
                      description="Using the map."
                    />
                    <NavigationButtonMobile
                      icon={Package}
                      title="Changelog"
                      description="Product news and features."
                    />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem> */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <NavigationButtonMobile
                      icon={Rocket}
                      title="About"
                      description="Learn about our company."
                      href="/company/about"
                    />
                    <NavigationButtonMobile
                      icon={Goal}
                      title="Roadmap & Milestones"
                      description="Achievements, Future plans, and goals."
                    />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/survey" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Survey
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <ThemeModeToggle variant="ghost" className="hidden md:block" />
        <Popover modal open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
          <PopoverTrigger className="block md:hidden data-[state=open]:hidden">
            <Menu />
          </PopoverTrigger>
          <PopoverTrigger className="hidden data-[state=open]:block">
            <X />
          </PopoverTrigger>
          <PopoverContent
            className="w-screen h-screen rounded-none bg-background text-foreground border-none"
            side="bottom"
            sideOffset={14}
          >
            {/* Settings */}
            <ThemeModeToggle
              variant="secondary"
              className="w-full "
              value="Theme"
            />
            <Separator className="mt-4" />

            {/* navigation */}
            <Accordion type="single" collapsible className="w-full">
              {/* Product */}
              {/* <AccordionItem value="Product">
                <AccordionTrigger className="hover:no-underline px-4">
                  Product
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                  <NavigationButtonMobile
                    icon={Filter}
                    title="Filters & Preferences"
                    description="Sorting and matching results."
                  />
                  <NavigationButtonMobile
                    icon={Map}
                    title="Map"
                    description="Using the map."
                  />
                  <Separator />
                  <NavigationButtonMobile
                    icon={Package}
                    title="Changelog"
                    description="Product news and features."
                  />
                </AccordionContent>
              </AccordionItem> */}
              {/* company */}
              <AccordionItem value="Company">
                <AccordionTrigger className="hover:no-underline px-4">
                  Company
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4" onClick={() => setIsOpen(false)}>
                  <NavigationButtonMobile
                    icon={Rocket}
                    title="About"
                    description="Learn about our company."
                    href="/company/about"
                  />
                  <NavigationButtonMobile
                    icon={Goal}
                    title="Roadmap & Milestones"
                    description="Achievements, Future plans, and goals."
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <NavigationButtonMobile
              href={"/survey"}
              icon={CheckSquare}
              title="Survey"
              description="Make Silid Better."
            />
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}

// Define a reusable component for navigation buttons
interface NavigationButtonProps {
  icon: React.ElementType; // Accepts any React component as an icon
  title: string; // Main text
  description: string; // Subtext
  href?: string | null; // Navigation URL
}

const NavigationButtonMobile: React.FC<NavigationButtonProps> = ({
  href,
  ...props
}) => {
  return (
    <a href={href ? href : " "} className="w-full">
      <Button variant="ghost" className="w-full h-14 px-2 rounded-lg">
        <div className="flex w-full gap-4 ">
          <div className="p-2 border rounded-sm">
            {/* Render the passed icon component */}
            <props.icon className="text-muted-foreground" strokeWidth={1} />
          </div>
          <div>
            <p className="font-medium text-secondary-foreground text-start">
              {props.title}
            </p>
            <p className="font-normal text-muted-foreground text-start text-wrap">
              {props.description}
            </p>
          </div>
        </div>
      </Button>
    </a>
  );
};
