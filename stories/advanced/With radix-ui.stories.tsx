import { Meta, StoryObj } from "@storybook/react";
import { CustomViewportComponentProps, VList } from "../../src";
import React, { forwardRef } from "react";
import { faker } from "@faker-js/faker";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import "./radix.css";

const TAGS = Array.from({ length: 1000 }).map((_, i) => ({
  id: i,
  label: faker.person.fullName(),
}));

export default {
  component: VList,
} as Meta;

const VirtualizedViewport = forwardRef<
  HTMLDivElement,
  CustomViewportComponentProps
>(({ children, attrs, width, height, scrolling }, ref) => {
  return (
    <ScrollArea.Viewport ref={ref} {...attrs} className="ScrollAreaViewport">
      <div
        style={{
          position: "relative",
          visibility: "hidden",
          width: width ?? "100%",
          height: height ?? "100%",
          pointerEvents: scrolling ? "none" : "auto",
        }}
      >
        {children}
      </div>
    </ScrollArea.Viewport>
  );
});

export const Default: StoryObj = {
  name: "With radix-ui",
  render: () => {
    return (
      <ScrollArea.Root className="ScrollAreaRoot">
        <VList
          style={{ padding: "15px 20px", width: "auto" }}
          components={{ Root: VirtualizedViewport }}
        >
          <div className="Text">Tags</div>
          {TAGS.map((tag) => (
            <div className="Tag" key={tag.id}>
              {tag.label}
            </div>
          ))}
        </VList>
        <ScrollArea.Scrollbar
          className="ScrollAreaScrollbar"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar
          className="ScrollAreaScrollbar"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="ScrollAreaCorner" />
      </ScrollArea.Root>
    );
  },
};