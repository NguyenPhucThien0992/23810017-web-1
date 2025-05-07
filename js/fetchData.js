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

async function fetchBlogDetails(blogId, gotoComment = false, cb) {
  await fetchBlogPagination("blogs/" + blogId, 1, "details-template", "blogs");

  cb();
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

async function verifyToken(token) {
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

async function postComment({ token, ...payload }) {
  return await fetch(`${userUrl}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application.json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
}

function login(event) {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  getAuthenticate(username, password)
    .then((token) => {
      localStorage.setItem("token", token);
      document.getElementsByClassName("btn-close")[0].click();
      displayControl();
    })
    .catch((err) => {
      document.getElementById("errorMessage").innerHTML = err;
      displayControl(false);
    });
}

function displayControl(isLogin = true) {
  let linkLogin = document.getElementsByClassName("linkLogin");
  let linkLogout = document.getElementsByClassName("linkLogout");

  for (let i = 0; i < linkLogin.length; i++) {
    linkLogin[i].style.display = isLogin ? "none" : "block";
    linkLogout[i].style.display = isLogin ? "block" : "none";
  }
}

async function verify() {
  try {
    let token = localStorage.getItem("token");
    if (token) {
      let response = await verifyToken(token);
      if (response.status == 200) {
        return true;
      }
    }
  } catch (err) {
    return false;
  }
  return false;
}

async function checkLogin() {
  let isLogin = await verify();
  displayControl(isLogin);
}

function logout() {
  localStorage.clear("token");
  displayControl(false);
}

// username: web1
// password: W3b1@Project
