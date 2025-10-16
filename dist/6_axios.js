var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const url = "https://sn23pxrfcwxnb3k36jeqincm3u0qqivm.lambda-url.us-east-1.on.aws/";
        // Request body (payload)
        const payload = {
            "action": "list_associated_organizations",
            "token": "eyJraWQiOiJQNHRuUWFjUnRQMlNKTkNyZk1wQnNCc29cL0IrWmkwZkpYOGFZVDN0REZ6bz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhNGM4ODQyOC0xMGYxLTcwOTAtMWE5Ny1lYzA5ZTA2N2ExN2UiLCJjb2duaXRvOmdyb3VwcyI6WyJ1cy1lYXN0LTFfaXk0dVRGN3FPX0dvb2dsZSJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfaXk0dVRGN3FPIiwiY29nbml0bzp1c2VybmFtZSI6ImE0Yzg4NDI4LTEwZjEtNzA5MC0xYTk3LWVjMDllMDY3YTE3ZSIsIm9yaWdpbl9qdGkiOiI2ZjQ5ZjI1NC02NjQ3LTQ2NjUtOTMyNi0yNDgwYTQ4MjRiM2MiLCJhdWQiOiIzY2xwcHVzOG1qY240N2xyYmlsNTAyZjV1cCIsImV2ZW50X2lkIjoiM2JlNGIzMGUtYWI2NC00ODgwLWE0MTItODBjMzk5M2Y4MDcxIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3NjA1OTM2MzIsImV4cCI6MTc2MDY4MDAzMiwiaWF0IjoxNzYwNTkzNjMyLCJqdGkiOiIwNjliNDk4Ni1jMWY1LTQ4YTMtODdhMi02Mjc2ZjYzMWJjYmQiLCJlbWFpbCI6InN1c2hpbEBlLWFydGguaW4ifQ.jfQ_4BLrlkugcwILzpVJohXDgIbGFRXpkTGxolrUFv4fysPlT8Mu-bx-7Le2W_e_idOtrLYO-sNOGS1Jj5j1uYQzo2wKNsAuds0gNcsBOWzf2St6oiJaEwzak01YLfM8P1W5I2e7H7yvoEU9E2FkWMqRy3cfbjDSeuCzgK_c0rRgyHVoYXMuPnKT1lyi8lCSeYbfOgUmGK6VQg0zQb4Bsb1xk4v1_xGF35OASNDYbn5ueftxxnQu1qwQ8MwlbEHjRwVTFHVeBReX0xWhbP346rvGmslijGl_TU_c0JZVyRVrZyQSRkUCjtRm9GLQharlsLypn7cNBo0Aw5T2K1mBzw"
        };
        // Custom headers
        const headers = {
            "Content-Type": "application/json"
        };
        try {
            // axios.post(url, data, { headers })
            const response = yield axios.post(url, payload, { headers });
            console.log("Response:", response.data);
        }
        catch (error) {
            console.error("Error:", ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
        }
    });
}
createUser();
// import axios from "axios";
// async function getUserData() {
//   try {
//     const response = await axios.get("https://api.example.com/users/1");
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }
// getUserData();
// {
//     "operationName": "myQuery",
//     "variables": {
//         "Token": "eyJraWQiOiJQNHRuUWFjUnRQMlNKTkNyZk1wQnNCc29cL0IrWmkwZkpYOGFZVDN0REZ6bz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhNGM4ODQyOC0xMGYxLTcwOTAtMWE5Ny1lYzA5ZTA2N2ExN2UiLCJjb2duaXRvOmdyb3VwcyI6WyJ1cy1lYXN0LTFfaXk0dVRGN3FPX0dvb2dsZSJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfaXk0dVRGN3FPIiwiY29nbml0bzp1c2VybmFtZSI6ImE0Yzg4NDI4LTEwZjEtNzA5MC0xYTk3LWVjMDllMDY3YTE3ZSIsIm9yaWdpbl9qdGkiOiI2ZjQ5ZjI1NC02NjQ3LTQ2NjUtOTMyNi0yNDgwYTQ4MjRiM2MiLCJhdWQiOiIzY2xwcHVzOG1qY240N2xyYmlsNTAyZjV1cCIsImV2ZW50X2lkIjoiM2JlNGIzMGUtYWI2NC00ODgwLWE0MTItODBjMzk5M2Y4MDcxIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3NjA1OTM2MzIsImV4cCI6MTc2MDY4MDAzMiwiaWF0IjoxNzYwNTkzNjMyLCJqdGkiOiIwNjliNDk4Ni1jMWY1LTQ4YTMtODdhMi02Mjc2ZjYzMWJjYmQiLCJlbWFpbCI6InN1c2hpbEBlLWFydGguaW4ifQ.jfQ_4BLrlkugcwILzpVJohXDgIbGFRXpkTGxolrUFv4fysPlT8Mu-bx-7Le2W_e_idOtrLYO-sNOGS1Jj5j1uYQzo2wKNsAuds0gNcsBOWzf2St6oiJaEwzak01YLfM8P1W5I2e7H7yvoEU9E2FkWMqRy3cfbjDSeuCzgK_c0rRgyHVoYXMuPnKT1lyi8lCSeYbfOgUmGK6VQg0zQb4Bsb1xk4v1_xGF35OASNDYbn5ueftxxnQu1qwQ8MwlbEHjRwVTFHVeBReX0xWhbP346rvGmslijGl_TU_c0JZVyRVrZyQSRkUCjtRm9GLQharlsLypn7cNBo0Aw5T2K1mBzw"
//     },
//     "query": "query myQuery($Token: String!) {\n  list_associated_organizations(\n    input: {token: $Token, action: \"list_associated_organizations\"}\n  ) {\n    body\n    message\n    error\n    statusCode\n    __typename\n  }\n}"
// }
