exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  if (!event.body) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Missing request body" }),
    };
  }

  let license;
  try {
    ({ license } = JSON.parse(event.body));
  } catch (e) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Invalid JSON body" }),
    };
  }

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