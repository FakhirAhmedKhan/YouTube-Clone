const sidebarLinks = [
  {
    icon: "./sidebar-icon/home.svg",
    alt: "Home",
    label: "Home",
  },
  {
    icon: "./sidebar-icon/explore.svg",
    alt: "Explore",
    label: "Explore",
  },
  {
    icon: "./sidebar-icon/subscriptions.svg",
    alt: "Subscriptions",
    label: "Subscriptions",
  },
  {
    icon: "./sidebar-icon/originals.svg",
    alt: "Originals",
    label: "Originals",
  },
  {
    icon: "./sidebar-icon/youtube-music.svg",
    alt: "YouTube Music",
    label: "YouTube Music",
  },
  {
    icon: "./sidebar-icon/library.svg",
    alt: "Library",
    label: "Library",
  },
];

let sidebarHtml = "";
sidebarLinks.forEach((sidebar) => {
  sidebarHtml += `
   <div class="sidebar-link">
      <img src="${sidebar.icon}" alt="${sidebar.alt}" />
        <div>${sidebar.label}</div>
      </div>
    `;
});
document.querySelector(".sidebar").innerHTML = sidebarHtml;

const videoData = [
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
  {
    thumbnailImg: "images of thumbnail/thumbnail-1.webp",
    videoTime: "14:20",
    profilePicture: "chanel of pictures/channel-1.jpeg",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    videoAuthor: "Marques Brownlee",
    videoStats: "3.4M views · 6 months ago",
  },
];
let jsHTML = "";

videoData.forEach((video) => {
  jsHTML += `
     <div class="video-preview">
        <div class="thumbnail-row">
          <img class="thumbnail" src="${video.thumbnailImg}" />
          <div class="video-time">${video.videoTime}</div>
        </div>

        <div class="video-info-graid">
          <div class="chanel-picture">
            <img
              class="profile-picture"
              src="${video.profilePicture}"
            />
          </div>
          <div class="video-info">
            <p class="video-title">
              ${video.videoTitle}
            </p>
            <p class="video-author">${video.videoAuthor}</p>
            <p class="video-stats">${video.videoStats}</p>
          </div>
        </div>
      </div>
    `;
});

document.querySelector(".video-grid").innerHTML = jsHTML;
