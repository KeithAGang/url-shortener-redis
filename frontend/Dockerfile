# Step 1: Use official Node.js image as a base image
FROM node:20

# Step 2: Set working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy all the project files into the container
COPY . .

# Step 6: Build the Vite app
# RUN npm run build

# Step 7: Expose the port (default for Vite)
EXPOSE 5173

# Step 8: Start the application
CMD ["npm", "run", "dev", "--host"]
