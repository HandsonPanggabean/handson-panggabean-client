function getServerURL() {
  const localhost = process.env.REACT_APP_DEVELOPMENT_API;
  const production = process.env.REACT_APP_PRODUCTION_API;

  let host = window.location.host;
  if (host) {
    host = host.toLowerCase();
  }

  let env;
  switch (host) {
    case "handson-panggabean-projects.firebaseapp.com":
      env = production;
      break;
    default:
      env = localhost;
  }
  return env;
}

export default getServerURL;
