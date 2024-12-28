# CLI for generate password

A simple CLI tool that generates random passwords with configurable character types (letters, numbers, symbols) and lengths. It prompts you for the desired composition, assembles a random string accordingly, and outputs a securely mixed password.

- **[Node.js](https://nodejs.org/)**  
  Provides the JavaScript runtime environment to execute the CLI.

- **[Inquirer](https://github.com/SBoudrias/Inquirer.js)**  
  Handles interactive command-line prompts, allowing you to specify the composition of the password.

- **[Yargs](https://github.com/yargs/yargs)**  
  Used for parsing command-line arguments and setting up CLI commands (if applicable).
  
# Starting project :

To install the CLI globally from GitHub, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/password-generator-cli.git
    cd password-generator-cli
    ```

2. **Install the dependencies**:

    ```bash
    npm install
    ```

3. **Link the CLI globally**:

    ```bash
    npm install -g .
    ```

This will make the `pw` command (or whichever command is defined) available globally on your system.

---

## Usage

Once installed, you can use the CLI to generate a new password by running in terminal:

```bash
pw gen