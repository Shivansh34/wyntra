const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  username: String,
  userid: mongoose.ObjectId,
  reviewtitle: String,
  reviewvalue: String,
  rating: Number,
},
{
  timestamps: true
});

const productSchema = mongoose.Schema({
  "landingPageUrl": {
    "type": "String"
  },
  "loyaltyPointsEnabled": {
    "type": "Boolean"
  },
  "adId": {
    "type": "String"
  },
  "isPLA": {
    "type": "Boolean"
  },
  "productId": {
    "type": "Number"
  },
  "product": {
    "type": "String"
  },
  "productName": {
    "type": "String"
  },
  "rating": {
    "type": "Number"
  },
  "ratingCount": {
    "type": "Number"
  },
  "isFastFashion": {
    "type": "Boolean"
  },
  "futureDiscountedPrice": {
    "type": "Number"
  },
  "futureDiscountStartDate": {
    "type": "String"
  },
  "discount": {
    "type": "Number"
  },
  "brand": {
    "type": "String"
  },
  "searchImage": {
    "type": "String"
  },
  "effectiveDiscountPercentageAfterTax": {
    "type": "Number"
  },
  "effectiveDiscountAmountAfterTax": {
    "type": "Number"
  },
  "buyButtonWinnerSkuId": {
    "type": "Number"
  },
  "buyButtonWinnerSellerPartnerId": {
    "type": "Number"
  },
  "relatedStylesCount": {
    "type": "Number"
  },
  "relatedStylesType": {
    "type": "String"
  },
  "productVideos": {
    "type": "Array"
  },
  "inventoryInfo": {
    "type": [
      "Mixed"
    ]
  },
  "sizes": {
    "type": "String"
  },
  "images": {
    "type": [
      "Mixed"
    ]
  },
  "gender": {
    "type": "String"
  },
  "primaryColour": {
    "type": "String"
  },
  "discountLabel": {
    "type": "String"
  },
  "discountDisplayLabel": {
    "type": "String"
  },
  "additionalInfo": {
    "type": "String"
  },
  "category": {
    "type": "String"
  },
  "mrp": {
    "type": "Number"
  },
  "price": {
    "type": "Number"
  },
  "advanceOrderTag": {
    "type": "String"
  },
  "colorVariantAvailable": {
    "type": "Boolean"
  },
  "productimagetag": {
    "type": "String"
  },
  "listViews": {
    "type": "Number"
  },
  "discountType": {
    "type": "Date"
  },
  "tdBxGyText": {
    "type": "String"
  },
  "catalogDate": {
    "type": "String"
  },
  "season": {
    "type": "String"
  },
  "year": {
    "type": "Date"
  },
  "isPersonalised": {
    "type": "Boolean"
  },
  "eorsPicksTag": {
    "type": "String"
  },
  "personalizedCoupon": {
    "type": "String"
  },
  "personalizedCouponValue": {
    "type": "Number"
  },
  "productMeta": {
    "type": "String"
  },
  "systemAttributes": {
    "type": [
      "Mixed"
    ]
  },
  "attributeTagsPriorityList": {
    "type": "Array"
  },
  "preferredDeliveryTag": {
    "type": "String"
  },
  "review": [reviewSchema]
});


const Product = mongoose.model("Products", productSchema);


module.exports = Product;
