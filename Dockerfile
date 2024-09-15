FROM oven/bun:latest as build

WORKDIR /usr/src/app

COPY package.json bun.lockb* ./

RUN bun install
COPY . .

RUN bun run build


# Production stage for serving the built app
FROM nginx:alpine

# Copy the built files to the Nginx HTML directory
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Copy the Nginx configuration file
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]