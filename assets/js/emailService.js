document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const contact = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Send email using EmailJS
    emailjs.send("service_f7hsffm", "template_gkjrbw8", {
      from_name: name,
      from_contact: contact,
      from_subject: subject,
      from_email: email,
      message: message
    }).then(function(response) {
      console.log("Email sent!", response);
      alert("Email sent successfully!");
    }, function(error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again later.");
    });
  
    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });