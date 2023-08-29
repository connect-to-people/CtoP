const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      style={{
        color: isDarkTheme ? theme.colors.primary : theme.colors.secondary,
      }}
    >
      {isDarkTheme ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    </button>
  );
};

export default ThemeToggle;
