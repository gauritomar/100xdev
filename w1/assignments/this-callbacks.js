const myObject = {
    value: 42,
    getValue: function () {
        console.log(this.value)
    }
};


setTimeout(() => myObject.getValue(), 1000);