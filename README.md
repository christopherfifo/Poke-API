npm init -y
npm i express
npm i -D typescript
npm i -D @types/express

mandei recarregar o servidor ts

npx tsc --init

no tsconfig

descomentei o rootdir

"rootDir": "./src",  

"outDir": "./dist",  
"noImplicitAny": true,  
"strictNullChecks": true,    
"strictFunctionTypes": true,   

npx tsc --build
./dist/index.js

no packge.json

add 

    "build": "tsc --build",
    "start": "node dist/index.js"

    npm i -D nodemon

    sugestão do copilot usada
    "dev": "nodemon --watch 'src/**/*.ts' --exec \"npx ts-node\" src/index.ts"

    tutorial
    "dev": "nodemon src/index.ts"

    npm i -D ts-node

    ele mandou fazer, mas inda não fiz


    npx ts-node ./src/index.ts