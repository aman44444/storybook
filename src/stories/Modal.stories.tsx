import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Modal from "../components/Modal/Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
};
export default meta;

type Story = StoryObj<typeof Modal>;

const Template = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <h2>Hello Modal</h2>
        <p>This is modal content.</p>
      </Modal>
    </div>
  );
};

export const Default: Story = {
  render: () => <Template />,
};
