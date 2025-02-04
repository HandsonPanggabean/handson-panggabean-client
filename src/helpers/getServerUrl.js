function getServerURL() {
  const localhost = "http://localhost:1997";

  let host = window.location.host;
  if (host) {
    host = host.toLowerCase();
  }

  let env;
  switch (host) {
    default:
      env = localhost;
  }
  return env;
}

export default getServerURL;
