import mixpanel from "mixpanel-browser";
function App() {
  mixpanel.init("055bc17e44a9affc5398d25564d8e309", {
    debug: true,
    track_pageview: true,
    persistence: "localStorage",
    ignore_dnt: true,
  });

  // Set this to a unique identifier for the user performing the event.
  mixpanel.identify("055bc17e44a9affc5398d25564d8e309");

  // Track an event. It can be anything, but in this example, we're tracking a Sign Up event.
  mixpanel.track("Sign Up", {
    "Signup Type": "Referral",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    mixpanel.track("Added to cart", {
      "Add type ": "Purchase",
    });
  };
  return (
    <>
      <form action="submit" onSubmit={handleSubmit}>
        <button>Add to cart</button>
      </form>
    </>
  );
}

export default App;
