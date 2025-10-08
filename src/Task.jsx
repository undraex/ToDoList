function Task({ index, item, handleToggle }) {
  return (
    <div style={{ display: "flex" }}>
      <input
        className="inputText"
        type="checkbox"
        onChange={() => handleToggle(item.text)}
        checked={item.done}
      />
      <div
        style={{ textDecoration: item.done ? "line-through" : "" }}
        key={index}
      >
        {item.text}
      </div>
    </div>
  );
}

export default Task;
