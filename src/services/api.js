export const getApi = (url = "", id = "", ...params) =>
  fetch(
    `${url}${url[url.length - 1] === "/" ? "" : "/"}${params.join("/")}/${id}`
  ).then((res) => res.json());
