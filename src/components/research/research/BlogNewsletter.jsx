import React, { useState } from "react";

const BlogNewsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupType, setPopupType] = useState("success");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email) {
      showPopup("Please enter a valid email.", "error");
      return;
    }
  
    try {
      // ✅ Send email to backend
      const response = await fetch("http://localhost:5000/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        // ✅ Store email in Firebase
        await fetch(
          "https://newsletter-form-9e6c9-default-rtdb.firebaseio.com/subscribers.json",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, timestamp: new Date().toISOString() }),
          }
        );
  
        // ✅ Store email in Google Sheets
        await fetch("https://script.google.com/macros/s/AKfycbwBY8dUyDPC9Rm-u5AXKcQQOeecpsRimGQvZJE1Mns3ahltFi-8Bp6nNzSZYXBSUCtx/exec", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
          mode: "no-cors",  // ✅ Bypass CORS issues
        });
        
  
        showPopup("Thank you for subscribing! Check your email.", "success");
        setEmail("");
      } else {
        showPopup("Failed to subscribe. Please try again.", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      showPopup("Something went wrong. Try again later.", "error");
    }
  };
  

  const showPopup = (msg, type) => {
    setMessage(msg);
    setPopupType(type);
    setIsPopupVisible(true);

    setTimeout(() => {
      setIsPopupVisible(false);
    }, 3000);
  };

  return (
    <div className="blog-newsletter">
      <div className="blog-newsletter-container">
        <div className="blog-newsletter-heading">
          <h2>Stay Informed, Stay Ahead</h2>
          <p>
            Subscribe to our newsletter for expert insights, industry updates,
            and in-depth analyses delivered straight to your inbox.
          </p>
        </div>
        <form className="blog-newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* ✅ Popup Modal */}
      {isPopupVisible && (
        <div className={`popup ${popupType}`}>
          <p>{message}</p>
        </div>
      )}

      {/* ✅ Popup Background Overlay */}
      {isPopupVisible && <div className="popup-overlay"></div>}
    </div>
  );
};

export default BlogNewsletter;
  