const dev = {
  context: 'http://localhost:3000/'
}

const prod = {
  context: 'http://http://ec2-13-58-121-144.us-east-2.compute.amazonaws.com:3000/'
}

export const environment = process.env.NODE_ENV === 'production'
  ? prod
  : dev
