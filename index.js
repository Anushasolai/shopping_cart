const products = [
  {
    id: 1,
    image: "images/Airpods_max.jpeg",
    title: "Airpodsmax",
    price: "$150",
    category: "airpods",
    rating: 3.0,
  },
  {
    id: 2,
    image: "images/Airpods_pro_2.jpg",
    title: "Airpodspro2",
    price: "$120",
    category: "airpods",
    rating: 2.3,
  },
  {
    id: 3,
    image: "images/AirPods_pro.jpg",
    title: "AirPodspro",
    price: "$180",
    category: "airpods",
    rating: 3.2,
  },
  {
    id: 4,
    image: "images/airpods-max-hero-select-202011_FMT_WHH.jpeg",
    title: "AirPodsprohero",
    price: "$160",
    category: "airpods",
    rating: 4.3,
  },
  {
    id: 5,
    image: "images/TSC_ca.jpeg",
    title: "TSC",
    price: "$600",
    category: "laptops",
    rating: 4.1,
  },
  {
    id: 6,
    image: "images/Apple_Airpods_Max.jpg",
    title: "AppleAirpodsMax",
    price: "$140",
    category: "airpods",
    rating: 2.7,
  },
  {
    id: 7,
    image: "images/Apple_updates_13_inch_macbook.jpeg",
    title: "Apple macbook",
    price: "$700",
    category: "laptops",
    rating: 3.7,
  },
  {
    id: 8,
    image: "images/cannon_250.jpg",
    title: "cannon250",
    price: "$150",
    category: "cameras",
    rating: 4.1,
  },
  {
    id: 9,
    image: "images/Dell_ XPS _13_Plus_Laptop.jpeg ",
    title: "Delllatitude3420",
    price: "$800",
    category: "laptops",
    rating: 2.1,
  },
  {
    id: 10,
    image: "images/iphone_15_pro.jpg",
    title: "iphone15pro",
    price: "$250",
    category: "mobiles",
    rating: 4.3,
  },
  {
    id: 11,
    image: "images/kamera-mirrorless-full-frame-panasonic-lumix-s5_03.jpg",
    title: "Kameral umixs5",
    price: "$300",
    category: "cameras",
    rating: 2.1,
  },
  {
    id: 12,
    image: "images/Nikon_D750_DSLR_Camera.jpeg",
    title: "NikonD750DSLR",
    price: "$450",
    category: "cameras",
    rating: 3.7,
  },
  {
    id: 13,
    image: "images/Panasonic_lumix_s5.jpg",
    title: "Panasoniclimixs5",
    price: "$350",
    category: "cameras",
    rating: 4.5,
  },
  {
    id: 14,
    image: "images/realme_13_pro.jpg",
    title: "realme13pro",
    price: "$150",
    category: "mobiles",
    rating: 3.4,
  },
  {
    id: 15,
    image: "images/samsung.jpeg",
    title: "samsungfoldablephone",
    price: "$250",
    category: "mobiles",
    rating: 5.0,
  },
  {
    id: 16,
    image: "images/samsung_s32_5g.jpg",
    title: "samsungs325g",
    price: "$200",
    category: "mobiles",
    rating: 4.7,
  },
  {
    id: 17,
    image: "images/vivo_s12_pro.jpg",
    title: "vivos12pro",
    price: "$250",
    category: "mobiles",
    rating: 3.6,
  },
  {
    id: 18,
    image: "images/assus.jpeg",
    title: "Assus Vivobook",
    price: "$750",
    category: "laptops",
    rating: 4.7,
  },
  {
    id: 19,
    image: "images/HP_lattitude_290.jpeg",
    title: "HP lattitude 290",
    price: "$850",
    category: "laptops",
    rating: 3.9,
  },
  {
    id: 20,
    image: "images/Apple_watch_15.jpeg",
    title: "Apple watch 15",
    price: "$350",
    category: "watches",
    rating: 1.9,
  },
  {
    id: 21,
    image: "images/silver_steeel_metalic_watch.jpeg",
    title: "silver metalic watch",
    price: "$470",
    category: "watches",
    rating: 4.7,
  },
  {
    id: 22,
    image: "images/Black_metalic_watch.jpeg",
    title: "Black metalic watch",
    price: "$180",
    category: "watches",
    rating: 3.9,
  },
  {
    id: 23,
    image: "images/FireBoult_230.jpeg",
    title: "FireBoult 230",
    price: "$250",
    category: "watches",
    rating: 4.3,
  },
  {
    id: 24,
    image: "images/Gold_melatalic_watch.jpeg",
    title: "Gold melatalic watch",
    price: "$150",
    category: "watches",
    rating: 1,
  },
  {
    id: 25,
    image: "images/Leica_camera.jpeg",
    title: "LeicaCamera",
    price: "$550",
    category: "cameras",
    rating: 2.1,
  },
];
document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const searchInput = document.getElementById("search");
  const categoryButtons = document.querySelectorAll(".category-btn");
  const homeButton = document.getElementById("home");

  let selectedCategory = "";
  const renderProducts = (filteredProducts) => {
    productList.innerHTML = "";
    
    filteredProducts.forEach((product) => {
      productList.innerHTML += `
          <div class="product-card">
            <img src="${product.image}" alt="${product.title}">
            <div class="product-title">${product.title}</div>
            <div class="product-title">${product.price}</div>
            <div class="rating" data-id="${product.id}">
              ${[1, 2, 3, 4, 5]
                .map(
                  (i) => `
                <span class="star" data-value="${i}">&#9733;</span>
              `
                )
                 .join("")
              }
            </div>
            <button class="add-cart">Add to Cart</button>
          </div>
        `;
    });

    if (filteredProducts.length === 0) {
      productList.innerHTML = '<p class="not-found-msg">Product not found</p>';
      return;
    }
    
  const stars = document.querySelectorAll(".star");
    stars.forEach((star) => {
      star.addEventListener("click", handleRating);
    });
    updateRatings();
   };

  const handleRating = (event) => {
    const star = event.target;
    const ratingValue = parseInt(star.getAttribute("data-value"));
    const ratingContainer = star.closest(".rating");
    const productId = parseInt(ratingContainer.getAttribute("data-id"));
    const product = products.find((p) => p.id === productId);
    if (product) {
      product.rating = ratingValue;
      updateRatings();
    }
  };

  const updateRatings = () => {
    products.forEach((product) => {
      const ratingContainer = document.querySelector(
        `.rating[data-id="${product.id}"]`
      );
      if (ratingContainer) {
        const stars = ratingContainer.querySelectorAll(".star");
        stars.forEach((star) => {
          const value = parseInt(star.getAttribute("data-value"));
          if (value <= product.rating) {
            star.classList.add("selected");
          } else {
            star.classList.remove("selected");
          }
        });
      }
    });
  };
  

  const filterProducts = (searchTerm, category) => {
    let filteredProducts = products;
    if (category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }
    if (searchTerm) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    renderProducts(filteredProducts);
  };


  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value;
    filterProducts(searchTerm, selectedCategory);
  });

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedCategory = button.getAttribute("data-category");
      filterProducts(searchInput.value, selectedCategory);
    });
  });

  homeButton.addEventListener("click", () => {
    selectedCategory = "";
    filterProducts(searchInput.value, selectedCategory);
  });


  renderProducts(products);
 });
