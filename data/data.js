
const imageData = [
    { title: "Forest",
        path: require("../assets/images/forest.jpg"),
        score: 3,
    },
    { title: "Beach",
        path: require("../assets/images/beach.jpg"),
        score: 5,
    },
    { title: "Mountain",
        path: require("../assets/images/mountain.jpg"),
        score: 7,
    },
]
const buttonData = [
    { title: "Button - Components", navTarget: "Components",
        props: { key1: "Prop1", key2: "Prop2"}
    },
    { title: "Button - Flat List", navTarget: "FlatList",
        props: { key1: "Prop1", key2: "Prop2"}
    },
    { title: "Button - Images", navTarget: "Images",
        props: { key1: "Prop1", key2: "Prop2"}
    },
    { title: "Button - Count", navTarget: "Count",
        props: { key1: "Prop1", key2: "Prop2"}
    },
]
const TOData = [
    { title: "TO - Components", navTarget: "Components",
        props: { key1: "Prop1", key2: "Prop2"}
    },
    { title: "TO - Flat List", navTarget: "FlatList",
        props: { key1: "Prop1", key2: "Prop2"}
    },
    { title: "TO - Images", navTarget: "Images",
        props: { key1: "Prop1", key2: "Prop2"}
    },
    { title: "TO - Count", navTarget: "Count",
        props: { key1: "Prop1", key2: "Prop2"}
    },
]

export { imageData, buttonData, TOData }