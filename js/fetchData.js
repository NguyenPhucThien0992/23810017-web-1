const url = "https://web1-api.vercel.app/api";
const userUrl = "https://web1-api.vercel.app/users";

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

async function getAuthenticate(username, password) {
  let res = await fetch(`${userUrl}/authenticate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application.json",
    },
    body: JSON.stringify({ username, password }),
  });

  let result = await res.json();

  if (res.status == 200) {
    return result.token;
  }

  throw new Error(result.message);
}

async function sendMail(body, token) {
  let res = await fetch(`${userUrl}/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application.json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  let result = await res.json();

  if (res.status == 200) {
    return result;
  }

  throw new Error(result.message);
}

async function verify(token) {
  return await fetch(`${userUrl}/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application.json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ token }),
  });
}

// username: web1
// password: W3b1@Project
