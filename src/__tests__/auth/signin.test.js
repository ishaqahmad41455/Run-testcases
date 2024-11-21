/* eslint-disable no-undef */
import { expect } from "chai";
import request from "supertest";

const API_URL = "https://devapi.stable-life.com/api/v1/auth";

describe("Login API", () => {
    it("Should fail if Email is invalid", (done) => {
        request(API_URL)
            .post("/signin")
            .set({
                "User-Agent": "PostmanRuntime/7.37.0",
                "x-temp-id": "1212",
            })
            .send({ email: "thisemaildoestexists@mailinator.com", password: "password" })
            .expect(400)
            .end((error, response) => {
                if (error) return done(error);
                expect(response.status).to.equal(400);
                // expect(response.body.message).to.equal("Incorrect Email or Password");
                // expect(response.status).not.to.be.empty;
                //   expect(response.body).to.be.an("object");
                done();
                return false;
            });
    });
    it("Should fail if password is invalid", (done) => {
        request(API_URL)
            .post("/signin")
            .set({
                "User-Agent": "PostmanRuntime/7.37.0",
                "x-temp-id": "1212",
            })
            .send({ email: "ishaq@mailinator.com", password: "invalid_passowrd" })
            .expect(400)
            .end((error, response) => {
                if (error) return done(error);
                expect(response.status).to.equal(400);
                // expect(response.body.message).to.equal("Incorrect Email or Password");
                // expect(response.status).not.to.be.empty;
                //   expect(response.body).to.be.an("object");
                done();
                return false;
            });
    });
    // it("Should generate Signin OTP for valid Colombian user credentials", (done) => {
    //     request(API_URL)
    //         .post("/signin")
    //         .set({
    //             "User-Agent": "PostmanRuntime/7.37.0",
    //             "x-temp-id": "1212",
    //         })
    //         .send({ email: "ishaqahmadcl@mailinator.com", password: "Testing@123" })
    //         .expect(200)
    //         .end((err, response) => {
    //             if (err) return done(err);
    //             expect(response.status).to.equal(200);
    //             expect(response.body.message).to.equal(`A (OTP) has been successfully sent  to your email and mobile.`);
    //             done();
    //         });
    // });
});
