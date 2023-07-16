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
const viteInstall = ` npm init vite@latest ${projectName} -- --template react-ts && cd ${projectName} && npm install`
const installDeps = `cd ${projectName} && npm install -D tailwindcss postcss autoprefixer && npm install react-router-dom && rm -r src/* && git clone --depth 1 https://github.com/USKhokhar/create-react-tt_src.git && mv create-react-tt_src/* src/ && rm -r create-react-tt_src && mv ./src/tailwind.config.js ./tailwind.config.js && mv ./src/postcss.config.js ./postcss.config.js`

console.log(`Starting ${projectName} with vite, react-ts, tailwind, and routing`)

const runViteInstall = runCli(viteInstall)
if(!runViteInstall) process.exit(-1)

console.log("Attention Ladies and Gentlemen, this is your captain👨‍✈️ speaking... we are about to take off ✈")
console.log("Setting up all the dependencies...⚛ ⚒ ")

const runInstallDeps = runCli(installDeps)
if(!runInstallDeps) process.exit(-1)

console.log("We are in the air, from here, sky is the limit 🚀 ... Happy Hacking 💻 ")
console.log("run following commands to start")
// console.log(`cd ${projectName}`)
console.log(`npm run dev`)