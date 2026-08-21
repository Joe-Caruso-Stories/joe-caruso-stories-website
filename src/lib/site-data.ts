// Interim static content for the initial build pass. Testimonials move to
// Supabase in a later checkpoint of the rebuild. Blog posts now live in
// src/content/blog/ (see src/lib/blog.ts).

export const BOOKS = [
  {
    slug: "in-the-beginning-god",
    title: "In the Beginning… God",
    tagline: "A Story of Creation and Responsibility",
    cardQuote:
      "“Let there be light!” God said with a shout.\n“Make it shine as bright as can be!”",
    blurb:
      "With playful rhymes and brilliant illustrations, In the Beginning… God celebrates each day of creation while reminding all God's children of their role in His magnificent, one-of-a-kind design.",
    amazonUrl: "https://a.co/d/cO3doj6",
    coverImage: "/images/books/in-the-beginning-god.jpg",
    story: [
      {
        type: "paragraph",
        lead: "Let there be Light!",
        text: " The first four words God spoke to set in motion the beginning of His wonderful creation. From the tiniest flower to faraway planets, children and adults alike have marveled at the breathtaking beauty and intricacies of God's divine workmanship.",
      },
      {
        type: "quote",
        text: "God saw the darkness that stretched far and wide, \nbeyond what your eyes could see. \n\n“Let there be light!” God said with a shout. \n“Make it shine as bright as can be!”",
      },
      {
        type: "paragraph",
        text: "With playful rhymes and brilliant illustrations, In the Beginning… God celebrates each day of creation while reminding all God's children of their role in His magnificent, one-of-a-kind design.",
      },
      {
        type: "quote",
        text: "Then at last, it was complete, \nand time for God to rest.\n\n“Before I do,” God said with a smile, \n“I have this one request:”",
      },
    ],
    rating: { value: 4.7, label: "new" },
  },
  {
    slug: "in-the-image-of-god",
    title: "In the Image of God",
    tagline: "A Story of Identity and Value",
    cardQuote:
      "“For you were made in the image of God.\nIn the image of God, you were made.”",
    blurb:
      "Filled with rhymes of affirmation and charming illustrations, In the Image of God is a beautiful reminder that our identity is found in Him — full of creativity, wisdom, power, and love.",
    amazonUrl:
      "https://www.amazon.com/Image-God-Story-Identity-Value/dp/1777323134",
    coverImage: "/images/books/in-the-image-of-god.jpg",
    award: {
      image: "/images/awards/readers-choice-finalist.png",
      label: "Readers' Choice Book Award — Finalist",
    },
    story: [
      {
        type: "paragraph",
        lead: "What makes you…YOU?",
        text: " Children from a young age wonder what makes them special. They wonder how they can find their unique place in a big world. Of all God's creation, we are His masterpiece. God's amazing qualities are planted deep inside us, just waiting to spring to life.",
      },
      {
        type: "quote",
        text: "“For you were made in the image of God. \nIn the image of God, you were made.”",
      },
      {
        type: "paragraph",
        text: "Filled with rhymes of affirmation and charming illustrations, In the Image of God is a beautiful reminder that our identity is found in Him. Children will be inspired to see themselves just as God made them, full of creativity, wisdom, power and love.",
      },
      {
        type: "quote",
        text: "“You are made to soar high. The sky is the limit. \nNo challenge or quest is too big with you in it.”",
      },
    ],
    rating: { value: 4.7, label: "358" },
  },
  {
    slug: "freddy-finds-god",
    title: "Freddy Finds God",
    tagline: "A Story of Meaning and Purpose",
    cardQuote:
      "Freddy wakes up with a BIG idea.\nHe is going to find God. …But where could God be?",
    blurb:
      "Join Freddy on an inspiring journey as he searches his town for God, and discovers along the way that God is found when we care for others — and that finding God is easier than we think.",
    amazonUrl: "https://www.amazon.com/dp/B08NY21D9Y",
    coverImage: "/images/books/freddy-finds-god.jpg",
    story: [
      {
        type: "quote",
        text: "Freddy wakes up with a BIG idea. \nHe is going to find God. …But where could God be?",
      },
      {
        type: "paragraph",
        text: "All children wonder where God might be. They desire to see Him and be part of His special plan. But how? Join Freddy on this inspiring journey, as he learns that God can be found when we care for others.",
      },
      {
        type: "paragraph",
        text: "With lunch in hand, Freddy begins searching the various corners of his town, certain he will find God. Freddy's smile soon turns to a frown when he meets several people on his way, but still can't find God. Or so he thinks. With the help of his mother, Freddy discovers that he has actually been with God all day.",
      },
    ],
    rating: { value: 4.7, label: "loved" },
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "What a great story! Beautifully written and wonderful images. The diversity of characters means my kid “saw himself” represented in one of the characters. My kids loved this story.",
    author: "Jon W.",
  },
  {
    quote:
      "This book is perfect for children to read and learn about all that God says they are! The illustrations are adorable and the rhyming makes the book so fun for kids! My daughter loves repeating the last sentence of every page with me. LOVE LOVE LOVE!",
    author: "Banners by AP",
  },
  {
    quote:
      "This sweet book reminds our little ones just how precious they are. Me and my 8 year-old read it together and discussed how each of us is unique and how this book celebrates our individuality and gifts. A beautiful, important message, with cute illustrations make this book a favorite for us!",
    author: "Lala L.",
  },
  {
    quote:
      "This is such a beautiful little book and will not just teach children about Creation but will also teach them their responsibility to take care of all God has given them. Even small children will enjoy the book because of the illustrations and the sweet flow of the words.",
    author: "Anne",
  },
  {
    quote:
      "This was such an amazing and thought provoking read. For such a delicate topic for kids, the author beautifully and effectively expressed the importance of finding God in everything that we are, see and do.",
    author: "Skyye L.",
  },
  {
    quote:
      "This is a feel-good story to remind your children who they are. It also helps them understand that even if others don't offer love and kindness, they can still be who they are. It's helped us with our child who's dealt with bullying at school.",
    author: "Rebecca N.",
  },
] as const;
