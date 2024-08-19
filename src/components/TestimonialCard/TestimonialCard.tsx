import "./TestimonialCard.scss";

const TestimonialCard = ({
  firstName,
  lastName,
  userName,
  avatarURL,
  description,
}: {
  firstName: string;
  lastName: string;
  userName: string;
  avatarURL: string;
  description: string;
}) => {
  return (
    <div className="testimonial-card">
      <div className="header">
        <img className="header-first" src={avatarURL} alt="Avatar" />
        <div className="header-second">
          <div className="name">{`${firstName} ${lastName}`}</div>
          <div className="user-name">{`@${userName}`}</div>
        </div>
      </div>
      <div className="description">{description}</div>
    </div>
  );
};

export default TestimonialCard;
