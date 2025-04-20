import type { Meta, StoryObj } from "@storybook/react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "../../ui/components/drawer";
import { useState } from "react";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog";
import { paths } from "@/routes/paths";

const meta: Meta<typeof Drawer> = {
  title: "UI/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

// Wrapper component para manejar el estado del drawer
const DrawerDemo = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
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
                    <p>{path.name}</p>
                  </li>
                ))}
              </ul>
            </nav>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

// Wrapper component para el drawer que sale de abajo
const BottomDrawerDemo = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
      <Drawer
        direction="bottom"
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
                    <p>{path.name}</p>
                  </li>
                ))}
              </ul>
            </nav>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export const Default: Story = {
  render: () => <DrawerDemo />,
};

export const Bottom: Story = {
  render: () => <BottomDrawerDemo />,
};
