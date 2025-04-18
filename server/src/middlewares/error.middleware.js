const ErrorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode == 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    message: err?.message,
    errName: err?.name,
    // stack: err.stack,
  });
};

export default ErrorHandler;
