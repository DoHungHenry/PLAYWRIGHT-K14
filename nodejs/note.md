To Run a ts file, we need 2 steps:
- compile to js file: $ tsc /filePath
- run js file: $ node

These packages support to compile and run in the same command:
1. ts-node: 
- install: $ npm i -g ts-node
- run: $ ts-node /filePath

2. nodemon:  (recommended because it support real-time tracking, it likes watching mode in UI run of playwright):
- install: $ npm i nodemon -g
- run: $ nodemon /filePath