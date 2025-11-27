let videos = [
  {
    title: "첫번째 비디오",
    rating: 5,
    comments: 2,
    createdAt: "2분전",
    views: 59,
    id: 1,
  },
  {
    title: "두번째 비디오",
    rating: 5,
    comments: 2,
    createdAt: "2분전",
    views: 1,
    id: 2,
  },
  {
    title: "세번째 비디오",
    rating: 5,
    comments: 2,
    createdAt: "2분전",
    views: 59,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "홈", videos });
};

export const watch = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `왓칭 ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];

  return res.render("edit", { pageTitle: `에딧 ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const id = req.params.id;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "업로드" });
};

export const postUpload = (req, res) => {
  const newVideo = {
    title: req.body.title,
    rating: 0,
    comments: 0,
    createdAt: "방금전",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
