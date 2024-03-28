FROM node:latest 
WORKDIR /apps
ADD . .

RUN npm install
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview"]
