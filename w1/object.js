const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
}

function objectMethods(obj) {
    console.log("Orignal Object: ", obj);

    let keys = Object.keys(obj);
    console.log("After Object.keys(): ", keys);

    let values = Object.keys(obj);
    console.log("After Object.values(): ", values);

    let entries = Object.entries(obj);
    console.log("After Object.entries(): ", entries);

    let hasProp = obj.hasOwnProperty("property");
    console.log("After hasOwnProperty(): ", hasProp);

    let newObj = Object.assign({}, obj, { newProperty: "newValue" });
    console.log("After Object.assign(): ", newObj);
};

objectMethods(sampleObject);