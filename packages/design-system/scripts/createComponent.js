import fs from 'fs'
import path from 'path'

// Exit if the component name is not provided as a command-line argument
if (process.argv.length < 3) {
  console.error('Please provide a component name.')
  process.exit(1)
}

const directoryPath = './src'
const componentName = process.argv[2]

// TODO: update prettier formatting

// Component file
const componentCode = `import React, { FunctionComponent } from 'react'

interface IProps {
}

const ${componentName}:FunctionComponent<IProps> = (props) => {
  return (
    <div>
      {/* Your component content goes here */}
    </div>
  );
};

export default ${componentName};
`

// Index file
const indexCode = `export { default } from './${componentName}'`

// Components index file
const existingComponents = fs.readdirSync(directoryPath).filter(file => file !== 'index.tsx')
existingComponents.push(componentName)
existingComponents.sort() // Sort components alphabetically

const componentsIndexCode = existingComponents.map(component => `export { default as ${component} } from './${component}'`).join('\n')

const componentPath = path.join(directoryPath, `${componentName}`)
if (!fs.existsSync(componentPath)) {
  fs.mkdirSync(componentPath, { recursive: true })
}

const componentFilePath = path.join(componentPath, `${componentName}.tsx`)
const indexFilePath = path.join(componentPath, 'index.tsx')
const componentsIndexFilePath = path.join(directoryPath, 'index.tsx')

// Create the component file
fs.writeFile(componentFilePath, componentCode, (err) => {
  if (err) {
    console.error('Error creating component file:', err)
  } else {
    console.log(`Component "${componentName}" created successfully at ${componentFilePath}`)
  }
})

// Create the index file
fs.writeFile(indexFilePath, indexCode, (err) => {
  if (err) {
    console.error('Error creating index file:', err)
  } else {
    console.log(`Index file created successfully at ${indexFilePath}`)
  }
})

// Update the components index file with the new component
fs.writeFile(componentsIndexFilePath, componentsIndexCode, (err) => {
  if (err) {
    console.error('Error updating index file:', err)
  } else {
    console.log(`Index file updated successfully at ${indexFilePath}`)
  }
})