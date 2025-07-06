function getReadme(repo) {
  fetch(repo)
    .then((response) => response.json())
    .then((data) => {
      const content = atob(data.content);
      console.log(content);
      return content;
    })
    .catch((error) => console.log(error));
}

getReadme(
  `https://api.github.com/repos/BrennanT123/InventoryApplication/contents/README.md`
);

fetch(`https://api.github.com/repos/BrennanT123/InventoryApplication`)
  .then((response) => response.json())
  .then((data) => {

    console.log(data.name);
    return data.name;
  })
  .catch((error) => console.log(error));


function githubAPILinkGenerator(url) {
  return url.replace("https://github.com/", "https://api.github.com/repos/");
}
