

export default function Camera({ params }) {

  return (
    <div className="section-body"
      style={{ width: "100%", height: "100%", border: "var(--test-border)" }}>
      <div className="container-fluid" style={{ height: "100%", padding: "0" }} >
        <div className="tab-content" style={{ height: "100%" }}>
          <div
            className="tab-pane fade show active d-flex flex-column"
            id="user-list"
            role="tabpanel"
            style={{ height: "100%" }}
          >
            <div className="card" style={{ height: "100%" }}>

              <div className="card-body cardBody" style={{ height: "100%" }}>
                <input type="file" name="image" accept="image/*" capture="camera" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
