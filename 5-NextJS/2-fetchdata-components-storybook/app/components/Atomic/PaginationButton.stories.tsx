import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import PaginationButton, { PaginationButtonProps } from "./PaginationButton";

export default {
  title: "Components/PaginationButton",
  component: PaginationButton,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<PaginationButtonProps> = (args) => (
  <PaginationButton {...args} />
);

export const Active = Template.bind({});
Active.args = {
  pageNumber: 1,
  isActive: true,
  onClick: (pageNumber: number) => console.log(`Clicked page ${pageNumber}`),
};

export const Inactive = Template.bind({});
Inactive.args = {
  pageNumber: 2,
  isActive: false,
  onClick: (pageNumber: number) => console.log(`Clicked page ${pageNumber}`),
};
