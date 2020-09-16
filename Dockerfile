FROM node:12.15.0-alpine

ARG build_env
ARG api_host
ARG website_url
ARG ga_tracking_id
ENV BUILD_ENVIRONMENT=$build_env
ENV NEXT_PUBLIC_API_HOST=$api_host
ENV NEXT_PUBLIC_WEBSITE_URL=$website_url
ENV NEXT_PUBLIC_GA_TRACKING_ID=$ga_tracking_id

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN yarn install --frozen-lockfile && yarn cache clean

RUN if [ "$build_env" = "staging" ] || [ "$build_env" = "production" ]; then \
      npm run build && npm prune --production; \
    else \
      npm run build; \
    fi

EXPOSE 3000

CMD [ "npm", "run", "start" ]
