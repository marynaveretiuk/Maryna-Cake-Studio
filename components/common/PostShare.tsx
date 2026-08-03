"use client";

interface PostShareProps {
  title: string;
}

type Network = {
  name: string;
  icon: string;
  build: (url: string, title: string) => string;
};

const NETWORKS: Network[] = [
  {
    name: "X (Twitter)",
    icon: "fa-brands fa-x-twitter",
    build: (url, title) =>
      `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
  },
  {
    name: "Facebook",
    icon: "fa-brands fa-facebook",
    build: (url) => `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  },
  {
    name: "Pinterest",
    icon: "fa-brands fa-pinterest",
    build: (url, title) =>
      `https://pinterest.com/pin/create/button/?url=${url}&description=${title}`,
  },
  {
    name: "LinkedIn",
    icon: "fa-brands fa-linkedin",
    build: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  },
  {
    name: "Reddit",
    icon: "fa-brands fa-reddit",
    build: (url, title) =>
      `https://www.reddit.com/submit?url=${url}&title=${title}`,
  },
];

// Social share buttons (shared by blog posts and portfolio projects).
export default function PostShare({ title }: PostShareProps) {
  const share = (network: Network) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    window.open(
      network.build(url, text),
      "_blank",
      "noopener,noreferrer,width=600,height=500"
    );
  };

  return (
    <div className="share">
      <ul className="share-icons">
        {NETWORKS.map((network) => (
          <li key={network.name}>
            <button
              type="button"
              onClick={() => share(network)}
              aria-label={`Share on ${network.name}`}
            >
              <div className="btn-reveal">
                <span>
                  <i className={network.icon} aria-hidden="true" />
                </span>
                <span className="reveal">
                  <i className={network.icon} aria-hidden="true" />
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
