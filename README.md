# Payment Microservice

This is a mock payment microservice, with NodeJS Typescript and Express Framework. To be consumed with Web PaymentRequest API;

PaymentRequest API reference: [W3 Payment Request](https://www.w3.org/TR/payment-request/)

## Requirement

### Node

- #### Node Installation Guide

  Download and install from [official Node.js website](https://nodejs.org/)

If the installation was successful, you should be able to run the following command.

      $ node --version
      v8.11.3

      $ npm --version
      6.1.0

## Install

    $ git clone https://github.com/Kurox5761/payment_microservice
    $ cd payment_microservice
    $ npm install

## Running the project

    $ npm start

## Build for production

    $npm run build

## API

call with Authorization header **verysecureindeed**, should be put in process.env !!!

### 1. **POST** /payment/verify

#### Description

Endpoint verifying payment

#### Body

    {
        requestId: string,
        methodName: string,
        details: PaymentRequestDetail
        ...optionals
    }

#### Response

Using **payment/1/response** will fail the payment
Using **payment/2/response** will success the payment

    {
        result: boolean
    }

### 1. **GET** /payment/:id/response

#### Description

Mock endpoint for getting the data to be use for testing endpoints.

> id == 1 will provide fail payment
> id == 2 will provide success payment

#### Body

    {
        requestId: string,
        methodName: string,
        details: PaymentRequestDetail
        shouldVerify: boolean (this is the one that get checked for payment)
        shippingAddress: null
        payerName: string
        payerEmail: string
        payerPhone: null,
        shippingOption: null
    }

#### Response

Using **payment/1/response** will fail the payment
Using **payment/2/response** will success the payment

    {
        result: boolean
    }
