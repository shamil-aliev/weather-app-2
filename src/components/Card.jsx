function Card({ children }) {
  return (
    <div
      style={{
        padding: "5px",
        marginBottom: "10px",
        border: "2px solid black",
        borderRadius: "20px",
        backgroundColor: "#edf6f9",
        margin: "6px 12px",
      }}>
      {children}
    </div>
  );
}

export default Card;
