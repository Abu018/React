function TabButton({ children, onClicked, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onClicked}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
