import React from "react";
function NoPage() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
        }}
      >
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          404 Page Not Found!
        </h1>
      </div>
    </>
  );
}

export default NoPage;
