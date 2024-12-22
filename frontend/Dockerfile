# Use Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json
COPY package.json ./

# Install dependencies
RUN npm install
RUN npm install -D tailwindcss postcss autoprefixer
RUN npx tailwindcss init

# Copy the entire frontend source code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
