# Step 1: Build the React app using Vite
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if using yarn)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . ./

# Build the app for production using Vite
RUN npm run build

# Step 2: Serve the React app using Nginx
FROM nginx:alpine

# Copy the built app to Nginx's default HTML folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
