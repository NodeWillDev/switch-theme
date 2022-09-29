const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=switch-checkbox]");
const span = document.querySelector("span[name=swicth-status]");

const lightMode = {
  bg_color: window.getComputedStyle(html).getPropertyValue("--bg-color"),
  container_color: window.getComputedStyle(html).getPropertyValue("--container-color"),
  text_color: window.getComputedStyle(html).getPropertyValue("--text-color"),
  header_color: window.getComputedStyle(html).getPropertyValue("--header-color"),
  switch_color: window.getComputedStyle(html).getPropertyValue("--switch-color"),
  switch_color_check: window.getComputedStyle(html).getPropertyValue("--switch-color-check")
}

const darktMode = {
  bg_color: "#080808",
  container_color: "#3b3b3b",
  text_color: "#eeeeee",
  header_color: "#5e3d8d",
  switch_color: "#282828",
  switch_color_check: "#e1e1e1"
}

const transformColor = (mode, status) => {
  Object.keys(mode).map(key => {
    html.style.setProperty("--" + key.replaceAll("_", "-"), mode[key]);
  });
  span.innerHTML = status;
}

checkbox.addEventListener("change", (event) => {
  event.target.checked ? transformColor(darktMode, "Dark") : transformColor(lightMode, "Light");
})