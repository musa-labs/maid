# Maid - AI-powered Directory Cleaner

Maid is an AI-driven agent, built using the Mastra framework, designed to clean specific directories on your filesystem.
By interacting with the MCP (Mastra Communication Protocol) filesystem server, Maid intelligently identifies unnecessary
files, organizes data, and ensures your directories are optimized according to the access rules you define.

## Features

- **AI-Powered Cleaning**: Leverages the Mastra framework to analyze and manage files intelligently.
- **Customizable Access**: Clean only the directories you explicitly allow access to.
- **MCP Integration**: Utilizes the MCP filesystem server for file handling and communication.
- **Safe and Non-intrusive**: Ensures no files are removed or modified without rules-defined permissions.

## Prerequisites

Before setting up Maid, make sure you have the following installed:

- **Node.js**: Version 18 or higher
- **npm**: Package manager for Node.js
- **Mastra**: Includes core, memory, and MCP functionality
- **TypeScript**: Version 5.8 or above

## Installation

To get started with Maid, clone the repository and install the required dependencies. Run the following commands:

```bash
git clone https://github.com/musa-labs/maid.git
cd maid
npm install
```

## Usage

1. **Configure Directory Access Rules**:
   Update the configuration file (`maid.config.ts`) to specify which directories Maid can access for cleaning.

2. **Start MCP Filesystem Server**:
   Ensure the MCP filesystem server is running to enable communication with Maid. For example:
   ```bash
   npx mastra-mcp start
   ```

3. **Run Maid**:
   Execute the Maid agent using:
   ```bash
   npx tsx main.ts
   ```

4. **Observe File Cleaning**:
   Maid will apply the defined rules to clean up the specified directory, organizing or removing unnecessary files.

## Configuration

In `src/mastra/agents/index.ts` update the field on where npx sits and the directory you'd like the agent to access

```typescript
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
```

## Development

To modify or contribute to Maid, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/musa-labs/maid.git
   cd maid
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

## Technologies Used

- **Mastra Framework**:
    - `@mastra/core`: Core framework for Mastra integrations.
    - `@mastra/memory`: Memory management.
    - `@mastra/mcp`: Communication protocol for filesystem interactions.
- **TypeScript**: Ensures type safety and maintainable code.
- **Zod**: Validation of configuration and input data.

## License

Maid is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgments

Thanks to the **Mastra** framework developers for providing robust and modular tools that make programs like Maid
possible.

If you encounter an issue or have feature suggestions, feel free to open an issue on the GitHub repository. Let's keep
your directories neat and clean with Maid!