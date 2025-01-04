export default function ContactPage() {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "1rem", backgroundColor: "white" }}>
        <div style={{ width: "100%", maxWidth: "400px", textAlign: "center" }}>
          <div style={{ marginBottom: "2rem" }}>
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1a237e" }}>
              Get answers to all your questions.
            </h1>
            <p style={{ fontSize: "1rem", color: "#6b7280", lineHeight: "1.5" }}>
              Problems trying to resolve the conflict between the two major realms of Classical physics:
            </p>
          </div>
  
          <button 
            style={{
              width: "100%",
              backgroundColor: "#29B6F6",
              color: "white",
              padding: "1rem",
              fontSize: "1rem",
              fontWeight: "500",
              border: "none",
              cursor: "pointer",
              borderRadius: "0.375rem",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#0288D1"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#29B6F6"}
          >
            CONTACT OUR COMPANY
          </button>
  
          <div style={{ marginTop: "3rem", display: "flex", justifyContent: "center", gap: "1.5rem" }}>
            <a href="#" style={{ color: "#6b7280", textDecoration: "none" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8.47V9.5C8.6 9.36 5.17 7.66 3 4.44 3 4.44-1 10 5 12.1c-.9.4-1.95.5-3.1.2a4.5 4.5 0 004.19 3.11A9 9 0 011 19c2.8 1.73 6.1 2.75 9.62 2.64A19 19 0 0023 3z" />
              </svg>
            </a>
            <a href="#" style={{ color: "#6b7280", textDecoration: "none" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 3H5.636C4.734 3 4 3.734 4 4.636v14.728C4 20.266 4.734 21 5.636 21h12.728c.902 0 1.636-.734 1.636-1.636V4.636C20 3.734 19.266 3 18.364 3zM16 8.818c-.531 0-1.04-.21-1.414-.586A1.994 1.994 0 0114 7c0-.531.21-1.04.586-1.414A1.994 1.994 0 0116 5c.531 0 1.04.21 1.414.586A1.994 1.994 0 0118 7c0 .531-.21 1.04-.586 1.414A1.994 1.994 0 0116 8.818zM7 17.909V8.182l6 4.864-6 4.864z" />
              </svg>
            </a>
            <a href="#" style={{ color: "#6b7280", textDecoration: "none" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.94 4.06A10.91 10.91 0 0112 2C7.09 2 2.64 5.64 1.06 10.44A10.91 10.91 0 0112 22c4.91 0 9.36-3.64 10.94-8.44A10.91 10.91 0 0120.94 4.06zM12 15.36l-3.6-2.58L12 10.2l3.6 2.58L12 15.36z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }
  