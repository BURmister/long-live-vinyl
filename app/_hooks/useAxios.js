import axios from 'axios';

export const fetchGetQuery = async (url) => {
   if (!url) return;

   try {
      const { data } = await axios.get(url);
      return data;
   } catch (error) {
      console.error(error);
   }
};
