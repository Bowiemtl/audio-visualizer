async function main() {
  while (!Spicetify?.showNotification) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  // Show message on start.
  const user = await Spicetify.Platform.UserAPI.getUser();
  Spicetify.showNotification(`Hello ${user.displayName}`);

  console.log("test");
  
}

export default main;
