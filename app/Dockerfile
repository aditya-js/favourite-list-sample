FROM node:latest 
WORKDIR /apps
ADD . .

RUN npm install
RUN npm run build
EXPOSE 8000
CMD ["npm", "run", "preview"]
