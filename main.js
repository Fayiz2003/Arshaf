        function sendWhatsAppMessage() {
            // Replace with the recipient's phone number, including the country code (e.g., +91 for India)
            var phoneNumber = "918113056305"; // Example: +91 9037051148

            // Predefined message
            var message = "Hello, I would like to know more about your services.";

            // Encode the message
            var encodedMessage = encodeURIComponent(message);

            // Construct the WhatsApp URL
            var url = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;

            // Redirect the user to the WhatsApp URL
            window.location.href = url;
        }

