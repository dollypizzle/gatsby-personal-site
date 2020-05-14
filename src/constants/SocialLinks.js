import React from "react"
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa"

export default [
  {
    id: Math.random(),
    url: "https://www.youtube.com/channel/UCMZFwxv5l-XtKi693qMJptA",
    image: <FaYoutubeSquare className="youtube-icon" />,
  },
  {
    id: Math.random(),
    url: "https://github.com/john-smilga",
    image: <FaGithubSquare className="github-icon icon" />,
  },
  {
    id: Math.random(),
    url: "https://twitter.com/john_smilga?lang=en",
    image: <FaTwitterSquare className="twitter-icon" />,
  },
]
