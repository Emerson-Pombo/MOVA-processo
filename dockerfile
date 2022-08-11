
FROM cypress/browsers:latest

RUN mkdir /cypress-project

WORKDIR /cypress-project

COPY ./package.json .
COPY ./cypress.config.js . 
COPY ./.cypress-cucumber-preprocessorrc.json .
COPY ./cypress ./cypress

RUN yarn

ENTRYPOINT ["yarn", "cypress", "run"]

CMD [""]