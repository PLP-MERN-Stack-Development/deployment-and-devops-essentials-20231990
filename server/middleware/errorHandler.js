// server/middleware/errorHandler.js

function errorHandler(err, req, res, next) {
  // Log the error stack trace (for development/monitoring)
  console.error(err.stack);

  // Respond with status and message
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
  });
}

module.exports = errorHandler;
