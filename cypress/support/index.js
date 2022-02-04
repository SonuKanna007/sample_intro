// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
//import { config } from 'cypress/types/bluebird'
import './commands'
import 'cypress-axe'
require('cypress-xpath')

// Alternatively you can use CommonJS syntax:
// require('./commands')


// const fs = require('fs-extra')
// const path = require('path')
// function getConfigurationByFile(file){
//     const pathToConfigFile = path.resolve('cypress','config',`${file}.json`)
//     return fs.readJson(pathToConfigFile)
// }
// module.exports =(on,config)=>{
//     const file=config.env.configFile||'development'
//     return getConfigurationByFile(file)
// }

module.exports = (on, config) => {
    on('task', {
      log(message) {
        console.log(message)
  
        return null
      },
      table(message) {
        console.table(message)
  
        return null
      }
    })
  }