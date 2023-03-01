import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>This is the Event Detail Page</h1>
      {params.eventId}
    </>
  );
};

export default EventDetailPage;
