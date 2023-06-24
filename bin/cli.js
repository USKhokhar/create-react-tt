#!/usr/bin/env node

import { execSync } from "child_process"

const runCli = (command) => {
    try{
        execSync(`${command}`, {stdio: "inherit"})
    } catch (err) {
        console.log(`Opps! Something went wrong with ${command}`, err)
        return false
    }

    return true
}

const projectName = process.argv[2]
const gitCommand = `git clone --depth 1 https://github.com/USKhokhar/create-react-tt.git ${projectName}`
const installDeps = `cd ${projectName} && npm install`

console.log(`Starting ${projectName} with vite, react-ts, tailwind, and routing`)

const runGitCommand = runCli(gitCommand)
if(!runGitCommand) process.exit(-1)

console.log("Attention Ladies and Gentlemen, this is your captain👨‍✈️ speaking... we are about to take off ✈")
console.log("Setting up all the dependencies...⚛ ⚒ ")

const runInstallDeps = runCli(installDeps)
if(!runInstallDeps) process.exit(-1)

console.log("We are in the air, from here, sky is the limit 🚀 ... Happy Hacking 💻 ")
console.log("run following commands to start")
console.log(`cd ${projectName}`)
console.log(`npm run dev`)