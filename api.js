import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-1l6p.onrender.com/api",
});

export const getArticles = (topic, order, sortBy) => {
  return ncNewsApi.get(`/articles`, {
    params: {
      topic: topic,
      order: order,
      sort_by: sortBy
    },
  }).then(({ data: { articles } }) => articles)
}

export const getArticle = (id) => {
  return ncNewsApi.get(`/articles/${id}`).then(({ data: { article } }) => article);
};

export const getComments = (id) => {
  return ncNewsApi.get(`/articles/${id}/comments`).then(({ data: { comments } }) => comments);
};

export const patchVotes = (id, incVotes) => {
  return ncNewsApi.patch(`/articles/${id}`, incVotes)
}

export const postComment = (id, comment) => {
  return ncNewsApi.post(`/articles/${id}/comments`, comment).then(({ data: { comment } }) => comment);
}

export const deleteComment = (id) => {
  return ncNewsApi.delete(`/comments/${id}`)
}

export const getTopics = () => {
  return ncNewsApi.get("/topics").then(({ data: { topics } }) => topics);
}