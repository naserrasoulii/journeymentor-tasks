import { onMounted, ref } from "vue";

type themeType = "light" | "dark";
export const useTheme = () => {
  const theme = ref<themeType>("light");

  onMounted(() => {
    const htmlTag = document.querySelector("html");
    const localStorageTheme = localStorage.getItem("theme");

    if (localStorageTheme === "light" || localStorageTheme === "dark") {
      theme.value = localStorageTheme;
      htmlTag?.classList.add(localStorageTheme);
    } else {
      htmlTag?.classList.add("light");
    }
  });

  function toggleTheme() {
    const htmlTag = document.querySelector("html");
    const newTheme: themeType = theme.value === "light" ? "dark" : "light";

    htmlTag?.classList.remove(theme.value);
    htmlTag?.classList.add(newTheme);

    localStorage.setItem("theme", newTheme);
    theme.value = newTheme;
  }

  return { theme, toggleTheme };
};
