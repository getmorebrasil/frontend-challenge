FROM mhart/alpine-node:14

RUN mkdir /client
WORKDIR /client

# Installing dependencies
COPY package.json yarn.lock ./
RUN yarn

# Copying source files
COPY . .

# Building app
RUN yarn build

EXPOSE 3000

# Running the app
CMD ["yarn", "dev"]
