package com.client;

import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.json.JSONObject;

import java.io.IOException;

public class PutRequest {
    public static void main(String[] args) throws IOException {
        sendPUT("https://loanstreetapi.herokuapp.com/loans/1");
    }
    private static void sendPUT(String url) throws IOException {
        JSONObject json = new JSONObject();
        json.put("amount", 44444444.4);
        json.put("interestRate", 4.4);
        json.put("lengthOfLoan", 204);
        json.put("monthlyPayment", 5454.7);
        System.out.println(json.toString());

        CloseableHttpClient httpClient = HttpClientBuilder.create().build();

        try {
            HttpPut request = new HttpPut(url);
            StringEntity params = new StringEntity(json.toString());
            request.addHeader("content-type", "application/json");
            request.setEntity(params);
            HttpResponse response =  httpClient.execute(request);
            System.out.println(response.toString());
            System.out.println(response.getStatusLine().getStatusCode());
        } catch (Exception ex) {
        } finally {
            httpClient.close();
        }
    }
}
