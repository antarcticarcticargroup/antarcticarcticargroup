// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-workshops",
          title: "workshops",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/workshops/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications related to polar atmospheric rivers, produced within the scope of AAARG! and involving its contributors, listed by category in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-thank-you",
        
          title: "thank you",
        
        description: "thank you for attending the workshop!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/thank-you/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-the-aaarg-website-is-on",
          title: 'The AAARG! website is on!',
          description: "",
          section: "News",},{id: "projects-victoire-buffet",
          title: 'Victoire Buffet',
          description: "PhD Student",
          section: "Projects",handler: () => {
              window.location.href = "/projects/victoire_buffet/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6E%74%61%72%63%74%69%63%61%72%63%74%69%63%61%72%67%72%6F%75%70@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
