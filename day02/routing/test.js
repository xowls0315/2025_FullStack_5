const getCandy = () => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success("사탕🎃");
    }, 5000);
  });
};

const getChocolate = () => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success("초콜릿🍫");
    }, 3000);
  });
};

const example = () => {
  console.log("사탕 대기중");
  getCandy()
    .then((v) => console.log(v))
    .then((v) => console.log("사탕 끝!"));
};

const example1 = async () => {
  console.log("사탕 대기중");
  console.log("초콜릿 대기중");
  console.log(await getCandy());
  console.log(await getChocolate());
  console.log("사탕 끝!!");
  console.log("초콜릿 끝!!");
};

// example();
// example1();

const getProduct = () => {
  // async/awiat로 바꾸기!
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const getProduct1 = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  console.log(data);
};

// getProduct();
getProduct1();
