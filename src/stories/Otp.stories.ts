import type {Meta, StoryObj} from "@storybook/react";
import Otp from "../components/Otpinput";

const meta : Meta<typeof Otp> = {
    title: "UI/Otp",
    component: Otp,
    args: {
        length: 4,
    }
}


export default meta;

type Story = StoryObj<typeof Otp>;

export const Default: Story = {};
 
export const SixDigits : Story = {
    args : {
        length: 6

    }
}


export const Styled : Story = {
    args : {
         backgroundColor: "blue"
     }
}

export const ClassName : Story = {
    args : {
        className : "flex"
    }
}