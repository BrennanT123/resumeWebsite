function getReadme(repo) {
  return fetch(repo)
    .then((response) => response.json())
    .then((data) => {
      const content = atob(data.content);
      return content;
    })
    .catch((error) => console.log(error));
}

// getReadme(
//   `https://api.github.com/repos/BrennanT123/InventoryApplication/contents/README.md`
// );

// fetch(`https://api.github.com/repos/BrennanT123/InventoryApplication`)
//   .then((response) => response.json())
//   .then((data) => {

//     console.log(data.name);
//     return data.name;
//   })
//   .catch((error) => console.log(error));

async function getInfo(repo) {
  try {
    const response = await fetch(repo);
    const data = await response.json();
    const readMe = await getReadme(repo + "/contents/README.md");
    const title = data.name;
    return { title, readMe };
  } catch (error) {
    console.log(error);
  }
}

function githubAPILinkGenerator(url) {
  return url.replace("https://github.com/", "https://api.github.com/repos/");
}

export default function getGithubInfo(link) {
  const newLink = githubAPILinkGenerator(link);
  return getInfo(newLink);
}

// getGithubInfo(`https://github.com/BrennanT123/InventoryApplication`)
//   .then((info) => console.log(info))
//   .catch((err) => console.error(err));
