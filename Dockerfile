# Use a Node.js base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /myapp

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install --only=production && npm cache clean --force

# Copy the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 9003

# Command to run the application
CMD ["npm", "start"]
