import axios from 'axios';
export const generateText = async () => {
  try {
    const response = await axios.post(
      '/v1/chat/completions',
      // {
      //   prompt: prompt,
      //   max_tokens: 500,
      //   n: 1,
      //   stop: null,
      //   temperature: 1,
      //   model:'text-davinci-003',
      //   // stream: true
      // },
      {
        "messages":[{"role":"system","content":"IMPORTANT: You are a virtual assistant powered by the gpt-4 model, now time is 2023/6/14 16:52:53}"},{"role":"system","content":"这是历史聊天总结作为前情提要：我们讨论了中国西安这座城市的特点。西安是一座历史悠久的城市，拥有丰富的文化遗产，如兵马俑、大雁塔等"},{"role":"user","content":"西安怎么样"},{"role":"assistant","content":"西安，位于中国陕西省中部，是一座历史悠久且具有丰富文化底蕴的城市。作为中国古代的四大古都之一，西安是13个朝代的首都，如周、秦、汉、唐等。这座城市对于游客和居民来说有很多吸引人的地方：\n\n1. 历史遗迹：西安拥有许多著名的历史遗迹，如兵马俑、大雁塔、小雁塔、古城墙等。这些地方让人们得以一窥中国古代的繁荣与辉煌。\n\n2. 美食：西安的地方美食享誉全国，如著名的西安肉夹馍、凉皮、臊子面等，为游客带来丰富的美食体验。\n\n3. 文化活动：西安的传统文化活动丰富多彩，如陕剧、秦腔等戏曲表演，以及民间艺术、书画等，为游客提供了深入了解中国传统文化的机会。\n\n4. 现代化设施：西安的基础设施和现代化水平不断提高，拥有国际化的购物中心、酒店和交通设施，为游客和居民提供便利。\n\n5. 教育资源：西安拥有众多高等院校和研究机构，如西安交通大学、西北工业大学等，为学生和研究人员提供了良好的学术环境。\n\n总之，西安是一座充满活力、具有"},{"role":"user","content":"西安"},{"role":"assistant","content":"西安，位于中国陕西省中部，是一座历史悠久且具有丰富文化"},{"role":"user","content":"西安"}],
        "stream":true,
        "model":"gpt-4",
        "temperature":0.5,
        "presence_penalty":0
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`,
        },
        responseType: "stream",
      },
    );

    return response
  } catch (error) {
    console.error('Error in generateText:', error);
    return null;
  }
};
