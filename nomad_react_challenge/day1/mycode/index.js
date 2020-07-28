class ObjectUtilities {
    static mergeObjects = (obj1, obj2) => {
        return Object.assign({}, obj1, obj2);
    };
    static removePassword = (obj) => {
        const copyobj = Object.assign({}, obj);
        delete copyobj.password;
        return copyobj;
    };
    static freezeObj = (obj) => {
        return Object.freeze(obj);
    };
    static getOnlyValues = (obj) => {
        return Object.values(obj);
    };
    static getOnlyProperties = (obj) => {
        return Object.keys(obj);
    };
}

const objA = {
    name: "Nicolas",
    favFood: "Kimchi",
};

const objB = {
    password: "12345",
};

const user = ObjectUtilities.mergeObjects(objA, objB);
console.log(user);

const cleanUser = ObjectUtilities.removePassword(user);
console.log(cleanUser);

const frozenUser = ObjectUtilities.freezeObj(cleanUser);

const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
console.log(onlyValues);

const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
console.log(onlyProperties);

frozenUser.name = "Hello!"; // This should show an error
