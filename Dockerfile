# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 to the host
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
