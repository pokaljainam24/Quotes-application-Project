const Data = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",

        author: "Nelson Mandela",

        imgurl: "https://cdn.pixabay.com/photo/2023/08/16/12/28/ai-generated-8194046_1280.png",

        birthPlace: "Mvezo, South Africa"
    },
    {

        quote: "The way to get started is to quit talking and begin doing.",

        author: "Walt Disney",

        imgurl: "https://hips.hearstapps.com/hmg-prod/images/walt-disney-united-artistis-photofest-cropped.jpg",

        birthPlace: "Chicago, Illinois, USA"

    },

    {

        quote: "Your time is limited, so don't waste it living someone else's life.",

        author: "Steve Jobs",

        imgurl: "https://media.licdn.com/dms/image/D5612AQHtMgZ5WwqKdQ/article-cover_image-shrink_720_1280/0/1696904062913?e=2147483647&v=beta&t=1GjDcruJpNJIHMoYuvOTw2sau7jCxHoTGOsrhWKOOhQ",

        birthPlace: "San Francisco, California, USA"

    },

    {

        quote: "If life were predictable it would cease to be life, and be without flavor.",

        author: "Eleanor Roosevelt",

        imgurl: "https://cdn.pixabay.com/photo/2024/02/02/16/20/eleanor-roosevelt-8548576_1280.jpg",

        birthPlace: "New York City, New York, USA"

    },

    {

        quote: "If you look at what you have in life, you'll always have more.",

        author: "Oprah Winfrey",

        imgurl: "https://images.nightcafe.studio/jobs/gbYkGIYzXJWkxLfT5BbY/gbYkGIYzXJWkxLfT5BbY--1--ibgtu.jpg?tr=w-1600,c-at_max",

        birthPlace: "Kosciusko, Mississippi, USA"

    },

    {

        quote: "Life is what happens when you're busy making other plans.",

        author: "John Lennon",

        imgurl: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-457930149.jpg",

        birthPlace: "Liverpool, England"

    },

    {

        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",

        author: "Mother Teresa",

        imgurl: "https://cdn.pixabay.com/photo/2024/01/15/17/06/saint-teresa-of-calcutta-8510550_1280.png",

        birthPlace: "Skopje, North Macedonia"

    },

    {

        quote: "When you reach the end of your rope, tie a knot in it and hang on.",

        author: "Franklin D. Roosevelt",

        imgurl: "https://images.deepai.org/chat-style-image/6a7d0a3315d6424ba631d76b6527f4f7/output.jpg",

        birthPlace: "Hyde Park, New York, USA"

    },

    {

        quote: "Always remember that you are absolutely unique. Just like everyone else.",

        author: "Margaret Mead",

        imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Margaret_Mead_1951_SLNSW_FL16371554.jpg/220px-Margaret_Mead_1951_SLNSW_FL16371554.jpg",

        birthPlace: "Philadelphia, Pennsylvania, USA"

    },

    {

        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",

        author: "Robert Louis Stevenson",

        imgurl: "https://lh3.googleusercontent.com/proxy/aw1rdueiXFjuKGbEJ8mUuHN8soBFz1cUJsjS8F0vh3V9bEaJnxktsQxmxhcRFybNR5NHDmhbp2peyzOjl3jiTT9_vUINoOgI_BIiN6GSy2b_WJM_q0SBsB0ZUOrm7AZ2-n-_wS2FnGYpqrVDpmMQS-n--lmoDawD2tw",

        birthPlace: "Edinburgh, Scotland"

    },
    {

        quote: "The future belongs to those who believe in the beauty of their dreams.",

        author: "Eleanor Roosevelt",

        imgurl: "https://cdn.pixabay.com/photo/2024/02/02/16/20/eleanor-roosevelt-8548576_1280.jpg",

        birthPlace: "New York City, New York, USA"

    },
    {

        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",

        author: "Benjamin Franklin",

        imgurl: "https://png.pngtree.com/background/20230528/original/pngtree-benjamin-franklin-hd-wallpaper-picture-image_2771708.jpg",

        birthPlace: "Boston, Massachusetts, USA"

    },
    {

        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",

        author: "Helen Keller",

        imgurl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Helen_Keller_in_watercolour.png",

        birthPlace: "Tuscumbia, Alabama, USA"

    },
    {

        quote: "It is during our darkest moments that we must focus to see the light.",

        author: "Aristotle",

        imgurl: "https://t4.ftcdn.net/jpg/05/58/64/41/360_F_558644143_zQnkVbhuGYb7JknZozsR7VKcXMmUcA9p.jpg",

        birthPlace: "Stagira, Greece"

    },
    {

        quote: "Whoever is happy will make others happy too.",

        author: "Anne Frank",

        imgurl: "https://w7.pngwing.com/pngs/511/397/png-transparent-anne-frank-house-the-diary-of-a-young-girl-anne-frank-the-biography-tales-from-the-secret-annex-others-germany-frankfurt-diary-thumbnail.png",

        birthPlace: "Frankfurt, Germany"

    },
    {

        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",

        author: "Ralph Waldo Emerson",

        imgurl: "https://mediarichlearning.com/wp-content/uploads/2023/11/emerson-ralph-waldo.jpg",

        birthPlace: "Boston, Massachusetts, USA"

    },
    {

        quote: "You will face many defeats in life, but never let yourself be defeated.",

        author: "Maya Angelou",

        imgurl: "https://hips.hearstapps.com/hmg-prod/images/maya_angelou_photo_by_deborah_feingold_corbis_entertainment_getty_533084708.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",

        birthPlace: "St. Louis, Missouri, USA"

    },
    {

        quote: "In the end, it's not the years in your life that count. It's the life in your years.",

        author: "Abraham Lincoln",

        imgurl: "https://t4.ftcdn.net/jpg/05/64/03/95/360_F_564039512_TPGbK4zIDos0dUft6UCx7tv9zGXroCh9.jpg",

        birthPlace: "Hodgenville, Kentucky, USA"

    },
    {

        quote: "Never let the fear of striking out keep you from playing the game.",

        author: "Babe Ruth",

        imgurl: "https://cdn.vectorstock.com/i/1000v/73/93/babe-ruth-vector-40847393.jpg",

        birthPlace: "Baltimore, Maryland, USA"

    },
    {

        quote: "Life is either a daring adventure or nothing at all.",

        author: "Helen Keller",

        imgurl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Helen_Keller_in_watercolour.png",

        birthPlace: "Tuscumbia, Alabama, USA"

    },
    {

        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",

        author: "Thomas A. Edison",

        imgurl: "https://luisafumi-digitalart.com/wp-content/uploads/edison-th.jpg",

        birthPlace: "Milan, Ohio, USA"

    },
    {

        quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",

        author: "Brian Tracy",

        imgurl: "https://imgcdn.stablediffusionweb.com/2024/4/3/737128bd-e7ee-4fb5-8b44-6e6563f88010.jpg",

        birthPlace: "Charlottetown, Canada"

    },
    {

        quote: "Believe you can and you're halfway there.",

        author: "Theodore Roosevelt",

        imgurl: "https://wallpapercat.com/w/full/9/f/d/988582-2796x1864-desktop-hd-theodore-roosevelt-wallpaper-image.jpg",

        birthPlace: "New York City, New York, USA"

    },
    {

        quote: "Act as if what you do makes a difference. It does.",

        author: "William James",

        imgurl: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-517443904.jpg?crop=1.00xw:0.998xh;0,0&resize=360:*",

        birthPlace: "New York City, New York, USA"

    },
    {

        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",

        author: "Winston Churchill",

        imgurl: "https://media.gettyimages.com/id/79047457/photo/politics-1950-general-election-a-portrait-of-winston-churchill-pictured-with-his-trademark.jpg?s=612x612&w=0&k=20&c=svHt9ZJToqHFfDapARxV0nT0wwZOstwb5q4G4OtwkHY=",

        birthPlace: "Woodstock, England"

    },
    {

        quote: "You are never too old to set another goal or to dream a new dream.",

        author: "C.S. Lewis",

        imgurl: "https://curioustimes.in/wp-content/uploads/2023/11/C.S.-Lewis.jpg",

        birthPlace: "Belfast, Ireland"

    },
    {

        quote: "At any given moment you have the power to say: this is not how the story is going to end.",

        author: "Christine Mason Miller",

        imgurl: "https://images.squarespace-cdn.com/content/v1/5f6a7e76e1d0780dc94045c3/1647030299046-1QCQNVMS8ANJ6QYUYHKU/Christine+Mason+Miller.png?format=500w",

        birthPlace: "Unknown"

    },
    {

        quote: "You don't have to be great to start, but you have to start to be great.",

        author: "Zig Ziglar",

        imgurl: "https://static01.nyt.com/images/2012/11/30/business/Ziglar2/Ziglar2-jumbo.jpg?quality=75&auto=webp&disable=upscale",

        birthPlace: "Coffee County, Alabama, USA"

    },
    {

        quote: "I have not failed. I've just found 10,000 ways that won't work.",

        author: "Thomas A. Edison",

        imgurl: "https://img.freepik.com/premium-photo/thomas-edison-biography-inventor-innovator-thomas-edison-inventions-edison-light-bulb-tho_980716-17326.jpg",

        birthPlace: "Milan, Ohio, USA"

    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",

        author: "Sam Levenson",

        imgurl: "https://static.flashintel.ai/image/0/5/d/05da6cb06655276053e8c17f2ba4faf2.jpeg",

        birthPlace: "New York City, New York, USA"
    }
];


const container = document.querySelector('#quotes-container');
container.innerHTML = "";

Data.forEach((item) => {
    let authorHtml = `
                <div class="main-card" id="std">
                    <div class="header">
                        <h1>${item.author}</h1>
                        <p><strong> - </strong>${item.birthPlace}</p>
                    </div>
                        
                        <img src="${item.imgurl}" alt="Author Image" class="profile-pic">
                        
                    <div class="author-info">
                        <p id="quotes"><span>Quote:- </span>${item.quote}</p>
                    </div>
                </div>
            `;

    container.innerHTML += authorHtml;
});

