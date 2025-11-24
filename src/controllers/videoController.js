export const trending = (req, res) => {
  res.render("home", { pageTitle: "홈" });
};

export const see = (req, res) => {
  res.render("watch");
};

export const edit = (req, res) => {
  res.render("edit");
};

export const search = (req, res) => {
  res.send("search 비디오");
};

export const upload = (req, res) => {
  res.send("upload 비디오");
};

export const deleteVideo = (req, res) => {
  res.send("delete 비디오");
};
