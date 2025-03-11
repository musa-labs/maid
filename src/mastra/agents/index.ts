import {Agent} from "@mastra/core/agent";
import {openai} from "@ai-sdk/openai";
import {MastraMCPClient} from "@mastra/mcp";


const filesystem = new MastraMCPClient({
    name: "file system",
    server: {
        command : "/Users/<User>/.nvm/versions/node/v20.9.0/bin/npx",
        args : ["-y",
            "@modelcontextprotocol/server-filesystem",
            "<Your Document folder here>"
        ],
    },
});


// Create a Mastra Agent
export const CleanAgent = new Agent({
    name: "Cleaning agent",
    instructions:
        "You are able to fetch file system data, when requested by the user. You're also able to move files to other folders.When asked, your to reorganize the Documents folder.",
    model: openai("gpt-4o-mini"),
});

try {
    // Connect to the MCP server
    await filesystem.connect();


    const tools = await filesystem.tools();


    // Use the agent with the MCP tools
    const response = await CleanAgent.stream(
        "Hello! Could you please move any files that are not directories into a directory you think fits? If a directory has not be created please create that folder. If you have questions please let me know.",
        {
            toolsets: {
                filesystem: tools,
            },
        },
    );
    for await (const part of response.fullStream) {
        switch (part.type) {
            case "error":
                console.error(part.error);
                break;
            case "text-delta":
                process.stdout.write(part.textDelta);
                break;
            case "tool-call":
                console.info(`\n-> Tool call: ${part.toolName}\n`);
        }
    }
} finally {
    // Always disconnect when done
    await filesystem.disconnect();
}
