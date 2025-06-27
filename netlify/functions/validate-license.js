exports.handler = async function(event, context) {
  const { license } = JSON.parse(event.body);
  const validLicense = "SNAP-TEST1-123456";

  if (license === validLicense) {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        valid: true,
        license: license,
        activated_at: new Date().toISOString(),
        expires: null,
        features: ["grid", "baseline", "guides", "screenshot", "export"],
      }),
    };
  } else {
    return {
      statusCode: 404,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        valid: false,
        error: "Invalid license key format.",
      }),
    };
  }
};
