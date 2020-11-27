const APIcontroller = (function () {
  const clientId = "";
  const clientSecret = "";

  //private methods
  const _getToken = async () => {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorizaton: "Basic" + btoa(clientId + ":" + clientSecret),
      },
      body: "grant-type=client_credentials",
    });

    const data = await response.json();
    return data.access_token;
  };
})();
