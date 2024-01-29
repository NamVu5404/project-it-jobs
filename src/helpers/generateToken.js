const characters = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

export const generateToken = () => {
  let token = "";
  for (let i = 1; i <= 20; i++) {
    token += characters[Math.round(Math.random() * characters.length)];
  }
  return token;
}