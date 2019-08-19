const getFromCtx = ctx => {
  const { 
    req: {
      headers: {
        'x-forwarded-host': host = '',
        'x-forwarded-proto': proto = '',
      } = {},
    } = {},
  } = ctx;
  return proto && host ? `${proto}://${host}` : '';
}

module.exports = {
  getFromCtx,
}