export default function swDev() {
  const url = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(url).then((response) => {
    console.log("res- ", response);
  });
}
