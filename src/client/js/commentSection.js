const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");

const handleDelete = async (event) => {
  const span = event.target;
  const li = span.parentElement;
  const commentId = li.dataset.id;

  if (!commentId) return;

  const response = await fetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  });

  if (response.status === 200) {
    li.remove();
  }
};

const addComment = (text, id) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.dataset.id = id;
  newComment.className = "video__comment";

  const icon = document.createElement("i");
  icon.className = "fas fa-comment";

  const span = document.createElement("span");
  span.innerText = ` ${text}`;

  const span2 = document.createElement("span");
  span2.innerText = "❌";
  span2.style.cursor = "pointer";

  span2.addEventListener("click", handleDelete);

  newComment.appendChild(icon);
  newComment.appendChild(span);
  newComment.appendChild(span2);
  videoComments.prepend(newComment);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (response.status === 201) {
    textarea.value = "";
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}

const DeleteBtns = document.querySelectorAll(".video__comment span:last-child");

if (DeleteBtns) {
  DeleteBtns.forEach((btn) => {
    if (btn.innerText === "❌") {
      btn.style.cursor = "pointer";
      btn.addEventListener("click", handleDelete);
    }
  });
}
