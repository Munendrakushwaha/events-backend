# backend-training

<h4>1. Update Package Lists: </h4>

   - sudo apt update <br/>
   This command updates the local database of available packages and their versions from the repositories.

<h4>2. Install Curl:</h4>

- sudo apt install curl <br/>
  Curl is a command-line tool used to transfer data to or from a server. It's used here to download the script for setting up Node.js.

<h4>3. Download Node.js Setup Script:</h4>

- sudo apt install
- curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - <br/>
  This command uses curl to retrieve the setup script for Node.js LTS version from the NodeSource repository. The -fsSL flags tell curl to fail silently on errors, follow redirects, and show progress in a user-friendly way. The script is then executed using sudo -E bash - to set up the repository for Node.js.

<h4>4. Install Node.js and npm:</h4>

- sudo apt install nodejs<br/>
  After running the setup script, this command installs Node.js and npm (Node Package Manager). Node.js is the runtime environment for executing JavaScript code, and npm is a package manager for Node.js modules and libraries.

<h4>5. Verify Installation:</h4>

- node -v<br/>
   This command checks the installed Node.js version and displays it in the terminal.
- npm -v<br/>
   Similarly, this command checks the installed npm version and displays it in the terminal.
