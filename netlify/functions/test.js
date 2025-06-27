exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "✅ SUCCESS. The function is live.",
      timestamp: new Date().toISOString(),
    }),
  };
};
