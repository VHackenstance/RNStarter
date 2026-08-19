
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
    { title: "Components", navTarget: "Components",
        props: { key1: "Prop1", key2: "Prop2"}
    },
    { title: "Flat List", navTarget: "FlatList",
        props: { key1: "Prop1", key2: "Prop2"}
    },
    { title: "Images", navTarget: "Images",
        props: { key1: "Prop1", key2: "Prop2"}
    },
    { title: "Count", navTarget: "Count",
        props: { key1: "Prop1", key2: "Prop2"}
    },
    { title: "Color", navTarget: "Color",
        props: { key1: "Prop1", key2: "Prop2"}
    },
]

//  does not work with flatlist in stack navigator
const StackScreenData = [
    { name: "Home", component: "HomeScreen", title: "Home Screen",
    },
    { name: "Components", component: "ComponentsScreen", title: "Components Screen",
    },
    { name: "FlatList", component: "FlatListScreen", title: "Flat List Screen",
    },
    { name: "Images", component: "ImageScreen", title: "Images Screen",
    },
    { name: "Count", component: "CountScreen", title: "Count Screen",
    },
    { name: "Color", component: "ColorScreen", title: "Color Screen",
    },
]

export { imageData, buttonData, TOData, StackScreenData }