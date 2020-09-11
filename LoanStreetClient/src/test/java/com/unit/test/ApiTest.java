package com.unit.test;

import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.testng.annotations.Test;

import static org.testng.Assert.assertEquals;

public class ApiTest {
    String baseURI = "https://loanstreetapi.herokuapp.com";

    Response response;
    JsonPath jp;

    @Test
    public void testGettingLoan() {
        response = RestAssured.get(baseURI + "/loans/1");
        System.out.println(response.body().asString());
        assertEquals(response.getStatusCode(),200);
        String json = response.asString();
        jp = new JsonPath(json);
        System.out.println("id"+jp.get("id"));
    }


}
