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
  return ncNewsApi.get(`/articles/${id}`).then(({ data: { article } }) => article)
  .catch(function (error) {
    if (error.response) {
      console.log(error.response)
      return `${error.response.status}: ${error.response.data.msg}`
     }
  });
}

export const getComments = (id) => {
  return ncNewsApi.get(`/articles/${id}/comments`).then(({ data: { comments } }) => comments);
};

export const patchArticleVotes = (id, incVotes) => {
  return ncNewsApi.patch(`/articles/${id}`, incVotes)
}

export const patchCommentVotes = (id, incVotes) => {
  return ncNewsApi.patch(`/comments/${id}`, incVotes).then(({ data: { comment } }) => comment)
}

export const postComment = (id, comment) => {
  return ncNewsApi.post(`/articles/${id}/comments`, comment).then(({ data: { comment } }) => comment);
}

export const deleteComment = (id) => {
  return ncNewsApi.delete(`/comments/${id}`)
}

export const getTopics = () => {
  return ncNewsApi.get("/topics").then(({ data: { topics } }) => topics)
}