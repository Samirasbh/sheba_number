



// -------------------------- fetch
        const jsonData = {
          'action': "ira_iban_action",
          'cardnumber_or_accound': `${cardVal}`,
        };

        // Set up options for the fetch request
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", // Set content type to JSON
          },
          body: JSON.stringify(jsonData), // Convert JSON data to a string and set it as the request body
        };

        // Make the fetch request with the provided options
        fetch("https://shepa.com/wp-admin/admin-ajax.php", options)
          .then((response) => {
            // Check if the request was successful
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            // Parse the response as JSON
            return response.json();
          })
          .then((data) => {
            // Handle the JSON data
            console.log(data);
          })
          .catch((error) => {
            // Handle any errors that occurred during the fetch
            console.error("Fetch error:", error);
          });



        //   -------------------- axios 

        axios({
          method: "post",
          url: "https://shepa.com/wp-admin/admin-ajax.php",
          data: {
            'action': "ira_iban_action",
            'cardnumber_or_accound': `${cardVal}`,
          },
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        })
          .then((r) => {
            console.log(r);
          })
          .catch((e) => {
            console.log(e);
          });