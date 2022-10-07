FROM node:17-alpine3.12

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4400

CMD ["ng", "run", "morgan-ui:storybook"]
