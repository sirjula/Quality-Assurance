// export async function TodayDate() {
//   const now = new Date();
//   const year = now.getFullYear();
//   // const date = now.getDate();
//   return year;
// }

const apiUrl = "https://thinking-tester-contact-list.herokuapp.com/";

async function authenticateUser1({ request }) {
  try {
    const response = await request.post(apiUrl + "users/login", {
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: "user9@gmail.com",
        password: "test12345",
      },
    });

    const statusCode = response.status();
    if (statusCode !== 200) {
      const responseBody = await response.json();
      console.error(`Unexpected status code: ${statusCode}`);
      console.error("Response body:", responseBody);
      throw new Error("Authentication failed");
    }

    const responseBody = await response.json();
    console.log("Authentication successful. Response body:", responseBody);
    return responseBody.token;
  } catch (error) {
    console.error("Error during authentication:", error.message);
    throw error;
  }
}

async function createEntity(userData, accessToken, module, { request }) {
  try {
    const response = await request.post(apiUrl + module, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        sig: "Automation",
      },
      data: JSON.stringify(userData),
    });

    const statusCode = response.status();
    if (statusCode !== 201) {
      const responseBody = await response.json();
      console.error(`Unexpected status code: ${statusCode}`);
      console.error("Response body:", responseBody);
      throw new Error("Entity creation failed");
    }

    const responseBody = await response.json();
    if (responseBody && responseBody.id) {
      return responseBody.id;
    } else {
      console.error("Entity creation response did not contain an ID");
      throw new Error("Entity creation failed");
    }
  } catch (error) {
    console.error("Error during entity creation:", error.message);
    throw error;
  }
}

module.exports = { authenticateUser1, createEntity };
