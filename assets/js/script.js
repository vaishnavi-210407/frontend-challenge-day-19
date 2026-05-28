
  const blogs = [

    {
      title:"Learn JavaScript",
      date:"20 May 2026",
      image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
      desc:"JavaScript is one of the most popular programming languages used for web development."
    },

    {
      title:"Modern UI Design",
      date:"18 May 2026",
      image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
      desc:"Modern UI design focuses on clean layouts, soft colors, and responsive user experiences."
    },

    {
      title:"React for Beginners",
      date:"15 May 2026",
      image:"https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
      desc:"React helps developers build fast and interactive user interfaces using components."
    },

    {
      title:"CSS Animation Tricks",
      date:"12 May 2026",
      image:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop",
      desc:"CSS animations make websites more interactive and visually attractive."
    }

  ];

  const blogGrid =
    document.getElementById("blogGrid");

  const searchInput =
    document.getElementById("searchInput");

  // RENDER BLOGS

  function renderBlogs(data){

    blogGrid.innerHTML = "";

    if(data.length === 0){

      blogGrid.innerHTML =
        `<div class="empty">No Blogs Found</div>`;

      return;

    }

    data.forEach(blog => {

      blogGrid.innerHTML += `

        <div class="card">

          <img src="${blog.image}">

          <div class="card-content">

            <div class="date">
              📅 ${blog.date}
            </div>

            <h2>
              ${blog.title}
            </h2>

            <div class="desc">
              ${blog.desc}
            </div>

            <button class="btn">
              Read More
            </button>

          </div>

        </div>

      `;

    });

  }

  // SEARCH BLOGS

  searchInput.addEventListener("input", () => {

    const value =
      searchInput.value.toLowerCase();

    const filteredBlogs =
      blogs.filter(blog =>
        blog.title.toLowerCase().includes(value)
      );

    renderBlogs(filteredBlogs);

  });

  // INITIAL LOAD

  renderBlogs(blogs);