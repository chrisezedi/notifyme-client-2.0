FROM node:14 As builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --prod

FROM nginx:1.15.8-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist/notifyme-client-v2/ .

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

RUN chown -R nginx:nginx /var/cache/nginx /etc/nginx/

USER nginx

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'