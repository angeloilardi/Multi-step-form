const data = {
    plans: {
        arcade: {
            value: "arcade",
            label: "Arcade",
            icon: "/images/icon-arcade.svg",
            monthly: 9,
            yearly: 90,
        },
        advanced: {
            value: "advanced",
            label: "Advanced",
            icon: "/images/icon-advanced.svg",
            monthly: 12,
            yearly: 120,
        },
        pro: {
            value: "pro",
            label: "Pro",
            icon: "/images/icon-pro.svg",
            monthly: 15,
            yearly: 150,
        }
    },
    addons: {
        online: {
            value: "online",
            label: "Online service",
            description: "Access to multiplayer games",
            monthly: 1,
            yearly: 10,
        },
        storage: {
            value: "storage",
            label: "Larger storage",
            description: "Extra 1TB of cloud save",
            monthly: 2,
            yearly: 20,
        },
        customize: {
            value: "customize",
            label: "Customizable Profile",
            description: "Custom theme on your profile",
            monthly: 2,
            yearly: 20,
        },
    }
}

export default data;