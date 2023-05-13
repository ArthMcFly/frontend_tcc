export const baseURL = "https://arthmcfly-opulent-palm-tree-r5v6pjpwgpxcxqpq-8080.preview.app.github.dev/api";

export const api = (page) => {
  return fetch(`${baseURL}${page}`);
};
