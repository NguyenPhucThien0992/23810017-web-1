const url = "https://web1-api.vercel.app/api";

async function fetchData(name, templateId, renderId) {
  await fetch(`${url}/${name}`)
    .then((res) => res.json())
    .then((data) => {
      const source = document.getElementById(templateId).innerHTML;
      const template = Handlebars.compile(source);
      const context = { data };

      const view = document.getElementById(renderId);
      view.innerHTML = template(context);
    });
}

async function fetchBlogPagination(
  name,
  currentPage = 1,
  templateId,
  renderId
) {
  await fetch(`${url}/${name}?page=${currentPage}`)
    .then((res) => res.json())
    .then((res) => {
      const source = document.getElementById(templateId).innerHTML;
      const template = Handlebars.compile(source);

      let context = {};
      // pagination
      if (res.data) {
        context.data = res.data;
        context.pageCount = res.pageCount;
        context.currentPage = currentPage;
        context.request = name;
      } else {
        context = {
          data: res,
        };
      }

      const view = document.getElementById(renderId);
      view.innerHTML = template(context);
    });
}

async function fetchBlogDetails(blogId, gotoComment = false) {
  await fetchBlogPagination("blogs/" + blogId, 1, "details-template", "blogs");

  if (gotoComment) {
    window.location.href = "#comments";
  }
}
