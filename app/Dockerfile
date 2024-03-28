FROM node:latest 
WORKDIR /apps
ADD . .

RUN npm install
CMD ["npm", "run", "build"]
CMD ["npm", "run", "preview"]
EXPOSE 3000
