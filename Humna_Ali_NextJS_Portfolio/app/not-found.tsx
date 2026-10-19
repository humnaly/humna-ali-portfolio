export default function NotFound() {
  return (
    <main className="ha-main">
      <section className="ha-contact ha-wrap" style={{ marginTop: "12vh", marginBottom: "12vh" }}>
        <p className="ha-label">404 / Page Not Found</p>
        <h1>That Page Could Not Be Found.</h1>
        <p className="ha-lead">The Page You Requested Is Not Available.</p>
        <div className="wp-block-buttons" style={{ justifyContent: "center" }}>
          <div className="wp-block-button"><a className="wp-block-button__link" href="/">Return To Home ↗</a></div>
        </div>
      </section>
    </main>
  );
}
