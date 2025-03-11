import { Mastra } from "@mastra/core";

import { CleanAgent } from "./agents";

export const mastra = new Mastra({
    agents: { CleanAgent },
});
