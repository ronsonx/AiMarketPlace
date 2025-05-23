# Stage 1: Build the React application
# Using a specific Node.js version on an Alpine base for a smaller builder image
FROM node:20-alpine as builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
# This allows Docker to cache this layer. If only these files change,
# npm install won't be re-run unnecessarily.
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application for production
# This will create the 'dist' directory with all static assets
RUN npm run build

# Stage 2: Serve the application with Nginx
# Using a lightweight Nginx Alpine image for the final production image
FROM nginx:alpine

# Copy the custom Nginx configuration from your host into the container
# This will override the default Nginx config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Remove the default Nginx HTML content
# (The official Nginx image usually comes with a default index.html)
RUN rm -rf /usr/share/nginx/html/*

# Copy the built React app from the 'builder' stage into the Nginx web root
# The 'dist' folder contains all your compiled HTML, CSS, JS, and assets from 'public'
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80, which Nginx is listening on inside the container
EXPOSE 80

# Command to run Nginx when the container starts
# 'daemon off;' keeps Nginx in the foreground, essential for Docker containers
CMD ["nginx", "-g", "daemon off;"]
