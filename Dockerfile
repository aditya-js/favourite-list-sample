FROM node:latest 
WRKDIR /apps
ADD ./app/ .

RUN npm install
CMD ["npm", "run", "build"]
