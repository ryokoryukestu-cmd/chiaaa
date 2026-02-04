// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Kavvu",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Fah-lentine? (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you luv meeeee?",                                    // First interaction
            yesBtn: "YESSSS",                                             // Text for "Yes" button
            noBtn: "no......o-o",                                               // Text for "No" button
            secretAnswer: "I don't like you, I love you! Silly ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2025? 🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "...banned"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "FAHHHHHHHHHHHH🚀🚀🚀🚀🚀🚀🚀💝",  // Shows when they go past 5000%
        high: "as much as chiikawa",              // Shows when they go past 1000%
        normal: "Yayyyyyyyyy"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I Love you so much baby ",
        message: "Now come now and we gonna fly off to new york FAHHHHH✈️✈️✈️✈️✈️✈️!",
        emojis: "🎁💖🤗💝💋❤️💕✈️"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dngfn23by/video/upload/v1770235156/%E5%85%AC%E5%BC%8F%E3%81%BE%E3%81%97%E3%82%99%E3%81%8B%E3%82%8B%E3%81%A1%E3%81%84%E3%81%8B%E3%82%8F%E3%82%B9%E3%83%98%E3%82%9A%E3%82%B7%E3%83%A3%E3%83%AB%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B7%E3%82%99%E3%83%83%E3%82%AF%E3%83%92%E3%82%99%E3%83%86%E3%82%99%E3%82%AA%E3%83%9E%E3%82%B7%E3%82%99%E3%82%AB%E3%83%AB%E3%82%B7%E3%83%B3%E3%83%88%E3%82%99%E3%83%AD%E3%83%BC%E3%83%A0_qeteet.mp3"
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
