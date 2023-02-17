$(document).ready(function () {
  let product = {
    productNumber: ko.observable("A14GG"),
    productDescription: ko.observable("Nice One"),
    productActive: ko.observable(true),
    productClass: ko.observable("Bicycles"),
    unitOfMeasure: ko.observableArray(["EA", "MTR", "CM"]),
    unitOfMeasureSelected: ko.observable(),
    suggestedVendor: ko.observableArray([
      "Acme suppliers",
      "Devgiri Forgings",
      "VR Precisions",
    ]),
    suggestedVendorSelected: ko.observable(),
    weightPerUnitOfMeasure: ko.observable(),
    listPrice: ko.observable(),
    countryOfOrigin: ko.observable(),
    latestRevisionDate: ko.observable(),
    longDescription: ko.observable(),
  };

  console.log(product);
  product.saveToJson = function () {
    let jsonData = ko.toJSON(product);
    console.log(jsonData);
    const promise = fetch("http://localhost:3000/products", {
      method: "post",
      body: jsonData,
      headers: {
        "content-type": "application/json",
      },
    });
    promise.then(function (data) {
      alert("Data Saved Successfully");
      console.log(data);
    });
  };

  ko.applyBindings(product);
});
