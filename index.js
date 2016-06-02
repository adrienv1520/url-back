var url = require('url');

/**
 * FUNCTION urlBack(req)
 * Get the referer URL for a page
 *
 * @param {IncomingMessage}    req      express request object
 * @return url referer (back/previous) in the same host or false
 */
module.exports = function (req) {
  if (req.constructor.name === 'IncomingMessage') {
    var referer = req.header('Referer');
    if (!referer) return false;
    var urlBack = url.parse(referer);
    if (urlBack.hostname === req.hostname) {
      return urlBack.pathname || false;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
