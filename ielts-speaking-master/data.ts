import { Topic } from './types';

export const TOPICS: Topic[] = [
  {
    id: 19,
    title: "Benefits of Exercise",
    question: "What are the benefits of exercise?",
    sections: [
      {
        type: 'paragraph',
        content: "It is very good to exercise in my view. It has many advantages, I feel so. I personally think that:",
      },
      {
        type: 'points',
        points: [
          {
            title: "Regular exercise",
            english: "Regular exercise",
            vietnamese: "Tập luyện đều đặn",
            adjective: "Consistent, routine"
          },
          {
            title: "Physical health benefits",
            english: "Physical health benefits",
            vietnamese: "Những lợi ích về sức khỏe thể chất",
            adjective: "Tangible, noticeable"
          },
          {
            title: "Mental well-being advantages",
            english: "Mental well-being advantages",
            vietnamese: "Những lợi ích về tâm lý khỏe mạnh",
            adjective: "Positive, uplifting"
          },
          {
            title: "Cardiovascular fitness improvement",
            english: "Cardiovascular fitness improvement",
            vietnamese: "Cải thiện sức khỏe tim mạch",
            adjective: "Enhanced, cardiovascular"
          },
          {
            title: "Effective strength training",
            english: "Effective strength training",
            vietnamese: "Tập luyện sức mạnh hiệu quả",
            adjective: "Powerful, efficient"
          },
          {
            title: "Flexibility enhancement",
            english: "Flexibility enhancement",
            vietnamese: "Nâng cao sự linh hoạt",
            adjective: "Increased, improved"
          },
          {
            title: "Endorphin release",
            english: "Endorphin release",
            vietnamese: "Giải phóng endorphin",
            adjective: "Mood-boosting, euphoric"
          },
          {
            title: "Successful weight management",
            english: "Successful weight management",
            vietnamese: "Quản lý cân nặng thành công",
            adjective: "Effective, sustainable"
          },
          {
            title: "Improved immune system function",
            english: "Improved immune system function",
            vietnamese: "Cải thiện chức năng hệ thống miễn dịch",
            adjective: "Strengthened, robust"
          },
          {
            title: "Stress-reducing activities",
            english: "Stress-reducing activities",
            vietnamese: "Các hoạt động giảm căng thẳng",
            adjective: "Relaxing, calming"
          },
          {
            title: "Enhanced mood experience",
            english: "Enhanced mood experience",
            vietnamese: "Trải nghiệm tâm trạng được nâng cao",
            adjective: "Positive, uplifting"
          },
          {
            title: "Increased energy levels feeling",
            english: "Increased energy levels feeling",
            vietnamese: "Cảm giác năng lượng tăng cao",
            adjective: "Energized, invigorated"
          },
          {
            title: "Better sleep quality results",
            english: "Better sleep quality results",
            vietnamese: "Kết quả chất lượng giấc ngủ tốt hơn",
            adjective: "Improved, restful"
          },
          {
            title: "Disease prevention measures",
            english: "Disease prevention measures",
            vietnamese: "Biện pháp phòng ngừa bệnh tật",
            adjective: "Protective, preventive"
          },
          {
            title: "Healthy lifestyle choices",
            english: "Healthy lifestyle choices",
            vietnamese: "Những lựa chọn lối sống lành mạnh",
            adjective: "Wise, mindful"
          },
          {
            title: "Longevity-promoting habits",
            english: "Longevity-promoting habits",
            vietnamese: "Những thói quen tạo điều kiện cho sự sống lâu",
            adjective: "Lifespan-enhancing, healthy"
          },
          {
            title: "Socially beneficial activities",
            english: "Socially beneficial activities",
            vietnamese: "Các hoạt động có lợi ích xã hội",
            adjective: "Social, community-building"
          },
          {
            title: "Boosted metabolism effects",
            english: "Boosted metabolism effects",
            vietnamese: "Hiệu ứng tăng cường chuyển hóa",
            adjective: "Accelerated, metabolic"
          },
          {
            title: "Increased self-esteem benefits",
            english: "Increased self-esteem benefits",
            vietnamese: "Những lợi ích về lòng tự trọng được tăng cường",
            adjective: "Empowering, confidence-boosting"
          },
          {
            title: "Engaging physical activities",
            english: "Engaging physical activities",
            vietnamese: "Các hoạt động thể chất thú vị",
            adjective: "Enjoyable, entertaining"
          }
        ]
      }
    ],
    vocabulary: [] // Included in points for this topic
  },
  {
    id: 20,
    title: "Traditional Dish",
    question: "Describe a traditional dish from your country.",
    sections: [
      {
        type: 'paragraph',
        content: "My country has a lot of good dishes. Vietnam is known for nice food anyway worldwide.\n\nThe dish I really like as all Vietnamese people is Banh Mi. It is made with bread which is crispy and baked and is topped with vegetables or meat and layered with sauces like: tomato sauce, red chilli sauce, fish sauce, mayonnaise or egg sauce.\n\nTo make it we need to mix water, flour, eggs, salt, sugar and yeast and prepare the dough to be baked to make the bread at a high temperature.\n\nThe bread has to be crispy and flaky. It is baked for 12 minutes at 300 degree centigrade to be perfectly brown outside and white and fluffy soft inside.\n\nThis is a world-famous dish of Vietnam.",
        vietnameseContent: "\"Quốc gia của tôi có rất nhiều món ngon. Việt Nam nổi tiếng với đặc sản ẩm thực trên toàn thế giới.\n\nMón ăn mà tôi thích như tất cả mọi người Việt Nam là Bánh Mì. Nó được làm từ bánh mì giòn và nướng, được phủ rau củ hoặc thịt và phủ các loại sốt như: sốt cà chua, sốt ớt đỏ, nước mắm, sốt mayonnaise hoặc sốt trứng.\n\nĐể làm món này, chúng ta cần pha trộn nước, bột, trứng, muối, đường và men và chuẩn bị bột để nướng làm bánh mì ở nhiệt độ cao.\n\nBánh mì phải giòn và giòn. Nó được nướng trong vòng 12 phút ở 300 độ C để bên ngoài có màu nâu hoàn hảo và bên trong trắng mịn và mềm mại.\n\nĐây là một món ăn nổi tiếng trên toàn thế giới của Việt Nam.\""
      }
    ],
    vocabulary: [
      { term: "Country", vietnamese: "Quốc gia" },
      { term: "Dishes", vietnamese: "Món ăn" },
      { term: "Worldwide", vietnamese: "Trên toàn thế giới" },
      { term: "Vietnam", vietnamese: "Việt Nam" },
      { term: "Nice food", vietnamese: "Đặc sản ngon" },
      { term: "Banh Mi", vietnamese: "Bánh Mì" },
      { term: "Crispy", vietnamese: "Giòn" },
      { term: "Baked", vietnamese: "Nướng" },
      { term: "Vegetables", vietnamese: "Rau củ" },
      { term: "Meat", vietnamese: "Thịt" },
      { term: "Sauces", vietnamese: "Sốt" },
      { term: "Tomato sauce", vietnamese: "Sốt cà chua" },
      { term: "Red chilli sauce", vietnamese: "Sốt ớt đỏ" },
      { term: "Fish sauce", vietnamese: "Nước mắm" },
      { term: "Mayonnaise", vietnamese: "Sốt mayonnaise" },
      { term: "Egg sauce", vietnamese: "Sốt trứng" },
      { term: "Water", vietnamese: "Nước" },
      { term: "Flour", vietnamese: "Bột" },
      { term: "Eggs", vietnamese: "Trứng" },
      { term: "Salt", vietnamese: "Muối" },
      { term: "Sugar", vietnamese: "Đường" },
      { term: "Yeast", vietnamese: "Men" },
      { term: "Dough", vietnamese: "Bột nhồi" },
      { term: "High temperature", vietnamese: "Nhiệt độ cao" },
      { term: "Crispy and flaky", vietnamese: "Giòn và bánh nở" },
      { term: "Degree centigrade", vietnamese: "Độ C" },
      { term: "Perfectly brown", vietnamese: "Màu nâu hoàn hảo" },
      { term: "White and fluffy soft", vietnamese: "Trắng và mềm mại" },
      { term: "World-famous", vietnamese: "Nổi tiếng thế giới" }
    ]
  },
  {
    id: 21,
    title: "Dealing with Stress",
    question: "How do you deal with stress?",
    sections: [
      {
        type: 'paragraph',
        content: "I feel it depends on us if we take stress or not about something. We can choose not to be stressed. It is all in our mind.\n\n**Firstly,** identify stressors in your life to understand their origins and impact.\n\n**Moreover,** effective time management, including prioritizing tasks and breaking them into manageable steps, can alleviate feelings of overwhelm.\n\n**Next,** practice relaxation techniques such as deep breathing, meditation, or yoga to calm both the mind and body.\n\n**Additionally,** incorporating regular exercise into your routine releases endorphins, contributing to improved mood and stress reduction.\n\n**Furthermore,** build a support system by sharing your feelings with friends, family, or trusted individuals to gain emotional assistance and diverse perspectives.\n\n**Lastly,** establish healthy habits such as maintaining a balanced diet, getting enough sleep, and avoiding excessive caffeine or alcohol intake to enhance overall resilience.",
        vietnameseContent: "\"Cảm giác của tôi là nó phụ thuộc vào chúng ta liệu có áp lực hay không về một điều gì đó. Chúng ta có thể chọn không bị căng thẳng. Tất cả đều nằm trong tâm trí của chúng ta.\n\n**Đầu tiên,** xác định những nguồn gây áp lực trong cuộc sống của bạn để hiểu nguyên nhân và tác động của chúng.\n\n**Hơn nữa,** quản lý thời gian một cách hiệu quả, bao gồm việc ưu tiên công việc và chia nhỏ chúng thành các bước quản lý, có thể giảm bớt cảm giác bị áp đặt.\n\n**Tiếp theo,** thực hành các kỹ thuật thư giãn như thở sâu, thiền, hoặc yoga để làm dịu tâm hồn và cơ thể.\n\n**Thêm vào đó,** tích hợp việc tập thể dục đều đặn vào lịch trình giải phóng endorphins, đóng góp vào tâm trạng cải thiện và giảm căng thẳng.\n\n**Hơn nữa,** xây dựng hệ thống hỗ trợ bằng cách chia sẻ cảm xúc với bạn bè, gia đình, hoặc những người tin cậy để nhận sự giúp đỡ tinh thần và những góc nhìn đa dạng.\n\n**Cuối cùng,** thiết lập những thói quen lành mạnh như duy trì chế độ ăn cân đối, đảm bảo đủ giấc ngủ, và tránh lạm dụng caffeine hoặc rượu để tăng cường sự đàn hồi toàn diện.\""
      }
    ],
    vocabulary: [
      { term: "Feel", vietnamese: "Cảm nhận" },
      { term: "Depends on", vietnamese: "Phụ thuộc vào" },
      { term: "Stress", vietnamese: "Áp lực, căng thẳng" },
      { term: "Choose", vietnamese: "Chọn" },
      { term: "Mind", vietnamese: "Tâm trí" },
      { term: "Identify", vietnamese: "Xác định" },
      { term: "Stressors", vietnamese: "Nguồn gây áp lực" },
      { term: "Origins", vietnamese: "Nguyên nhân" },
      { term: "Impact", vietnamese: "Tác động" },
      { term: "Time management", vietnamese: "Quản lý thời gian" },
      { term: "Prioritizing", vietnamese: "Ưu tiên" },
      { term: "Manageable", vietnamese: "Có thể quản lý được" },
      { term: "Alleviate", vietnamese: "Giảm bớt" },
      { term: "Overwhelm", vietnamese: "Bị áp đặt" },
      { term: "Relaxation techniques", vietnamese: "Các kỹ thuật thư giãn" },
      { term: "Deep breathing", vietnamese: "Thở sâu" },
      { term: "Meditation", vietnamese: "Thiền" },
      { term: "Endorphins", vietnamese: "Endorphins" },
      { term: "Support system", vietnamese: "Hệ thống hỗ trợ" },
      { term: "Trusted individuals", vietnamese: "Những người tin cậy" },
      { term: "Healthy habits", vietnamese: "Thói quen lành mạnh" },
      { term: "Balanced diet", vietnamese: "Chế độ ăn cân đối" }
    ]
  },
  {
    id: 22,
    title: "Globalization",
    question: "Discuss the impact of globalization on culture.",
    sections: [
      {
        type: 'paragraph',
        content: "I personally feel globalization is good. It has let other people know about Vietnamese culture and food. We have also come to know about other countries and their culture. This has many advantages such as:"
      },
      {
        type: 'points',
        points: [
          {
            title: "Connecting Cultures",
            english: "Globalization brings people from different cultures closer, helping us learn and understand each other better.",
            vietnamese: "Toàn cầu hóa đưa mọi người từ các văn hóa khác nhau gần nhau, giúp chúng ta học và hiểu biết lẫn nhau tốt hơn."
          },
          {
            title: "Sharing Appreciation",
            english: "Now, we can appreciate and enjoy traditions and ideas from all over the world, making life more interesting.",
            vietnamese: "Bây giờ, chúng ta có thể đánh giá và tận hưởng các truyền thống và ý tưởng từ khắp nơi, làm cho cuộc sống thêm phần thú vị."
          },
          {
            title: "TV and Internet Influence",
            english: "TV and the internet show us cool things from different places, making us curious about the world.",
            vietnamese: "TV và internet cho chúng ta thấy những điều thú vị từ các nơi khác nhau, khiến cho chúng ta muốn biết thêm về thế giới."
          },
          {
            title: "Mixing Traditions",
            english: "Our old ways mix with new ideas, creating a mix of traditions that make our culture unique.",
            vietnamese: "Cách làm cũ của chúng ta kết hợp với ý tưởng mới, tạo ra một sự pha trộn văn hóa làm cho nền văn hóa của chúng ta trở nên độc đáo."
          },
          {
            title: "Business Opportunities",
            english: "People who share their culture through businesses can make more money when more people know about them.",
            vietnamese: "Người ta có thể kiếm nhiều tiền hơn khi họ chia sẻ văn hóa qua kinh doanh, đặc biệt là khi nhiều người biết đến họ."
          },
          {
            title: "Different Opinions",
            english: "Some people like learning from other cultures, but others may feel worried about losing their own traditions.",
            vietnamese: "Một số người thích học từ các văn hóa khác, nhưng có người có thể lo lắng về việc mất mát truyền thống của mình."
          },
          {
            title: "Language Changes",
            english: "More people now speak languages that many others also speak, but we should still love and use our local languages.",
            vietnamese: "Hiện nay, nhiều người nói những ngôn ngữ mà nhiều người khác cũng nói, nhưng chúng ta vẫn nên yêu và sử dụng ngôn ngữ địa phương của mình."
          },
          {
            title: "Changing Habits",
            english: "Sometimes, new ideas from different places can change the way we do things, and that's okay.",
            vietnamese: "Đôi khi, ý tưởng mới từ nhiều nơi khác nhau có thể thay đổi cách chúng ta làm việc, và điều đó là hoàn toàn chấp nhận được."
          },
          {
            title: "Learning at School",
            english: "In school, we learn about different cultures, so we can be friends with people from all over the world.",
            vietnamese: "Ở trường, chúng ta học về nhiều văn hóa khác nhau, để có thể làm bạn với mọi người từ khắp nơi trên thế giới."
          },
          {
            title: "Thinking About Our Culture",
            english: "It's important for us to think about how new ideas and cultures affect our own, and what makes our culture special.",
            vietnamese: "Quan trọng là chúng ta phải suy nghĩ về cách ý tưởng và văn hóa mới ảnh hưởng đến văn hóa của chúng ta, và điều gì làm cho nền văn hóa của chúng ta trở nên đặc biệt."
          }
        ]
      }
    ],
    vocabulary: [
      { term: "Connecting Cultures", vietnamese: "Kết nối văn hóa" },
      { term: "Sharing Appreciation", vietnamese: "Chia sẻ sự đánh giá" },
      { term: "TV and Internet Influence", vietnamese: "Ảnh hưởng từ TV và internet" },
      { term: "Mixing Traditions", vietnamese: "Pha trộn truyền thống" },
      { term: "Business Opportunities", vietnamese: "Cơ hội kinh doanh" },
      { term: "Different Opinions", vietnamese: "Quan điểm khác nhau" },
      { term: "Language Changes", vietnamese: "Thay đổi ngôn ngữ" },
      { term: "Changing Habits", vietnamese: "Thay đổi thói quen" },
      { term: "Learning at School", vietnamese: "Học ở trường" },
      { term: "Thinking About Our Culture", vietnamese: "Suy nghĩ về văn hóa của chúng ta" }
    ]
  },
  {
    id: 23,
    title: "Interesting Museum",
    question: "Describe an interesting museum you have visited.",
    sections: [
      {
        type: 'paragraph',
        content: "I have visited the war memorial museum in Ho Chi Minh City. It reminds us about the wounds of the past and the struggle for our independence. I have always had great respect for our army and the leaders who have in the past and even today fight for the development and freedom of the people of Vietnam from oppression and social problems.\n\nWe must salute the martyrs for their courage and their heroism. I admire that a lot. I saw a lot of Art and old photos in the museum about the war. It was also about the French and American eras of illegal occupation of my nation and how the atrocities were committed.\n\nI hope one day we can move forward and heal from it. We must forgive the past but never forget it is what I learnt there.\n\nI am proud of Vietnam and Vietnamese people.",
        vietnameseContent: "\"Tôi đã thăm Bảo tàng Chiến tranh ở Thành phố Hồ Chí Minh. Nó làm chúng ta nhớ về những vết thương của quá khứ và cuộc đấu tranh cho độc lập của chúng ta. Tôi luôn tôn trọng cao đội quân và những nhà lãnh đạo đã từng và ngày nay đang chiến đấu cho sự phát triển và tự do của nhân dân Việt Nam khỏi sự áp bức và vấn đề xã hội.\n\nChúng ta phải tôn vinh những liệt sĩ vì sự can đảm và anh dũng của họ. Tôi rất ngưỡng mộ điều đó. Tôi thấy nhiều tác phẩm nghệ thuật và ảnh cũ trong bảo tàng về chiến tranh. Đó cũng là về thời kỳ thực dân Pháp và Mỹ chiếm đóng bất hợp pháp quê hương của tôi và những tội ác đã được thực hiện.\n\nTôi hy vọng một ngày nào đó chúng ta có thể tiến lên và lành là từ đó. Chúng ta phải tha thứ cho quá khứ nhưng không bao giờ quên, đó là điều tôi học được ở đó.\n\nTôi tự hào về Việt Nam và nhân dân Việt Nam.\""
      }
    ],
    vocabulary: [
      { term: "Visited", vietnamese: "Thăm" },
      { term: "War memorial museum", vietnamese: "Bảo tàng Chiến tranh" },
      { term: "Reminds", vietnamese: "Nhắc nhở" },
      { term: "Wounds", vietnamese: "Vết thương" },
      { term: "Struggle", vietnamese: "Cuộc đấu tranh" },
      { term: "Independence", vietnamese: "Độc lập" },
      { term: "Great respect", vietnamese: "Tôn trọng cao độ" },
      { term: "Army", vietnamese: "Quân đội" },
      { term: "Leaders", vietnamese: "Nhà lãnh đạo" },
      { term: "Martyrs", vietnamese: "Liệt sĩ" },
      { term: "Heroism", vietnamese: "Anh dũng" },
      { term: "Atrocities", vietnamese: "Tội ác" },
      { term: "Move forward", vietnamese: "Tiến lên" },
      { term: "Heal", vietnamese: "Lành là" },
      { term: "Forgive", vietnamese: "Tha thứ" }
    ]
  },
  {
    id: 24,
    title: "Working from Home",
    question: "What are the advantages and disadvantages of working from home?",
    sections: [
      {
        type: 'paragraph',
        content: "Well like any thing in this world we have advantages and disadvantages to working from home. Some advantages and disadvantages I can think of are:"
      },
      {
        type: 'points',
        points: [
          {
            title: "Advantages (Set 1)",
            english: "Flexibility, No Commute, Work-Life Balance, Cost Savings, Autonomy.",
            vietnamese: "Thuận lợi: Linh hoạt, Không đi lại, Cân bằng công việc-gia đình, Tiết kiệm chi phí, Tự quản lý."
          },
          {
            title: "Disadvantages (Set 1)",
            english: "Isolation, Distractions, Communication Challenges, Limited Collaboration, Overworking.",
            vietnamese: "Bất lợi: Cô lập, Quấy rối, Thách thức giao tiếp, Hạn chế hợp tác, Làm việc quá mức."
          },
          {
            title: "Advantages (Set 2)",
            english: "Increased Productivity, Time Savings, Personalized Environment, Better Work-Life Integration, Reduced Stress.",
            vietnamese: "Thuận lợi: Tăng năng suất, Tiết kiệm thời gian, Môi trường cá nhân hóa, Tích hợp công việc-gia đình tốt hơn, Giảm căng thẳng."
          },
          {
            title: "Disadvantages (Set 2)",
            english: "Lack of Face-to-Face Interaction, Technology Issues, Time Zone Challenges, Difficulty in Team Building, Unhealthy Lifestyle.",
            vietnamese: "Bất lợi: Thiếu giao tiếp trực tiếp, Vấn đề công nghệ, Thách thức múi giờ, Khó khăn trong xây dựng đội nhóm, Lối sống không lành mạnh."
          },
           {
            title: "Advantages (Set 3)",
            english: "Access to a Global Talent Pool, Environmental Impact Reduction, Improved Job Satisfaction, Enhanced Family Time, Customized Workspace.",
            vietnamese: "Thuận lợi: Tiếp cận nguồn nhân tài toàn cầu, Giảm ảnh hưởng môi trường, Tăng sự hài lòng trong công việc, Thời gian gia đình tốt hơn, Không gian làm việc cá nhân hóa."
          }
        ]
      },
      {
        type: 'paragraph',
        content: "It depends on us if we want to do it or not. Like anything in life its a choice.",
        vietnameseContent: "\"Phụ thuộc vào chúng ta liệu chúng ta muốn làm hay không. Như mọi thứ trong cuộc sống, đó là một sự lựa chọn.\""
      }
    ],
    vocabulary: [
      { term: "Flexibility", vietnamese: "Linh hoạt" },
      { term: "No Commute", vietnamese: "Không đi lại" },
      { term: "Work-Life Balance", vietnamese: "Cân bằng công việc-gia đình" },
      { term: "Cost Savings", vietnamese: "Tiết kiệm chi phí" },
      { term: "Autonomy", vietnamese: "Tự quản lý" },
      { term: "Isolation", vietnamese: "Cô lập" },
      { term: "Distractions", vietnamese: "Quấy rối" },
      { term: "Overworking", vietnamese: "Làm việc quá mức" },
      { term: "Increased Productivity", vietnamese: "Tăng năng suất" },
      { term: "Personalized Environment", vietnamese: "Môi trường cá nhân hóa" },
      { term: "Lack of Face-to-Face Interaction", vietnamese: "Thiếu giao tiếp trực tiếp" },
      { term: "Technology Issues", vietnamese: "Vấn đề công nghệ" },
      { term: "Difficulty in Team Building", vietnamese: "Khó khăn trong xây dựng đội nhóm" },
      { term: "Unhealthy Lifestyle", vietnamese: "Lối sống không lành mạnh" },
      { term: "Access to a Global Talent Pool", vietnamese: "Tiếp cận nguồn nhân tài toàn cầu" }
    ]
  }
];