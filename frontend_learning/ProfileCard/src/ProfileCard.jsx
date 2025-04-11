function ProfileCard(props) {
  const { image, name, bio, linkedin } = props;

  const handleConnect = () => {
    alert(`Connecting with ${name}...`);
  };

  return (
    <div className="card">
      <img src={image} alt={name} className="profile-image" />
      <h2>{name}</h2>
      <p>{bio}</p>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <br />
      <button className="connect-btn" onClick={handleConnect}>
        Connect
      </button>
    </div>
  );
}

export default ProfileCard;
