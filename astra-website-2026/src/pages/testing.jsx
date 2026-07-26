import "../styles/testing.css";

const testFlights = [
  { id: 1, date: "March 30, 2026", tested: "First Test Flight with Sentinel", videoId: "4_eZP47MgGU", detailsUrl: "/test-flights/1" },
  { id: 2, date: "March 31, 2026", tested: "Comp Entry", videoId: "Y97niCa6mX0", detailsUrl: "/test-flights/2" },
  { id: 3, date: "April 11, 2026", tested: "Limit Test", videoId: "bkZWvAHjOlw", detailsUrl: "/test-flights/3" },
  {id: 4, date: "April 18 2026", tested: "No YAW", videoId: "YOUR_YOUTUBE_VIDEO_ID", detailsUrl: "/test-flights/4" },
  {id: 5, date: "April 22, 2026", tested: "AUTO Mission with No YAW and in Stabilized Mode", videoId: "YOUR_YOUTUBE_VIDEO_ID", detailsUrl: "/test-flights/5" },
  {id: 6, date: "April 25, 2026", tested: "Payload and Object Recognition Test", videoId: "YOUR_YOUTUBE_VIDEO_ID", detailsUrl: "/test-flights/6" },
  {id: 7, date: "May 2, 2026", tested: "Object Recognition's Longest Test Flight", videoId: "YOUR_YOUTUBE_VIDEO_ID", detailsUrl:"/test-flights/7"},
  {id : 8, date: "May 31, 2026", tested: "3 Consecutive Payload Test Drops", videoId: "YOUR_YOUTUBE_VIDEO_ID", detailsUrl: "/test-flights/8"},
  {id: 9, date: "June 6, 2026", tested: "Speed and Endurance Test", videoId: "YOUR_YOUTUBE_VIDEO_ID", detailsUrl: "/test-flights/9"},
];

export default function Testing() {
  return (
    <main className="test-page">
      <section className="testing-hero">
  <div className="testing-hero__grid" aria-hidden="true" />

  <p className="testing-eyebrow">
    Bronco ASTRA Testing
  </p>

  <h1>
    Test what
    <br />
    <em>We build.</em>
  </h1>

  <p className="testing-hero__copy">
    From initial system checks to full mission simulations, testing allows
    the Bronco ASTRA team to validate our aircraft, identify challenges,
    and continuously improve performance before competition.
  </p>
</section>
      <section className="content">
        <p className="testing-eyebrow">Bronco ASTRA field log</p>
        <h1>Latest Test Flights</h1>
        <p className="testing-intro">Watch the tests that turn engineering work into flight-ready systems.</p>
        <section className="video-grid">
          {testFlights.map((flight) => (
            <article className="flight-card" key={flight.id}>
              <div className="video-wrapper">
                <iframe src={`https://www.youtube.com/embed/${flight.videoId}`} title={`${flight.date} test flight`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div className="flight-info">
                <p className="flight-date">{flight.date}</p>
                <h2>{flight.tested}</h2>
                <a className="details-link" href={flight.detailsUrl}>View test details <span aria-hidden="true">→</span></a>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
