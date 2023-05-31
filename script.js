$('#searchToggle').click(function() {
    $('#searchInputWrapper').slideToggle();
  });
  


  $(document).ready(function() {
    // Cart object and functions
    var cart = {
      items: [],
      // Your cart functions and logic
    };

    // Your existing JavaScript code

    // Click event handler for cart icon
    $('.cart-icon').on('click', function() {
      // Open cart window
      openCartWindow();
    });

    // Update cart count
    function updateCartCount() {
      var count = cart.items.length;
      $('.cart-count').text(count);
    }

    // Example: Add product to cart on card click
    $('.product-card').on('click', function() {
      var productId = $(this).data('product-id');
      cart.items.push(productId);
      updateCartCount();
    });

    // Open cart window
    function openCartWindow() {
      // Calculate total price
      var totalPrice = calculateTotalPrice();

      // Create cart window HTML
      var cartWindowHtml = '<h2>Cart</h2>';
      cartWindowHtml += '<ul>';
      for (var i = 0; i < cart.items.length; i++) {
        var productId = cart.items[i];
        var productName = getProductById(productId).name;
        var productPrice = getProductById(productId).price;
        cartWindowHtml += '<li>' + productName + ' - $' + productPrice + '</li>';
      }
      cartWindowHtml += '</ul>';
      cartWindowHtml += '<p>Total Price: $' + totalPrice + '</p>';

      // Display cart window
      alert(cartWindowHtml);
    }

    // Calculate total price
    function calculateTotalPrice() {
      var totalPrice = 0;
      for (var i = 0; i < cart.items.length; i++) {
        var productId = cart.items[i];
        var productPrice = getProductById(productId).price;
        totalPrice += productPrice;
      }
      return totalPrice;
    }

    // Example: Get product by ID
    function getProductById(productId) {
      // Replace with your logic to retrieve product details
      // based on the provided productId
      var products = [
        // Your product data
      ];
      for (var i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
          return products[i];
        }
      }
      return null;
    }
  });
  $(document).ready(function() {
    // Cart object and functions
    var cart = {
      items: [],
      // Your cart functions and logic
    };
  
    // Your existing JavaScript code
  
    // Click event handler for cart icon
    $('.cart-icon').on('click', function() {
      // Open cart window
      openCartWindow();
    });
  
    // Update cart count
    function updateCartCount() {
      var count = cart.items.length;
      $('.cart-count').text(count);
    }
  
    // Example: Add product to cart on card click
    $('.product-card').on('click', function() {
      var productId = $(this).data('product-id');
      cart.items.push(productId);
      updateCartCount();
    });
  
    // Open cart window
    function openCartWindow() {
      // Calculate total price
      var totalPrice = calculateTotalPrice();
  
      // Create cart window HTML
      var cartWindowHtml = '<h2>Cart</h2>';
      cartWindowHtml += '<ul>';
      for (var i = 0; i < cart.items.length; i++) {
        var productId = cart.items[i];
        var productName = getProductById(productId).name;
        var productPrice = getProductById(productId).price;
        cartWindowHtml += '<li>' + productName + ' - $' + productPrice + '</li>';
      }
      cartWindowHtml += '</ul>';
      cartWindowHtml += '<p>Total Price: $' + totalPrice + '</p>';
  
      // Display cart window
      alert(cartWindowHtml);
    }
  
    // Calculate total price
    function calculateTotalPrice() {
      var totalPrice = 0;
      for (var i = 0; i < cart.items.length; i++) {
        var productId = cart.items[i];
        var productPrice = getProductById(productId).price;
        totalPrice += productPrice;
      }
      return totalPrice;
    }
  
    // Example: Get product by ID
    function getProductById(productId) {
      // Replace with your logic to retrieve product details
      // based on the provided productId
      var products = [
    {
      id: 1,
      name: 'ROG Zephyrus G14',
      price: 1499.99,
      image: 'img/g14.png',
      description: 'Transcend your reality.'
    },
    {
      id: 2,
      name: 'VICTUS 16 GAMING LAPTOP (2023)',
      price: 1699.99,
      image: 'img/victus16.png',
      description: 'Unleash your true gaming potential.'
    },
    {
      id: 3,
      name: 'Omen 15 Laptop (2022)',
      price: 1299.99,
      image: 'img/omen15.png',
      description: 'Play anywhere, stay cool everywhere.'
    },
    {
      id: 4,
      name: 'GeForce RTX™ 2080 Ti',
      price: 999.99,
      image: 'img/2080ti.png',
      description: 'For small chassis and air-cooled builds.'
    },
    {
      id: 5,
      name: 'Radeon™ RX 7600',
      price: 799.99,
      image: 'img/rx7600.png',
      description: 'Optimized inside and out for lower temps.'
    },
    {
      id: 6,
      name: 'GeForce RTX™ 4060 Ti',
      price: 1199.99,
      image: 'img/rtx4060.png',
      description: 'Chart-topping thermal performance.'
    },
    {
      id: 7,
      name: 'OMEN 27u 4K Monitor',
      price: 599.99,
      image: 'img/27u.png',
      description: 'Incredible for Consoles and PCs.'
    },
    {
      id: 8,
      name: 'OMEN 27s 4K Monitor',
      price: 499.99,
      image: 'img/27s.png',
      description: 'Incredible for Consoles and PCs.'
    },
    {
      id: 9,
      name: 'OMEN 24 4K Monitor',
      price: 399.99,
      image: 'img/24.png',
      description: 'Incredible for Consoles and PCs.'
    },
    {
      id: 10,
      name: 'ROG Keris Wireless Mouse',
      price: 89.99,
      image: 'img/keris.png',
      description: 'Lightweight FPS mouse.'
    },
    {
      id: 11,
      name: 'Impact II Moonlight Mouse',
      price: 59.99,
      image: 'img/moonlight.png',
      description: 'Ambidextrous style mouse.'
    },
    {
      id: 12,
      name: 'ROG Pugio II Mouse',
      price: 79.99,
      image: 'img/pugio2.png',
      description: 'Lightweight wireless gaming mouse.'
    },
    {
      id: 13,
      name: 'ROG Strix G15DS Desktop',
      price: 1999.99,
      image: 'img/g15ds.png',
      description: 'Embrace your gaming destiny.'
    },
    {
      id: 14,
      name: 'OMEN 45L Desktop',
      price: 1599.99,
      image: 'img/omen45l.png',
      description: 'Play yourself up.'
    },
    {
      id: 15,
      name: 'StrixG10CE Desktop',
      price: 1799.99,
      image: 'img/strixg10ce.png',
      description: 'Scientifically cooled, metaphysically fire.'
    },
    {
      id: 16,
      name: 'Strix Scope PBT Keyboard',
      price: 129.99,
      image: 'img/scopepbt.png',
      description: 'Durable and stylish mechanical keyboard.'
    },
    {
      id: 17,
      name: 'RX EVA Edition Keyboard',
      price: 109.99,
      image: 'img/rxeva.png',
      description: 'EVA-inspired purple aluminum case keyboard.'
    },
    {
      id: 18,
      name: 'TKL Electro Punk Keyboard',
      price: 79.99,
      image: 'img/electropunk.png',
      description: 'Wired mechanical RGB gaming keyboard.'
    }
  ];
  
      for (var i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
          return products[i];
        }
      }
      return null;
    }
  });
