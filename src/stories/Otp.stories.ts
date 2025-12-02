import type {Meta, StoryObj} from "@storybook/react";
import Otp from "../components/Otp";

const meta : Meta<typeof Otp> = {
    component : Otp,
    title : "Ui/Otp",
}

export default  meta;

export const FirstComponent : StoryObj<typeof Otp> = {
    args : {
         
    }
}