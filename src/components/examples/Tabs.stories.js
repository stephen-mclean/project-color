import React from "react";
import { storiesOf } from "@storybook/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

storiesOf("Examples", module).add("Tabs", () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  );
});
