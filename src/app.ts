import lineNotify from './line-notify'

const TOKEN = "<API TOKEN KEY>"

const message = `
TITLE: SAYHI
NAME: ADMIN
DATE: 2022-01-01
`;

lineNotify(message, TOKEN)