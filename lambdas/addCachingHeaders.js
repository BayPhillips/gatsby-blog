'use strict';
exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  const response = event.Records[0].cf.response;
  const headers = response.headers;

  if (request.uri.startsWith('/static/')) {
    headers['cache-control'] = [
      {
        key: 'Cache-Control',
        value: 'public, max-age=31536000, immutable'
      }
    ];
  } else {
    headers['cache-control'] = [
      {
        key: 'Cache-Control',
        value: 'public, max-age=0, must-revalidate'
      }
    ];
  }
  
  headers['vary'] = [
    {
      key: 'Vary',
      value: 'Accept-Encoding'
    }
  ];

  callback(null, response);
};
