//const { default: axios } = require("axios");

module.exports = async function (req, next) {
  const productsNames = [
    {
      key: "eggs",
      name: "Eggs",
      image: "images/eggs.webp"
    },
    {
      key: "milk",
      name: "Milk",
      image: "images/milk.jpg"
    },
    {
      key: "bread",
      name: "Bread",
      image: "images/bread.webp"
    },
    {
      key: "rice",
      name: "Rice",
      image: "images/rice.jpg"
    },
    {
      key: "steak",
      name: "Steak",
      image: "images/steak.jpg"
    },
    {
      key: "butter",
      name: "Butter",
      image: "images/butter.jpg"
    },
    {
      key: "oj",
      name: "Orange Juice",
      image: "images/oj.jpg"
    },
  ];

  const BASE_URL = "https://grocerybear.com/getitems";

  if (req.session && !req.session.products) {
    const response = await Promise.all(
      productsNames.map(({ key }) =>
        axios.post(
          BASE_URL,
          {
            city: "DC",
            product: key,
            num_days: 1,
          },
          {
            headers: {
              "API-KEY": process.env.GROCERYBEAR_KEY,
            },
          }
        )
      )
    ).catch((err) => console.log(err, "Did not get products"));

    const products = response.map(({ data }, i) => {
      const { title, price } = data[0];

      return {
        description: title,
        price,
        name: productsNames[i].name,
        id: productsNames[i].key,
        image: productsNames[i].image,
      };
    });

    req.session.products = products;
  }

  next();
};
