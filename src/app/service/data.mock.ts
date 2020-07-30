export const methodData: PaymentMethodData[] = [
  {
    supportedMethods: "basic-card",
    data: {
      supportedNetworks: ["visa", "mastercard", "americanexpress"],
    },
  },
  {
    supportedMethods: "https://merchant_1234.com/somepay",
    data: {
      merchantIdentifier: "1234",
      shouldReturn: true,
    },
  },
  {
    supportedMethods: "https://merchant_4321.com/somepay",
    data: {
      merchantIdentifier: "4321",
      shouldReturn: false,
    },
  },
];

export const details: PaymentDetailsInit = {
  id: "some-booking-order-details",
  displayItems: [
    {
      label: "Booking",
      amount: { currency: "MYR", value: "50" },
    },
    {
      label: "Service Charge",
      amount: { currency: "MYR", value: "20" },
    },
  ],
  total: {
    label: "Total due",
    amount: { currency: "MYR", value: "70" },
  },
};

export const response_1 = {
  requestId: "some-booking-order-details",
  methodName: "basic-card",
  details: details,
  shouldVerify: false,
  shippingAddress: null,
  payerName: "Booker",
  payerEmail: "booker@booking.com",
  payerPhone: null,
  shippingOption: null,
};

export const response_2 = {
  requestId: "some-booking-order-details",
  methodName: "basic-card",
  details: details,
  shouldVerify: true,
  shippingAddress: null,
  payerName: "Booker",
  payerEmail: "booker@booking.com",
  payerPhone: null,
  shippingOption: null,
};
