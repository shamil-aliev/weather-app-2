function Card({ children }) {
  return (
    <div
      style={{
        padding: "15px",
        marginBottom: "10px",
        border: "1px solid #ced4da",
        borderRadius: "20px",
        backgroundColor: "#e7f5ff",
        margin: "6px 12px",
      }}>
      {children}
    </div>
  );
}

export default Card;
