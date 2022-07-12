// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var ip = require('ip');

export default async function handler(req, res) {
  res.status(200).json({ name: 'John Doe', ip: ip.address() })
}
