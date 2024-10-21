# Qizapp
# step-1 install packages and dependencies
npm init
npm install ( Version 9.6.7)
npm install express (express@4.21.1)
npm i --save-dev @types/express
npm install morgan helmet cors
npm install --save-dev @types/morgan @types/helmet @types/cors
npm install -g typescript( Version 5.6.3)
tsc --init 
npm i --save-dev @types/node
npm i -D @types/node
npm install sequelize sequelize-typescript mysql2
# to rebuild and run the file
npm install nodemon --save-dev
npm install ts-node typescript --save-dev
# to get sequelize-automatically

npm install mysql2
npx sequelize-auto -o "./src/models" -d quiz_app -h 127.0.0.1 -u root -p 3306 -x Mysql123 -e mysql --typescript   

# JWT 
npm install express jsonwebtoken bcryptjs prisma @prisma/client morgan helmet cors dotenv
