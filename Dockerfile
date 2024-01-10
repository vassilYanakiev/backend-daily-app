FROM node:14-alpine

WORKDIR /usr/app

COPY ./package.json ./

RUN npm install

COPY ./ ./

EXPOSE 4001

# CMD [ "npm", "start" ]
CMD npm run dev
