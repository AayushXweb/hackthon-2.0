function ProfileCard({ name, age, bio, image }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        width: "250px",
        textAlign: "center",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
      }}>
      <img
        src={image}
        alt={name}
        style={{ width: "100px", borderRadius: "50%" }}
      />
      <h2>{name}</h2>
      <p>
        <b>Age:</b> {age}
      </p>
      <p>{bio}</p>
    </div>
  );
}

export default ProfileCard;
